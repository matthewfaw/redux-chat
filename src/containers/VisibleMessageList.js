import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

const getVisibleMessages = (userInfo, conversations) => {
    let currentConversationId = userInfo.currentConversation;
    let currentBranchId = userInfo.currentBranch;

    //XXX: Add error checking here?
    if (conversations) { 
        if (conversations.byId) {
            let currentConversation = conversations.byId[currentConversationId];

            if (currentConversation) {

                if(currentConversation.branches !== null && currentConversation.branches.byId[currentBranchId] !== null) {
                    let currentBranch = currentConversation.branches.byId[currentBranchId];

                    if (currentBranch.messages !== null) {
                        return currentBranch.messages;
                    }
                }
            }
        }
    }
    return [];
}

const mapStateToProps = (state) => ({
    messages: getVisibleMessages(state.currentUserInfo, state.conversations),
});

const VisibleMessageList = connect(
    mapStateToProps
)(MessageList);

export default VisibleMessageList;
