import ActionTypes from '../../actions/actionTypes'
import ActionStatus from '../../actions/actionStatus'

const updateName = (state="Matthew", action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const updateCurrentConversation = (state="", action) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            if (state === "") {
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
        case ActionTypes.CREATE_CONVERSATION:
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
        case ActionTypes.SEND_MESSAGE:
            if (action.status === ActionStatus.REQUESTING) {
                return true;
            } else {
                return false;
            }
        default:
            return false;
    }
}

const updateIsLoadingMessages = (state=false, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_CONVERSATION:
            if (action.status === ActionStatus.REQUESTING) {
                return true;
            } else {
                return false;
            }
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
