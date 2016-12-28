import React, { PropTypes } from 'react';
import ConversationPreview from './ConversationPreview';

const ConversationPreviewList = ({ conversations, onConversationClicked, currentUser }) => (
    <ul>
        {conversations.map( conversation => 
            <ConversationPreview 
                key={conversation.id}
                title={conversation.title}
                onClick={() => onConversationClicked(conversation.id, currentUser.id)}
            />
        )}
    </ul>
);

ConversationPreviewList.propTypes = {
    onConversationClicked: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        currentBranch: PropTypes.string.isRequired,
        isSendingMessage: PropTypes.bool.isRequired,
        isLoadingMessage: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ConversationPreviewList;
