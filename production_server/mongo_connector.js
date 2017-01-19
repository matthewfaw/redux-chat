'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = exports.Branch = exports.Conversation = exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
_mongoose2.default.connect(process.env.MONGO_URI);

var userSchema = _mongoose2.default.Schema({
    name: String,
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var conversationSchema = _mongoose2.default.Schema({
    name: String,
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }]
});

var branchSchema = _mongoose2.default.Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

var messageSchema = _mongoose2.default.Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    seenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: { type: Date, default: Date.now },
    body: String
});

var User = exports.User = _mongoose2.default.model('User', userSchema);
var Conversation = exports.Conversation = _mongoose2.default.model('Conversation', conversationSchema);
var Branch = exports.Branch = _mongoose2.default.model('Branch', branchSchema);
var Message = exports.Message = _mongoose2.default.model('Message', messageSchema);