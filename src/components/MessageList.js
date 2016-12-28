import React, { PropTypes } from 'react';
import Message from './Message';

let MessageList = ({ messages }) => {
    let counter = 0;
    return (
        <ul>
            {messages.map(message => 
                <Message
                    key={counter++}
                    sender={message.sender.name}
                    time={message.time}
                    body={message.body}
                />
            )}
        </ul>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.shape({
            name: PropTypes.string.isRequired,
            currentConversation: PropTypes.string.isRequired,
            currentBranch: PropTypes.string.isRequired,
            isSendingMessage: PropTypes.bool.isRequired,
            isLoadingMessages: PropTypes.bool.isRequired,
        }).isRequired,
        time: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default MessageList;
