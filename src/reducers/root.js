import { combineReducers } from 'redux';
import currentUserInfo from './currentUserInfo ';
import conversations from './conversations';

//const rootReducer = combineReducers({
    //currentUserInfo,
    //conversations,
//});

const root = (state, action) => {
    return {
        ...state,
        currentUserInfo(state, action),
        conversations(state, action)
    }
}

export default root;
