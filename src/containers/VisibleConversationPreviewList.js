import { connect } from 'react-redux';
import { loadAllMessages, loadAllConversations } from '../actions/asyncActions';
import ConversationPreviewList from '../components/ConversationPreviewList';
import { push } from 'react-router-redux';

const getVisibleConversation = (userInfo, conversations) => {
    return conversations.allIds;
};

const mapStateToProps = (state) => ({
    conversations: getVisibleConversation(state.currentUserInfo, state.conversations),
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onComponentMounted: (currentUser) => dispatch(loadAllConversations(currentUser.name)),
    onConversationClicked: (currentUser, conversationId) => {
        const branchId = 'DEFAULT';
        dispatch(loadAllMessages(currentUser, conversationId, branchId));
        dispatch(push(`/${conversationId}`));
    }
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
