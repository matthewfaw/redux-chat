'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect(server) {
    var socketServer = (0, _socket2.default)(server);
    var connections = [];

    socketServer.on('connection', function (socket) {
        console.log('connected');
        connections.push(socket);

        socket.on('message', function (data) {
            connections.forEach(function (connectedSocket) {
                if (connectedSocket !== socket) {
                    console.log('emitting message', data.message);
                    connectedSocket.emit('message', data);
                }
            });
        });

        socket.on('disconnect', function () {
            console.log('disconnected');
            var index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    });
};

exports.default = connect;