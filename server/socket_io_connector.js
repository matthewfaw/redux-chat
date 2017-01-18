import io from 'socket.io';

const connect = (server) => {
    const socketServer = io(server);
    const connections = [];

    socketServer.on('connection', socket => {
        console.log('connected');
        connections.push(socket);

        socket.on('message', data => {
            connections.forEach( connectedSocket => {
                if (connectedSocket !== socket) {
                    console.log('emitting message', data.message)
                    connectedSocket.emit('message', data);
                }
            });
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    });
}

export default connect;
