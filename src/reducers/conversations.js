import ActionTypes from '../actions/actionTypes';

import updateBranches from './branches.js';

const updateConversationId = (stateId="", action) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return action.conversationName;
        default:
            return stateId;
    }
};

const updateConversationParticipants = (stateParticipants=[], action, baseStateTree) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return [
                ...stateParticipants,
                baseStateTree.currentUserInfo.name
            ];
        default:
            return stateParticipants;
    }
};

const updateAllIds = (state, action) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return [
                ...state,
                action.conversationName,
            ];
        default:
            return state;
    }
};

const conversation = (state=
                    {
                        id: undefined,
                        participants: undefined,
                        branches: undefined,
                    }
    , action, baseStateTree) => {
    return {
        id: updateConversationId(state.id, action),
        participants: updateConversationParticipants(state.participants, action, baseStateTree),
        branches: updateBranches(state.branches, action), 
    };
};


const updateById = (stateSubtreeToUpdate, action, baseStateTree) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return {
                ...stateSubtreeToUpdate,
                [action.conversationName]: conversation(undefined, action, baseStateTree) 
            }
        default:
            return stateSubtreeToUpdate;
    }
    //let newState = {};
    //for (var conversationName in stateSubtreeToUpdate) {
        //newState[conversationName] = conversation(stateSubtreeToUpdate[conversationName], 
            //action, 
            //baseStateTree);
    //}
    //return newState;
};

const conversations = (state, action) => {
    return {
        ...state.conversations,
        byId: updateById(state.conversations.byId, action, state),

        allIds: updateAllIds(state.conversations.allIds, action)
    }
};

export default conversations;
