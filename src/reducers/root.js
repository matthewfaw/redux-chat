import currentUserInfo from './currentUserInfo';
import conversations from './conversations';
import gui from './gui';

//const rootReducer = combineReducers({
    //currentUserInfo,
    //conversations,
//});

const root = (state=
            {
                gui: undefined,
                currentUserInfo: undefined,
                conversations: undefined,
            }
    , action) => {
    return {
        ...state,
        gui: gui(state.gui, action, state),
        currentUserInfo: currentUserInfo(state.currentUserInfo, action, state),
        conversations: conversations(state.conversations, action, state)
    }
}

export default root;
