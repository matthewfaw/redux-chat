import http from 'http';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import socketIOConnector from './socket_io_connector';

//import { User, Conversation } from './mongo_connector';

const app = express();
const server = http.Server(app);
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));
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
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/list', (req, res) => {
    console.log(req.body);
    //let derpton = new User({ name: req.body.login });
    //derpton.save();
    res.end();
});

app.route('/conversations')
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

server.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
