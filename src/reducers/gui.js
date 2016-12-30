import ActionTypes from '../actions/actionTypes';

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
            currentMessage: undefined, 
            currentConversationText: undefined,
        }, 
        action, baseState) => {
            return {
                ...state,
                currentMessage: currentMessage(state.currentMessage, action),
                currentConversationText: currentConversationText(state.currentConversationText, action),
            }
        }

export default gui;
