import ActionTypes from '../../actions/actionTypes'

const message = (state=
            {
                sender: "",
                time: undefined,
                body: "",
            }
    , action) => {
    switch(action.type) {
        case ActionTypes.SEND_MESSAGE_SUCCESS:
            return {
                sender: action.sender,
                time: action.time,
                body: action.message,
            }
        default:
            return state;
    }
};

const messages = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.SEND_MESSAGE_SUCCESS:
            return [
                ...state,
                message(undefined, action),
            ];
        default:
            return state;
    }
};

export default messages;
