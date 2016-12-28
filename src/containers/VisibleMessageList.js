import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

const getVisibleMessages = (userInfo, conversations) => {
    let currentConversation = userInfo.currentConversation;
    let currentBranch = userInfo.currentBranch;

    //XXX: Add error checking here?
    return conversations.byId[currentConversation].branches.byId[currentBranch].messages;
}

const mapStateToProps = (state) => ({
    messages: getVisibleMessages(state.currentUserInfo, state.conversations),
});

const VisibleMessageList = connect(
    mapStateToProps
)(MessageList);

export default VisibleMessageList;
