import ActionTypes from '../actions/actionTypes';
import { succeedAddMessage } from '../actions/actions';
import io from 'socket.io-client';
//import { SERVER_URL } from '../utils/defaults';

var socket = null;

export const chatMiddleware = store => next => action => {
    const result = next(action);

    if (socket && action.type === ActionTypes.SEND_MESSAGE_REQUEST) {
        console.log('socket: sending ', action)
        socket.emit('message', action);
    }

    return result;
};

export default function(store) {
    socket = io.connect();

    socket.on('message', message => {
        console.log('message detected: ', message)
        store.dispatch(succeedAddMessage(message))
    })
}
