import ActionTypes from '../../actions/actionTypes';
import terminal from './terminal';

const currentMessage = (state='', action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_MESSAGE_TEXT:
            return action.text;
        default:
            return state;
    }
}

const currentConversationText = (state='', action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_CONVERSATION_TEXT:
            return action.text;
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
