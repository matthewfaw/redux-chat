import ActionTypes from '../../actions/actionTypes';
import ActionStatus from '../../actions/actionStatus';
import terminal from './terminal';

const currentMessage = (state='', action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_MESSAGE_TEXT:
            return action.text;
        case ActionTypes.SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}

const currentConversationText = (state='', action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_CONVERSATION_TEXT:
            return action.text;
        case ActionTypes.ADD_CONVERSATION:
            if (action.status === ActionStatus.FINISHED) {
                return "";
            } else {
                return state;
            }
        default:
            return state;
    }
}

const gui = (state=
{
    terminal: undefined,
    currentMessage: undefined, 
    currentConversationText: undefined,
}, 
action) => {
    return {
        ...state,
        terminal: terminal(state.terminal, action),
        currentMessage: currentMessage(state.currentMessage, action),
        currentConversationText: currentConversationText(state.currentConversationText, action),
    }
}

export default gui;
