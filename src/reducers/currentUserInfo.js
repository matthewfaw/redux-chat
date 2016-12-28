//import ActionTypes from '../actions/actionTypes'

const currentUserInfo = (state, action) => {
    //XXX: Remove mock data
    //if (!state) {
        return {
            name: "1",
            currentConversation: "conv1",
            currentBranch: "branch1",
            isSendingMessage: false,
            isLoadingMessages: false,
        };
    //} else {
        //return state;
    //}
};

export default currentUserInfo;
