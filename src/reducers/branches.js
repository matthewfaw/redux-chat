import ActionTypes from '../actions/actionTypes'

import updateMessages from './messages';

const updateBranchId = (stateId, action) => {
    switch(action.type) {
        default:
            return stateId;
    }
};

const branch = (state, action) => {
    return {
        id: updateBranchId(state.id, action),
        messages: updateMessages(state.messages, action),
    }
};

const updateById = (state, action) => {
    let newState = {};
    for (var byIdName in state) {
        newState[byIdName] = branch(state[byIdName], action);
    }
    return newState;
};

const updateAllIds = (state, action) => {
    switch(action.type) {
        case ActionTypes.CREATE_BRANCH:
            return [
                ...state,
                action.branchName,
            ]
        default:
            return state;
    }
};

const branches = (state, action) => {
    return {
        byId: updateById(state.byId, action),
        allIds: updateAllIds(state.allIds, action),
    }
};

export default branches;
