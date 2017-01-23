'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageSchema = exports.branchSchema = exports.conversationSchema = exports.userSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = exports.userSchema = Schema({
    name: String,
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var conversationSchema = exports.conversationSchema = Schema({
    name: String,
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }]
});

var branchSchema = exports.branchSchema = Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

var messageSchema = exports.messageSchema = Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    branch: { type: Schema.Types.ObjectId, ref: 'Branch' },
    seenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: { type: Date, default: Date.now },
    body: String
});