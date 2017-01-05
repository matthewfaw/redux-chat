import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

const NavItemInstance = ({ to, text }) => (
    <LinkContainer to={to}>
        <NavItem>{text}</NavItem>
    </LinkContainer>
)

export default NavItemInstance;
