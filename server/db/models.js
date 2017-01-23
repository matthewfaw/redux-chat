import mongoose from 'mongoose';
import { userSchema, conversationSchema, branchSchema, messageSchema } from './schema.js';

export const User = mongoose.model('User', userSchema);
export const Conversation = mongoose.model('Conversation', conversationSchema);
export const Branch = mongoose.model('Branch', branchSchema);
export const Message = mongoose.model('Message', messageSchema);
