import React, { PropTypes } from 'react';
import ConversationPreview from './ConversationPreview';
import { ListGroup } from 'react-bootstrap';

class ConversationPreviewList extends React.Component {
    static propTypes = {
        onComponentMounted: PropTypes.func.isRequired,
        onConversationClicked: PropTypes.func.isRequired,
        conversations: PropTypes.array.isRequired,
        currentUser: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.onComponentMounted(this.props.currentUser)
    }

    render() {
        let counter = 0;
        return (
            <ListGroup>
                {this.props.conversations.map( conversation => 
                    <ConversationPreview 
                        key={counter++}
                        title={conversation}
                        onClick={() => this.props.onConversationClicked(conversation)}
                    />
                )}
            </ListGroup>
        )
    }
}

//let ConversationPreviewList = ({ onComponentMounted, conversations, onConversationClicked, currentUser }) => {
    //let counter = 0;
    //return (
        //<ListGroup>
            //{conversations.map( conversation => 
                //<ConversationPreview 
                    //key={counter++}
                    //title={conversation}
                    //onClick={() => onConversationClicked(conversation)}
                ///>
            //)}
        //</ListGroup>
    //)
//};

//ConversationPreviewList.propTypes = {
    //onConversationClicked: PropTypes.func.isRequired,
    //currentUser: PropTypes.shape({
        //name: PropTypes.string.isRequired,
        //currentConversation: PropTypes.string.isRequired,
        //currentBranch: PropTypes.string.isRequired,
        //isSendingMessage: PropTypes.bool.isRequired,
        //isLoadingMessages: PropTypes.bool.isRequired,
    //}).isRequired,
//};

export default ConversationPreviewList;
