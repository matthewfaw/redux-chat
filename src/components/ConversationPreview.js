import React, { PropTypes } from 'react';

const ConversationPreview = ({ onClick, title }) => (
    <li onClick={onClick}>
        {title}
    </li>
);

ConversationPreview.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default ConversationPreview;
