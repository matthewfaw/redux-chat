'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postConversation = exports.getConversations = exports.getMessages = exports.saveMessage = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _models = require('./models.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = Promise;
_mongoose2.default.connect(process.env.MONGODB_URI);

var saveMessage = exports.saveMessage = function saveMessage(action, emitter) {
    var newMessage = new _models.Message({
        body: action.message
    });
    _models.User.findOne({ name: action.sender.name }).exec(function (err, user) {
        console.log(user.name);
        newMessage.sender = user._id;
        _models.Conversation.findOne({ name: action.sender.currentConversation }).populate({
            path: 'branches',
            matches: { name: action.sender.currentBranch },
            options: { limit: 1 }
        }).exec(function (err, conversation) {
            var branch = conversation.branches[0];
            console.log(branch.name);
            branch.messages.push(newMessage._id);
            branch.markModified('messages');
            branch.save();
            newMessage.branch = branch._id;
            newMessage.save();

            var messageResponse = {
                body: newMessage.body,
                sender: { name: user.name },
                time: newMessage.time
            };
            console.log(messageResponse);
            emitter(messageResponse);
        });
    });
};
var getMessages = exports.getMessages = function getMessages(name, conversation, branch, res) {
    _models.User.findOne({ name: name }).populate({
        path: 'conversations',
        match: { name: conversation },
        populate: {
            path: 'branches',
            match: { name: branch },
            populate: {
                path: 'messages',
                populate: {
                    path: 'sender'
                }
            }
        }
    }).exec(function (err, user) {
        if (err) res.end();
        res.send({ 'messages': user.conversations[0].branches[0].messages });
    });
};
var getConversations = exports.getConversations = function getConversations(name, res) {
    _models.User.findOne({ name: name }).populate('conversations').exec(function (err, user) {
        if (err) res.end();
        console.log(user.name);
        res.send({ 'conversations': user.conversations.map(function (conv) {
                return conv.name;
            }) });
    });
};

var postConversation = exports.postConversation = function postConversation(conversationName, defaultBranchName, senderName) {
    var newConversation = new _models.Conversation({ name: conversationName });
    newConversation.save(function (err) {
        _models.User.findOne({ name: senderName }, function (err, user) {
            console.log(user.name);
            user.conversations.push(newConversation._id);
            user.markModified('conversation');
            console.log(user);
            user.save();
            newConversation.participants.push(user._id);
            var newBranch = new _models.Branch({
                name: defaultBranchName
            });
            console.log(newBranch);
            newBranch.save(function (err) {
                newConversation.branches.push(newBranch._id);
                newConversation.markModified('participants', 'branches');
                console.log(newConversation);
                newConversation.save();
            });
        });
    });
};