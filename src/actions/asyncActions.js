import { requestSubmitTerminalInputText, succeedSubmitTerminalInputText, requestAddConversation, succeedAddConversation, requestAddMessage, succeedAddMessage, succeedLoadConversation, requestLoadConversation } from './actions';
import fetch from 'isomorphic-fetch'
//import { SERVER_URL } from '../utils/defaults';

export const fetchSongs = (artist) => {
    return dispatch => {
        dispatch(requestSubmitTerminalInputText(artist));
        const stripped = encodeURIComponent(artist.trim())
        return fetch(`https://api.spotify.com/v1/search?q=${stripped}&type=artist`)
            .then(response => response.json())
            .then(json => json.artists.items.map(artist => artist.name))
            .then(json => dispatch(succeedSubmitTerminalInputText(artist, json)))
            .then(fetch(`/list`, {
                headers: {
                    'Accept':'text/plain',
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify({
                    name: 'Hubot',
                    login: artist,
                })
            }))
    };
}

export const loadAllConversations = (userName) => {
    return dispatch => {
        return fetch(`/conversations?name=${userName}`)
            .then(response => response.json())
            .then(res => res.conversations.forEach( conversation => {
                dispatch(succeedAddConversation(conversation));
            } ))
    }
}
export const loadAllMessages = (userName, conversationId, branchId) => {
    return dispatch => {
        dispatch(requestLoadConversation(conversationId));
        return fetch(`/messages?name=${userName}&conversation=${conversationId}&branch=${branchId}`)
            .then(response => response.json())
            .then(res => res.messages.forEach( message => {
                dispatch(succeedAddMessage(message));
            }))
            .then(dispatch(succeedLoadConversation(conversationId)))
    }
}

export const requestCreateConversation = (name, creatorId) => {
    return dispatch => {
        dispatch(requestAddConversation(name));
        return fetch(`/conversations`, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify({
                name: name,
                creatorId:  creatorId,
            })
        })
        .then(dispatch(succeedAddConversation(name)))
    }
}

export const requestSendMessage = (message, creatorId) => {
    return dispatch => {
        dispatch(requestAddMessage(message, creatorId));
        return Promise.resolve();
        //return fetch('/messages', {
            //headers: {
                //'Accept': 'text/plain',
                //'Content-Type': 'application/json',
            //},
            //method: 'post',
            //body: JSON.stringify({
                //creatorId:  creatorId,
                //body: message,
            //})
        //}).then(res => res.json())
            //.then(message => dispatch(succeedAddMessage(message)))
    }
}
