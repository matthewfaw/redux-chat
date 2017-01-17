import currentUserInfo from './user/currentUserInfo';
import conversations from './conversations/conversations';
import gui from './gui/gui';
import { routerReducer } from 'react-router-redux';

//const rootReducer = combineReducers({
    //currentUserInfo,
    //conversations,
//});

const root = (state=
{
    gui: undefined,
    currentUserInfo: undefined,
    conversations: undefined,
    routing: undefined,
}
, action) => {
    return {
        ...state,
        gui: gui(state.gui, action),
        currentUserInfo: currentUserInfo(state.currentUserInfo, action),
        conversations: conversations(state.conversations, action, state.currentUserInfo),
        routing: routerReducer(state.routing, action),
    }
}

export default root;
