import { connect } from 'react-redux';
import { sendMessage } from '../actions/actions';
import TextInputField from '../components/TextInputField';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUserInfo,
    buttonText: ownProps.buttonText,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitText: (text, sender) => dispatch(sendMessage(text, sender)),
});

const VisibleMessageSender = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleMessageSender;
