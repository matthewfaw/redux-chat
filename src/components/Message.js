import React, { PropTypes } from 'react';

const Message = ({ sender, time, body }) => (
    <li>{sender},{time},{body}</li>
);

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
}

export default Message;
