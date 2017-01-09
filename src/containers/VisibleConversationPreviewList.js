import { connect } from 'react-redux';
import { loadConversation } from '../actions/actions';
import { loadAllConversations } from '../actions/asyncActions';
import ConversationPreviewList from '../components/ConversationPreviewList';

const getVisibleConversation = (userInfo, conversations) => {
    return conversations.allIds;
};

const mapStateToProps = (state) => ({
    conversations: getVisibleConversation(state.currentUserInfo, state.conversations),
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onComponentMounted: (currentUser) => dispatch(loadAllConversations(currentUser.name)),
    onConversationClicked: (conversationId) => dispatch(loadConversation(conversationId)),
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
