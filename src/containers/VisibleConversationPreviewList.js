import { connect } from 'react-redux';
import { requestLoadConversation } from '../actions/actions';
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
    onConversationClicked: (conversationId) => {
        dispatch(requestLoadConversation(conversationId));
        dispatch(push(`/${conversationId}`));
    }
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
