import ActionTypes from '../actions/actionTypes'

const message = (state, action) => {
    switch(action.type) {
        case ActionType.SEND_MESSAGE:
            return {
                sender: action.sender,
                time: action.time,
                body: action.message,
            }
    }
};

const messages = (state, action) => {
    switch(action.type) {
        case ActionTypes.SEND_MESSAGE:
            return [
                ...state,
                message(undefined, action),
            ];
        default:
            return state;
    }
};

export default messages;
