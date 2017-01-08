import { connect } from 'react-redux';
import { changeConversationText } from '../actions/actions';
import { createConversation } from '../actions/asyncActions';
import TextInputField from '../components/TextInputField';

//XXX: This class is redundant -- combine with VisibleMessageSender.js

const mapStateToProps = (state, ownProps) => ({
    fieldText: state.gui.currentConversationText,
    currentUser: state.currentUserInfo,
    buttonText: ownProps.buttonText,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => dispatch(changeConversationText(event.target.value)),
    onSubmitText: (conversationName, currentUser) => dispatch(createConversation(conversationName, currentUser.name)),
});

const VisibleConversationAdder = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleConversationAdder;

