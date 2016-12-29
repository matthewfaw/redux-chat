import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleConversationPreviewList from '../containers/VisibleConversationPreviewList';
import VisibleMessageSender from '../containers/VisibleMessageSender';
import VisibleConversationAdder from '../containers/VisibleConversationAdder';

import NavbarInstance from './bootstrap/Navbar';
import { Grid, Row, Col } from 'react-bootstrap';

const App = () => (
    <div>
        <NavbarInstance />
        <Grid>
            <Row>
                <Col xs={6}>
                   <VisibleConversationPreviewList />
                   <VisibleConversationAdder buttonText="Add Conversation"/>
                </Col>
                <Col xs={6}>
                   <VisibleMessageList /> 
                   <VisibleMessageSender buttonText="Send Message"/> 
                </Col>
            </Row>
        </Grid>
    </div>
);

export default App;
