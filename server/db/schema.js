import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const userSchema = Schema({
    name: String,
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const conversationSchema = Schema({
    name: String,
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
});

export const branchSchema = Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

export const messageSchema = Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    branch: { type: Schema.Types.ObjectId, ref: 'Branch' },
    seenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: { type: Date, default: Date.now },
    body: String,
});

