import ActionTypes from './actionTypes';
import ActionStatus from './actionStatus';

export const requestLoadConversation = (conversationId) => ({
    type: ActionTypes.LOAD_CONVERSATION_REQUEST,
    id: conversationId,
});
export const failLoadConversation = (conversationId, error) => ({
    type: ActionTypes.LOAD_CONVERSATION_FAIL,
    id: conversationId,
    error: error
});
export const succeedLoadConversation = (conversationId) => ({
    type: ActionTypes.LOAD_CONVERSATION_SUCCESS,
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

export const requestSendMessage = (message, sender) => ({
    type: ActionTypes.SEND_MESSAGE_REQUEST,
    sender: sender,
    time: Date.now(),
    message: message,
});
export const failSendMessage = (message, sender, error) => ({
    type: ActionTypes.SEND_MESSAGE_FAIL,
    sender: sender,
    time: Date.now(),
    message: message,
    error: error,
});
export const succeedSendMessage = (message, sender) => ({
    type: ActionTypes.SEND_MESSAGE_SUCCESS,
    sender: sender,
    time: Date.now(),
    message: message,
});

export const requestAddParticipant = (participantId) => ({
    type: ActionTypes.ADD_PARTICIPANT_REQUEST,
    id: participantId,
});
export const failAddParticipant = (participantId, error) => ({
    type: ActionTypes.ADD_PARTICIPANT_FAIL,
    id: participantId,
    error: error,
});
export const succeedAddParticipant = (participantId) => ({
    type: ActionTypes.ADD_PARTICIPANT_SUCCESS,
    id: participantId,
});

export const changeTerminalInputText = (text) => ({
    type: ActionTypes.CHANGE_TERMINAL_INPUT_TEXT,
    text: text,
});

export const requestSubmitTerminalInputText = (text) => ({
    type: ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_REQUEST,
    text: text,
});
export const failSubmitTerminalInputText = (text, error) => ({
    type: ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_FAIL,
    text: text,
    error: error,
});
export const succeedSubmitTerminalInputText = (text, response) => ({
    type: ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_SUCCESS,
    text: text,
    response: response,
});

export const requestCreateBranch = (branchName) => ({
    type: ActionTypes.CREATE_BRANCH_REQUEST,
    branchName: branchName,
});
export const failCreateBranch = (branchName, error) => ({
    type: ActionTypes.CREATE_BRANCH_FAIL,
    branchName: branchName,
    error: error,
});
export const succeedCreateBranch = (branchName) => ({
    type: ActionTypes.CREATE_BRANCH_SUCCESS,
    branchName: branchName,
});

export const requestCheckoutBranch = (branchName) => ({
    type: ActionTypes.CHECKOUT_BRANCH_REQUEST,
    branchName: branchName,
});
export const failCheckoutBranch = (branchName, error) => ({
    type: ActionTypes.CHECKOUT_BRANCH_FAIL,
    branchName: branchName,
    error: error,
});
export const succeedCheckoutBranch = (branchName) => ({
    type: ActionTypes.CHECKOUT_BRANCH_SUCCESS,
    branchName: branchName,
});

export const requestDeleteBranch = (branchName) => ({
    type: ActionTypes.DELETE_BRANCH_REQUEST,
    branchName: branchName,
});
export const failDeleteBranch = (branchName, error) => ({
    type: ActionTypes.DELETE_BRANCH_FAIL,
    branchName: branchName,
    error: error,
});
export const succeedDeleteBranch = (branchName) => ({
    type: ActionTypes.DELETE_BRANCH_SUCCESS,
    branchName: branchName,
});

export const requestAddConversation = (conversationName) => ({
    type: ActionTypes.ADD_CONVERSATION_REQUEST,
    conversationName: conversationName,
    defaultBranchName: "DEFAULT",
});
export const failAddConversation = (conversationName, error) => ({
    type: ActionTypes.ADD_CONVERSATION_FAIL,
    conversationName: conversationName,
    defaultBranchName: "DEFAULT",
    error: error,
});
export const succeedAddConversation = (conversationName) => ({
    type: ActionTypes.ADD_CONVERSATION_SUCCESS,
    conversationName: conversationName,
    defaultBranchName: "DEFAULT",
});

export const requestCheckoutConversation = (conversationName) => ({
    type: ActionTypes.CHECKOUT_CONVERSATION_REQUEST,
    conversationName: conversationName,
});
export const failCheckoutConversation = (conversationName, error) => ({
    type: ActionTypes.CHECKOUT_CONVERSATION_FAIL,
    conversationName: conversationName,
    error: error,
});
export const succeedCheckoutConversation = (conversationName) => ({
    type: ActionTypes.CHECKOUT_CONVERSATION_SUCCESS,
    conversationName: conversationName,
});

export const requestDeleteConversation = (conversationName) => ({
    type: ActionTypes.DELETE_CONVERSATION,
    conversationName: conversationName,
});
export const failDeleteConversation = (conversationName, error) => ({
    type: ActionTypes.DELETE_CONVERSATION,
    conversationName: conversationName,
    error: error,
});
export const succeedDeleteConversation = (conversationName) => ({
    type: ActionTypes.DELETE_CONVERSATION,
    conversationName: conversationName,
});

