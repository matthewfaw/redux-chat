import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleConversationPreviewList from '../containers/VisibleConversationPreviewList';
import VisibleTextInputField from '../containers/VisibleTextInputField';

const App = () => (
    <div>
       <VisibleConversationPreviewList />
       <VisibleMessageList /> 
       <VisibleTextInputField /> 
    </div>
);

export default App;
