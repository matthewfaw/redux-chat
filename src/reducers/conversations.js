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

const updateConversationParticipants = (stateParticipants=[], action, currentUserInfo) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return [
                ...stateParticipants,
                currentUserInfo.name
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
    , action, currentUserInfo) => {
    return {
        id: updateConversationId(state.id, action),
        participants: updateConversationParticipants(state.participants, action, currentUserInfo),
        branches: updateBranches(state.branches, action, currentUserInfo), 
    };
};


const updateById = (stateSubtreeToUpdate, action, currentUserInfo) => {
    switch(action.type) {
        case ActionTypes.CREATE_CONVERSATION:
            return {
                ...stateSubtreeToUpdate,
                [action.conversationName]: conversation(undefined, action, currentUserInfo) 
            }
        case ActionTypes.SEND_MESSAGE:
            let conversationName = currentUserInfo.currentConversation;
            return {
                ...stateSubtreeToUpdate,
                [conversationName]: conversation(stateSubtreeToUpdate[conversationName], action, currentUserInfo) 
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
        byId: updateById(state.conversations.byId, action, state.currentUserInfo),

        allIds: updateAllIds(state.conversations.allIds, action)
    }
};

export default conversations;
