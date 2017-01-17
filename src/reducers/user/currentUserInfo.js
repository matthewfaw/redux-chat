import ActionTypes from '../../actions/actionTypes'
import { browserHistory } from 'react-router';

const updateName = (state="Matthew", action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const updateCurrentConversation = (state="", action) => {
    switch(action.type) {
        case ActionTypes.LOAD_CONVERSATION_REQUEST:
            browserHistory.push(`/${action.id}`)
            return action.id
        case ActionTypes.ADD_CONVERSATION_SUCCESS:
            if (state === "") {
                browserHistory.push(`/${action.conversationName}`)
                return action.conversationName;
            } else {
                return state;
            }
        default:
            return state;
    }
}

const updateCurrentBranch = (state="", action) => {
    switch(action.type) {
        case ActionTypes.ADD_CONVERSATION_SUCCESS:
            if (state === "") {
                return action.defaultBranchName;
            } else {
                return state;
            }
        default:
            return state;
    }
}

const updateIsSendingMessage = (state=false, action) => {
    switch(action.type) {
        case ActionTypes.SEND_MESSAGE_REQUEST:
            return true;
        default:
            return false;
    }
}

const updateIsLoadingMessages = (state=false, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_CONVERSATION_REQUEST:
            return true;
        default:
            return false;
    }
}

const currentUserInfo = (state=
{
    name: undefined,
    currentConversation: undefined,
    currentBranch: undefined,
    isSendingMessage: undefined,
    isLoadingMessages: undefined,
}
, action) => {
    return {
        ...state,
        name: updateName(state.name, action),
        currentConversation: updateCurrentConversation(state.currentConversation, action),
        currentBranch: updateCurrentBranch(state.currentBranch, action),
        isSendingMessage: updateIsSendingMessage(state.isSendingMessage, action),
        isLoadingMessages: updateIsLoadingMessages(state.isLoadingMessages, action),
    }
};

export default currentUserInfo;
