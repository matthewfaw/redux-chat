import { connect } from 'react-redux';
import { loadConversation } from '../actions/actions';
import ConversationPreviewList from '../components/ConversationPreviewList';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

const getVisibleConversation = (userInfo, conversations) => {
    return conversations.allIds;
};

const mapStateToProps = (state) => ({
    conversations: getVisibleConversation(state.currentUserInfo, state.conversations),
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onConversationClicked: (conversationId) => {
        dispatch(loadConversation(conversationId));
        dispatch(push(`/${conversationId}`));
        //browserHistory.push(`/${conversationId}`)
    }
});

const VisibleConversationPreviewList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationPreviewList);

export default VisibleConversationPreviewList;
