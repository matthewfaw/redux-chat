import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleConversationPreviewList from '../containers/VisibleConversationPreviewList';
import VisibleMessageSender from '../containers/VisibleMessageSender';
import VisibleConversationAdder from '../containers/VisibleConversationAdder';
import VisibleTerminalView from '../containers/VisibleTerminalView';

import NavbarInstance from './bootstrap/Navbar';
import { Grid, Row, Col } from 'react-bootstrap';

const spacing = {
    paddingTop: 70,
    paddingBottom: 70
}

const terminalBackground = {
    background: "#000000",
    minHeight: 500,
    maxHeight: 500,
    overflowY:"scroll",
}

const lineStyle = {
    background: "#000000",
    color: "#ffffff",
    border: 0,
    boxShadow: "none",
    cursor: "default",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    minHeight: 0,
}

const App = ({ params }) => (
    <div>
        <NavbarInstance />
        <h1>{params.filter}</h1>
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
            <Row style={spacing}>
                <Col xs={8} xsOffset={1}>
                    <VisibleTerminalView backgroundStyle={terminalBackground} lineStyle={lineStyle}/>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default App;
