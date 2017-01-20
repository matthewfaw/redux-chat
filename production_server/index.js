'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _socket_io_connector = require('./socket_io_connector');

var _socket_io_connector2 = _interopRequireDefault(_socket_io_connector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { User, Conversation } from './mongo_connector';

var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var PORT = 3000;

app.set('port', process.env.PORT || PORT);

app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'build')));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

(0, _socket_io_connector2.default)(server);

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, '..', 'build', 'index.html'));
});

app.route('/list').post(function (req, res) {
    console.log(req.body);
    //let derpton = new User({ name: req.body.login });
    //derpton.save();
    res.end();
});

app.route('/conversations').get(function (req, res) {
    console.log('name: ', req.query['name']);
    res.send({ 'conversations': ['derp', 'bledp'] });
}).post(function (req, res) {
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
});

server.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port') + '!');
});