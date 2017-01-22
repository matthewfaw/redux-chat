import http from 'http';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import socketIOConnector from './socket_io_connector';

//import { User, Conversation } from './mongo_connector';

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

socketIOConnector(server);

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

app.route('/conversations')
    .get((req, res) => {
        console.log('name: ', req.query['name'])
        res.send({'conversations': ['derp','bledp']});
    })
    .post((req, res) => {
        console.log(req.body);
        //let newConversation = new Conversation({ name: req.body.name });
        //newConversation.save((err) => {
            //User.findOne({ name: req.body.creatorId }, (err, user) => {
                //console.log(user.name);
                //user.conversations.push(newConversation._id);
                //user.markModified('conversations');
                //console.log(user);
                //user.save();
                //newConversation.participants.push(user._id);
                //newConversation.markModified('participants');
                //console.log(newConversation);
                //newConversation.save();
            //})
        //})
        res.end();
    })

server.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
