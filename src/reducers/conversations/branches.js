import ActionTypes from '../../actions/actionTypes'

import updateMessages from './messages';

const updateBranchId = (stateId="", action) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return action.defaultBranchName;
        case ActionTypes.CREATE_BRANCH:
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
        case ActionTypes.CREATE_CONVERSATION:
            return {
                [action.defaultBranchName]: branch(undefined, action),
            }
        case ActionTypes.CREATE_BRANCH:
            return {
                ...state,
                [action.branchName]: branch(undefined, action),
            }
        case ActionTypes.SEND_MESSAGE:
            let currentBranch = currentUserInfo.currentBranch;
            return {
                ...state,
                [currentBranch]: branch(state[currentBranch], action)
            }
        default:
            let newState = {};
            for (var byIdName in state) {
                newState[byIdName] = branch(state[byIdName], action);
            }
            return newState;
    }
};

const updateAllIds = (state, action) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return [
                ...state,
                action.defaultBranchName,
            ]
        case ActionTypes.CREATE_BRANCH:
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
