import React, { PropTypes } from 'react';

const Message = ({ messageInfo }) => (
    <li>{messageInfo.sender},{messageInfo.time},{messageInfo.body}</li>
);

Message.propTypes = {
    messageInfo: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
}

export default Message;
