import React, { PropTypes } from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
    <ul>
        {messages.map(message => 
            <Message
                key={message.id}
                message=message
            />
        )}
    </ul>
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};
