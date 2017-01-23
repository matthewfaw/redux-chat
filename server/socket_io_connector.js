import { User, Conversation, Branch, Message } from './mongo_connector';
const connect = (socketServer) => {
    const connections = [];

    socketServer.on('connection', socket => {
        console.log('connected');
        connections.push(socket);

        socket.on('message', action => {
            console.log('MESSAGE')
            let newMessage = new Message({ 
                body: action.message,
            })
            User.findOne({ name: action.sender.name })
                .exec((err, user) => {
                    console.log(user.name)
                    newMessage.sender = user._id;
                    Conversation.findOne({ name: action.sender.currentConversation })
                        .populate({
                            path: 'branches',
                            matches: { name: action.sender.currentBranch },
                            options: { limit: 1 }
                        })
                        .exec((err, conversation) => {
                            let branch = conversation.branches[0];
                            console.log(branch.name)
                            branch.messages.push(newMessage._id);
                            branch.markModified('messages');
                            branch.save();
                            newMessage.branch = branch._id;
                            newMessage.save();

                            let messageResponse = {
                                body: newMessage.body,
                                sender: { name: user.name },
                                time: newMessage.time,
                            }
                            console.log(messageResponse);
                            connections.forEach( connectedSocket => {
                                //if (connectedSocket !== socket) {
                                console.log('emitting message', action)
                                connectedSocket.emit('message', messageResponse);
                                //}
                            });
                        })
                    
                })
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    });
}

export default connect;
