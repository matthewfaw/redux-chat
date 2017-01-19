import ActionTypes from '../../actions/actionTypes';
import updateMessages from './messages';

const updateBranchId = (stateId="", action) => {
    switch(action.type) {
        case ActionTypes.ADD_CONVERSATION_SUCCESS:
            return action.defaultBranchName;
        case ActionTypes.CREATE_BRANCH_SUCCESS:
            return action.branchName;
        default:
            return stateId;
    }
};

const branch = (state=
            {
                id: undefined,
                messages: undefined,
            }
    , action) => {
    return {
        id: updateBranchId(state.id, action),
        messages: updateMessages(state.messages, action),
    }
};

const updateById = (state, action, currentUserInfo) => {
    switch(action.type) {
        case ActionTypes.ADD_CONVERSATION_SUCCESS:
            return {
                ...state,
                [action.defaultBranchName]: branch(undefined, action),
            }
        case ActionTypes.CREATE_BRANCH_SUCCESS:
            return {
                ...state,
                [action.branchName]: branch(undefined, action),
            }
        case ActionTypes.SEND_MESSAGE_SUCCESS:
            let currentBranch = currentUserInfo.currentBranch;
            return {
                ...state,
                [currentBranch]: branch(state[currentBranch], action)
            }
        default:
            return state;
            //let newState = {};
            //for (var byIdName in state) {
                //newState[byIdName] = branch(state[byIdName], action);
            //}
            //return newState;
    }
};

const updateAllIds = (state, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CONVERSATION_SUCCESS:
            return [
                ...state,
                action.defaultBranchName,
            ]
        case ActionTypes.CREATE_BRANCH_SUCCESS:
            return [
                ...state,
                action.branchName,
            ]
        default:
            return state;
    }
};

const branches = (state=
                {
                    byId: {},
                    allIds: [],
                }, 
                action, currentUserInfo) => {
    return {
        byId: updateById(state.byId, action, currentUserInfo),
        allIds: updateAllIds(state.allIds, action),
    }
};

export default branches;
