'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.Branch = exports.Conversation = exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = exports.User = _mongoose2.default.model('User', _schema.userSchema);
var Conversation = exports.Conversation = _mongoose2.default.model('Conversation', _schema.conversationSchema);
var Branch = exports.Branch = _mongoose2.default.model('Branch', _schema.branchSchema);
var Message = exports.Message = _mongoose2.default.model('Message', _schema.messageSchema);