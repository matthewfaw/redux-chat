import { requestSubmitTerminalInputText, succeedSubmitTerminalInputText, requestAddConversation, succeedAddConversation, requestAddMessage, succeedAddMessage } from './actions';
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
        return fetch(`${SERVER_URL}/${userName}/conversations/`)
            .then(response => response.json().conversations)
            .then(conversations => conversations.forEach( conversation => {
                dispatch(addConversation(name, ActionStatus.FINISHED));
            } ))
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

export const requestSendMessage = (message, sender) => {
    return dispatch => {
        dispatch(requestAddMessage(message, sender));
        dispatch(succeedAddMessage(message, sender));
        return Promise.resolve();
    }
}
