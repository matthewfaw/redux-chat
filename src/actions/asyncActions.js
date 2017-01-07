import { submitTerminalInputText, addConversation } from './actions';
import fetch from 'isomorphic-fetch'
import ActionStatus from './actionStatus';
import { SERVER_URL } from '../utils/defaults';

export const fetchSongs = (artist) => {
    return dispatch => {
        dispatch(submitTerminalInputText(artist,[], ActionStatus.REQUESTING));
        const stripped = encodeURIComponent(artist.trim())
        return fetch(`https://api.spotify.com/v1/search?q=${stripped}&type=artist`)
            .then(response => response.json())
            .then(json => json.artists.items.map(artist => artist.name))
            .then(json => dispatch(submitTerminalInputText(artist, json, ActionStatus.FINISHED)))
            .then(fetch(`${SERVER_URL}/list`, {
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

export const createConversation = (name, creatorId) => {
    return dispatch => {
        dispatch(addConversation(name, ActionStatus.REQUESTING));
        return fetch(`${SERVER_URL}/conversations`, {
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
        .then(dispatch(addConversation(name, ActionStatus.FINISHED)))
    }
}
