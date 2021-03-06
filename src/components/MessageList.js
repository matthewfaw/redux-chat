import React, { PropTypes } from 'react';
import Message from './Message';
import { ListGroup } from 'react-bootstrap';

let MessageList = ({ messages }) => {
    let counter = 0;
    return (
        <ListGroup>
            {messages.map(message => 
                <Message
                    key={counter++}
                    sender={message.sender.name}
                    time={message.time}
                    body={message.body}
                />
            )}
        </ListGroup>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        time: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default MessageList;
