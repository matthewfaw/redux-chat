import mongoose from 'mongoose';
import { User, Conversation, Branch, Message } from './models.js';

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);

export const saveMessage = (action, emitter) => {
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
                    emitter(messageResponse)
                })

        })
}
export const getMessages = (name, conversation, branch, res) => {
    User.findOne({ name: name })
        .populate({
            path: 'conversations',
            match: { name: conversation },
            populate: { 
                path: 'branches',
                match: { name: branch },
                populate: { 
                    path: 'messages',
                    populate: {
                        path: 'sender',
                    }
                }
            },
        })
        .exec((err, user) => {
            if (err) res.end();
            res.send({'messages': user.conversations[0].branches[0].messages});
        })
}
export const getConversations = (name, res) => {
    User.findOne({ name: name })
        .populate('conversations')
        .exec((err, user) => {
            if (err) res.end();
            console.log(user.name);
            res.send({'conversations': user.conversations.map(conv => conv.name)});
        })
}

export const postConversation = (conversationName, defaultBranchName, senderName) => {
    let newConversation = new Conversation({ name: conversationName });
    newConversation.save((err) => {
        User.findOne({ name: senderName }, (err, user) => {
            console.log(user.name);
            user.conversations.push(newConversation._id);
            user.markModified('conversation');
            console.log(user);
            user.save();
            newConversation.participants.push(user._id);
            let newBranch = new Branch({ 
                name: defaultBranchName
            })
            console.log(newBranch)
            newBranch.save((err) => {
                newConversation.branches.push(newBranch._id);
                newConversation.markModified('participants', 'branches');
                console.log(newConversation);
                newConversation.save();
            });
        })
    })
}

