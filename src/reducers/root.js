import currentUserInfo from './currentUserInfo';
import conversations from './conversations';

//const rootReducer = combineReducers({
    //currentUserInfo,
    //conversations,
//});

const root = (state=
        {
            currentUserInfo: {
                name: "",
                currentConversation: "",
                currentBranch: "",
                isSendingMessage: false,
                isLoadingMessage: false,
            },

            conversations: {
                byId: {},
                allIds: [],
            },
        }
    , action) => {
    return {
        ...state,
        currentUserInfo: currentUserInfo(state, action),
        conversations: conversations(state, action)
    }
}

export default root;
