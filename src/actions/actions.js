import ActionTypes from './actionTypes';
import ActionStatus from './actionStatus';

export const loadConversation = (conversationId) => ({
    type: ActionTypes.LOAD_CONVERSATION,
    status: ActionStatus.REQUESTING,
    id: conversationId,
});

export const changeMessageText = (newText) => ({
    type: ActionTypes.CHANGE_MESSAGE_TEXT,
    text: newText,
})

export const changeConversationText = (newText) => ({
    type: ActionTypes.CHANGE_CONVERSATION_TEXT,
    text: newText,
})

export const sendMessage = (message, sender) => ({
    type: ActionTypes.SEND_MESSAGE,
    status: ActionStatus.REQUESTING,
    sender: sender,
    time: Date.now(),
    message: message,
});

export const addParticipant = (participantId) => ({
    type: ActionTypes.ADD_PARTICIPANT,
    id: participantId,
});

export const changeTerminalInputText = (text) => ({
    type: ActionTypes.CHANGE_TERMINAL_INPUT_TEXT,
    text: text,
});

export const submitTerminalInputText = (text, response, status) => ({
    type: ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT,
    response: response,
    status: status,
    text: text,
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

export const addConversation = (conversationName, status) => ({
    type: ActionTypes.ADD_CONVERSATION,
    status: status,
    conversationName: conversationName,
    defaultBranchName: "DEFAULT",
});

export const checkoutConversation = (conversationName) => ({
    type: ActionTypes.CHECKOUT_CONVERSATION,
    conversationName: conversationName,
});

export const deleteConversation = (conversationName) => ({
    type: ActionTypes.DELETE_CONVERSATION,
    conversationName: conversationName,
});

