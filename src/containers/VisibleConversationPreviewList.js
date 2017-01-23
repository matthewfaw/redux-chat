import { connect } from 'react-redux';
import { loadAllMessages, loadAllConversations } from '../actions/asyncActions';
import ConversationPreviewList from '../components/ConversationPreviewList';
import { push } from 'react-router-redux';
import { Defaults } from '../utils/defaults';

const getVisibleConversation = (userInfo, conversations) => {
    return conversations.allIds;
};

const mapStateToProps = (state) => ({
    conversations: getVisibleConversation(state.currentUserInfo, state.conversations),
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onComponentMounted: (currentUser) => dispatch(loadAllConversations(currentUser.name, Defaults.defaultBranchName)),
    onConversationClicked: (currentUser, conversationId) => {
        dispatch(loadAllMessages(currentUser, conversationId, Defaults.defaultBranchName));
        dispatch(push(`/${conversationId}`));
    }
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
