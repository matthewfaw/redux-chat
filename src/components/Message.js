import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Message = ({ sender, time, body }) => (
    <ListGroupItem>{sender},{time},{body}</ListGroupItem>
);

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
}

export default Message;
