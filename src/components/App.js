import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleConversationPreviewList from '../containers/VisibleConversationPreviewList';
import VisibleMessageSender from '../containers/VisibleMessageSender';
import VisibleConversationAdder from '../containers/VisibleConversationAdder';
import VisibleTerminalView from '../containers/VisibleTerminalView';

import NavbarInstance from './bootstrap/Navbar';
import { Grid, Row, Col } from 'react-bootstrap';

const style = {
    paddingTop: 70,
    paddingBottom: 70
}

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
            <Row style={style}>
                <Col xs={8} xsOffset={1}>
                    <VisibleTerminalView />
                </Col>
            </Row>
        </Grid>
    </div>
);

export default App;
