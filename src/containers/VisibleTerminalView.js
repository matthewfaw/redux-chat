import { connect } from 'react-redux';
import { changeTerminalInputText, submitTerminalInputText } from '../actions/actions';
import TerminalView from '../components/TerminalView';

const mapStateToProps = (state) => ({
    terminalHistory: state.gui.terminal.history,
    currentInputText: state.gui.terminal.currentInputText,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeInputText: (text) => dispatch(changeTerminalInputText(text)),
    onSubmitInputText: (text) => dispatch(submitTerminalInputText(text)),
});

const ViewableTerminalView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TerminalView);

export default ViewableTerminalView;
