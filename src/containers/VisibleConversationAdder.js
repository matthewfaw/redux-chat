import { connect } from 'react-redux';
import { createConversation, changeConversationText } from '../actions/actions';
import TextInputField from '../components/TextInputField';

//XXX: This class is redundant -- combine with VisibleMessageSender.js

const mapStateToProps = (state, ownProps) => ({
    fieldText: state.gui.currentConversationText,
    currentUser: state.currentUserInfo,
    buttonText: ownProps.buttonText,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => dispatch(changeConversationText(event.target.value)),
    onSubmitText: (conversationName) => dispatch(createConversation(conversationName)),
});

const VisibleConversationAdder = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleConversationAdder;

