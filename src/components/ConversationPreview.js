import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const ConversationPreview = ({ onClick, title }) => (
    <ListGroupItem onClick={onClick}>
        {title}
    </ListGroupItem>
);

ConversationPreview.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default ConversationPreview;
