import { submitTerminalInputText } from './actions';
import ActionStatus from './actionStatus';

export const fetchSongs = (artist) => {
    return dispatch => {
        dispatch(submitTerminalInputText(artist,[], ActionStatus.REQUESTING));
        const stripped = encodeURIComponent(artist.trim())
        return fetch(`https://api.spotify.com/v1/search?q=${stripped}&type=artist`)
            .then(response => response.json())
            .then(json => dispatch(submitTerminalInputText(artist, json.artists.items.map(artist => artist.name), ActionStatus.FINISHED)))
    };
}