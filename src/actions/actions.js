import ActionTypes from './actionTypes';

export const loadConversation = (conversationId) => ({
    type: ActionTypes.LOAD_CONVERSATION,
    id: conversationId,
});

export const sendMessage = (message, sender) => ({
    type: ActionTypes.SEND_MESSAGE,
    sender: sender,
    time: Date.now(),
    message: message,
});

export const addParticipant = (participantId) => ({
    type: ActionTypes.ADD_PARTICIPANT,
    id: participantId,
});

export const createBranch = (branchName) => ({
    type: ActionTypes.CREATE_BRANCH,
    branchName: branchName,
});

export const checkoutBranch = (branchName) => ({
    type: ActionTypes.CHECKOUT_BRANCH,
    branchName: branchName,
});

export const deleteBranch = (branchName) => ({
    type: ActionTypes.DELETE_BRANCH,
    branchName: branchName,
});

export const createConversation = (conversationName) => ({
    type: ActionTypes.CREATE_CONVERSATION,
    conversationName: conversationName,
});

export const checkoutConversation = (conversationName) => ({
    type: ActionTypes.CHECKOUT_CONVERSATION,
    conversationName: conversationName,
});

export const deleteConversation = (conversationName) => ({
    type: ActionTypes.DELETE_CONVERSATION,
    conversationName: conversationName,
});

