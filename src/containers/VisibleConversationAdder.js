import { connect } from 'react-redux';
import { createConversation } from '../actions/actions';
import TextInputField from '../components/TextInputField';

//XXX: This class is redundant -- combine with VisibleMessageSender.js

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUserInfo,
    buttonText: ownProps.buttonText,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitText: (conversationName) => dispatch(createConversation(conversationName)),
});

const VisibleConversationAdder = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleConversationAdder;

