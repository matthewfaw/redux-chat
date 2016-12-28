import { connect } from 'react-redux';
import { loadConversation } from '../actions/actions';
import ConversationPreviewList from '../components/ConversationPreviewList';

const getVisibleConversation = (userInfo, conversations) => {
    return conversations.allIds;
};

const mapStateToProps = (state) => ({
    conversations: getVisibleConversation(state.currentUserInfo, state.conversations),
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onConversationClicked: (conversationId, userId) => dispatch(loadConversation(conversationId, userId)),
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
