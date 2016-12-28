import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleConversationPreviewList from '../containers/VisibleConversationPreviewList';
import VisibleMessageSender from '../containers/VisibleMessageSender';
import VisibleConversationAdder from '../containers/VisibleConversationAdder';

const App = () => (
    <div>
       <VisibleConversationPreviewList />
       <VisibleConversationAdder buttonText="Add Conversation"/>
       <VisibleMessageList /> 
       <VisibleMessageSender buttonText="Send Message"/> 
    </div>
);

export default App;
