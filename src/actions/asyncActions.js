import { submitTerminalInputText } from './actions';
import fetch from 'isomorphic-fetch'
import ActionStatus from './actionStatus';
import { SERVER_URL } from '../utils/defaults';

export const fetchSongs = (artist) => {
    return dispatch => {
        dispatch(submitTerminalInputText(artist,[], ActionStatus.REQUESTING));
        const stripped = encodeURIComponent(artist.trim())
        return fetch(`https://api.spotify.com/v1/search?q=${stripped}&type=artist`)
            .then(response => response.json())
            .then(json => dispatch(submitTerminalInputText(artist, json.artists.items.map(artist => artist.name), ActionStatus.FINISHED)))
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
