import http from 'http';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import socketIOConnector from './socket_io_connector';
import io from 'socket.io';

import { User, Branch, Conversation, Message } from './mongo_connector';

const app = express();
const server = http.Server(app);
const PORT = 3000;

app.set('port', process.env.PORT || PORT);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'build')));
} else {
    app.use(express.static(path.resolve(__dirname, '..', 'public/js')));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let socketServer = io(server)
socketIOConnector(socketServer);

app.all('/*', function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, DELETE");
    next();
});

app.get('/', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    } else {
        res.sendFile(path.resolve(__dirname, '..', 'public', 'index.dev.html'));
    }
});

app.route('/list')
    .post((req, res) => {
        console.log(req.body);
        //let derpton = new User({ name: req.body.login });
        //derpton.save();
        res.end();
    });

app.route('/messages')
    .get((req, res) => {
        console.log(req.query)
        User.findOne({ name: req.query['name'] })
            .populate({
                path: 'conversations',
                match: { name: req.query['conversation'] },
                populate: { 
                    path: 'branches',
                    match: { name: req.query['branch'] },
                    populate: { 
                        path: 'messages',
                        populate: {
                            path: 'sender',
                        }
                    }
                },
            })
            .exec((err, user) => {
                if (err) res.end();
                res.send({'messages': user.conversations[0].branches[0].messages});
                //res.send({'conversations': user.conversations.map(conv => conv.name)});
            })
    })
    //.post((req, res) => {
        //console.log(req.body);
        //let newMessage = new Message({ 
            //body: req.body.body,
        //})
        //User.findOne({ name: req.body.creatorId.name })
            //.exec((err, user) => {
                //console.log(user.name)
                //newMessage.sender = user._id;
                //Branch.findOne({ name: req.body.creatorId.currentBranch })
                    //.exec( (err, branch) => {
                        //console.log(branch.name)
                        //branch.messages.push(newMessage._id);
                        //branch.markModified('messages');
                        //branch.save();
                        //newMessage.branch = branch._id;
                        //newMessage.save();

                        //let messageResponse = {
                            //body: newMessage.body,
                            //sender: { name: user.name },
                            //time: newMessage.time,
                        //}
                        //console.log(messageResponse);
                        //socektServer.emit('message', messageResponse);
                        //res.send(messageResponse);
                    //} )
            //})
    //})
app.route('/conversations')
    .get((req, res) => {
        console.log('name: ', req.query['name'])
        User.findOne({ name: req.query['name'] })
            .populate('conversations')
            .exec((err, user) => {
                if (err) res.end();
                console.log(user.name);
                res.send({'conversations': user.conversations.map(conv => conv.name)});
            })
    })
    .post((req, res) => {
        console.log(req.body);
        let newConversation = new Conversation({ name: req.body.name });
        newConversation.save((err) => {
            User.findOne({ name: req.body.creatorId }, (err, user) => {
                console.log(user.name);
                user.conversations.push(newConversation._id);
                user.markModified('conversations');
                console.log(user);
                user.save();
                newConversation.participants.push(user._id);
                newConversation.markModified('participants');
                console.log(newConversation);
                newConversation.save();
            })
        })
        res.end();
    })

server.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
