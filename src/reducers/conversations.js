import ActionTypes from '../actions/actionTypes';

import updateBranches from './branches.js';

const updateConversationId = (stateId, action) => {
    switch(action.type) {
        default:
            return stateId;
    }
};

const updateConversationParticipants = (stateParticipants, action, baseStateTree) => {
    switch(action.type) {
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

const updateById = (stateSubtreeToUpdate, action, baseStateTree) => {
    let newState = {};
    for (var conversationName in stateSubtreeToUpdate) {
        newState[conversationName] = conversation(stateSubtreeToUpdate[conversationName], 
                                                    action, 
                                                    baseStateTree);
    }
    return newState;
};

const conversation = (state, action, baseStateTree) => {
    return {
        id: updateConversationId(state.id, action),
        participants: updateConversationParticipants(state.participants, action, baseStateTree),
        branches: updateBranches(state.branches, action), 
    };
};

const conversations = (state, action) => {
    return {
        ...state,
        conversations: {
            ...state.conversations,
            currentConversation: updateCurrentConversation(state.conversations, action),
            byId: updateById(state.conversations.byId, action, state),

            allIds: updateAllIds(state.conversations.allIds, action)
        }
    }
};

export default conversations;
