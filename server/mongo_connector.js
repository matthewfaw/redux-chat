import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);

const userSchema = mongoose.Schema({
    name: String,
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const conversationSchema = mongoose.Schema({
    name: String,
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
});

const branchSchema = mongoose.Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

const messageSchema = mongoose.Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    seenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: { type: Date, default: Date.now },
    body: String,
});

export const User = mongoose.model('User', userSchema);
export const Conversation = mongoose.model('Conversation', conversationSchema);
export const Branch = mongoose.model('Branch', branchSchema);
export const Message = mongoose.model('Message', messageSchema);
