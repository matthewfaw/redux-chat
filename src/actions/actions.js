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

export const addParticipant: = (participantId) => ({
    type: ActionType.ADD_PARTICIPANT,
    id: participantId,
});

export const createBranch = (branchName) => ({
    type: ActionType.CREATE_BRANCH,
    branchName: branchName,
});

export const checkoutBranch = (branchName) => ({
    type: ActionType.CHECKOUT_BRANCH,
    branchName: branchName,
});

export const deleteBranch = (branchName) => ({
    type: ActionType.DELETE_BRANCH,
    branchName: branchName,
});

export const createConversation = (conversationName) => ({
    type: ActionType.CREATE_CONVERSATION,
    conversationName: conversationName,
});

export const checkoutConversation = (conversationName) => ({
    type: ActionType.CHECKOUT_CONVERSATION,
    conversationName: conversationName,
});

export const deleteConversation = (conversationName) => ({
    type: ActionType.DELETE_CONVERSATION,
    conversationName: conversationName,
});

