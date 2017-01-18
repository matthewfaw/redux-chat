import ActionTypes from '../actions/actionTypes';
//import { requestSendMessage } from '../actions/asyncActions';
import io from 'socket.io-client';
import { SERVER_URL } from '../utils/defaults';

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
    socket = io.connect(`${SERVER_URL}`);

    //socket.on('message', action => {
        //store.dispatch(requestSendMessage(action.message, action.sender))
    //})
}
