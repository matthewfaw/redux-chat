'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectIO = undefined;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _mongo_connector = require('./db/mongo_connector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = function emitter(connections) {
    return function (messageResponse) {
        connections.forEach(function (connectedSocket) {
            connectedSocket.emit('message', messageResponse);
        });
    };
};

var connectIO = exports.connectIO = function connectIO(server) {
    var socketServer = (0, _socket2.default)(server);
    var connections = [];

    socketServer.on('connection', function (socket) {
        console.log('connected');
        connections.push(socket);

        socket.on('message', function (action) {
            console.log('MESSAGE');
            (0, _mongo_connector.saveMessage)(action, emitter(connections));
        });

        socket.on('disconnect', function () {
            console.log('disconnected');
            var index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    });
};