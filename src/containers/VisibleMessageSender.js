import { connect } from 'react-redux';
import { requestSendMessage } from '../actions/asyncActions';
import { changeMessageText } from '../actions/actions';
import TextInputField from '../components/TextInputField';

const mapStateToProps = (state, ownProps) => ({
    fieldText: state.gui.currentMessage,
    currentUser: state.currentUserInfo,
    buttonText: ownProps.buttonText,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => dispatch(changeMessageText(event.target.value)),
    onSubmitText: (text, sender) => dispatch(requestSendMessage(text, sender)),
});

const VisibleMessageSender = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleMessageSender;
