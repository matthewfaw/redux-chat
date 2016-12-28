import currentUserInfo from './currentUserInfo';
import conversations from './conversations';

//const rootReducer = combineReducers({
    //currentUserInfo,
    //conversations,
//});

const root = (state=
            {
                currentUserInfo: undefined,
                conversations: undefined,
            }
    , action) => {
    return {
        ...state,
        currentUserInfo: currentUserInfo(state.currentUserInfo, action, state),
        conversations: conversations(state.conversations, action, state)
    }
}

export default root;
