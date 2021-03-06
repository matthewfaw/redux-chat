import ActionTypes from '../../actions/actionTypes';

const output = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_SUCCESS:
            return action.response;
        default:
            return state;
    }
}

const input = (state="", action) => {
    switch(action.type) {
        case ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_SUCCESS:
            return action.text;
        default:
            return state;
    }
}

const historyEntry = (state={
    input: undefined,
    output: undefined,
}, action) => {
    return {
        input: input(state.input, action),
        output: output(state.output, action),
    }
}

const history = (state=[], action) => {
    switch(action.type) {
        //case ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_REQUEST:
        case ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_SUCCESS:
            return [
                ...state,
                historyEntry(undefined, action),
            ]
        default:
            return state;
    
    }
    //return state.map(entry => historyEntry(entry, action));
}

const currentInputText = (state="", action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_TERMINAL_INPUT_TEXT:
            return action.text;
        case ActionTypes.SUBMIT_TERMINAL_INPUT_TEXT_SUCCESS:
            return "";
        default:
            return state;
    }
}

const terminal = (state=
{
    history: undefined,
    currentInputText: undefined,
}, action) => {
    return {
        ...state,
        history: history(state.history, action),
        currentInputText: currentInputText(state.currentInputText, action)
    }
}

export default terminal;
