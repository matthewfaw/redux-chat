import React, { PropTypes } from 'react';
import ConversationPreview from './ConversationPreview';
import { ListGroup } from 'react-bootstrap';

let ConversationPreviewList = ({ conversations, onConversationClicked, currentUser }) => {
    let counter = 0;
    return (
        <ListGroup>
            {conversations.map( conversation => 
                <ConversationPreview 
                    key={counter++}
                    title={conversation}
                    onClick={() => onConversationClicked(conversation.id, currentUser.name)}
                />
            )}
        </ListGroup>
    )
};

ConversationPreviewList.propTypes = {
    onConversationClicked: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        currentConversation: PropTypes.string.isRequired,
        currentBranch: PropTypes.string.isRequired,
        isSendingMessage: PropTypes.bool.isRequired,
        isLoadingMessages: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ConversationPreviewList;
