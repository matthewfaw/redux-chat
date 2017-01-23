import io from 'socket.io';
import { saveMessage } from './db/mongo_connector';

const emitter = (connections) => (messageResponse) => {
    connections.forEach( connectedSocket => {
        connectedSocket.emit('message', messageResponse);
    });
}


export const connectIO = (server) => {
    let socketServer = io(server)
    let connections = [];

    socketServer.on('connection', socket => {
        console.log('connected');
        connections.push(socket);

        socket.on('message', action => {
            console.log('MESSAGE')
            saveMessage(action, emitter(connections))
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    });
}
