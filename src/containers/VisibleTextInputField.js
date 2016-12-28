import { connect } from 'react-redux';
import { sendMessage } from '../actions/actions';
import TextInputField from '../components/TextInputField';

const mapStateToProps = (state) => ({
    currentUser: state.currentUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitText: (text, sender) => dispatch(sendMessage(text, sender)),
});

const VisibleTextInputField = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInputField);

export default VisibleTextInputField;
