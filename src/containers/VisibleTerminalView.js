import { connect } from 'react-redux';
import { changeTerminalInputText } from '../actions/actions';
import { fetchSongs } from '../actions/asyncActions';
import TerminalView from '../components/TerminalView';

const mapStateToProps = (state, ownProps) => ({
    terminalHistory: state.gui.terminal.history,
    currentInputText: state.gui.terminal.currentInputText,
    backgroundStyle: ownProps.backgroundStyle,
    lineStyle: ownProps.lineStyle,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeInputText: (text) => dispatch(changeTerminalInputText(text)),
    onSubmitInputText: (text) => dispatch(fetchSongs(text)),
});

const ViewableTerminalView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TerminalView);

export default ViewableTerminalView;
