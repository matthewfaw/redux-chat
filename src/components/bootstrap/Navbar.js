import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import NavItemInstance from './NavItemInstance';

const NavbarInstance = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="">Redux Chat</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItemInstance to={{ pathname: 'hello' }} text="Hello!" />
            <NavItemInstance to={{ pathname: 'bye' }} text="Bye!" />
        </Nav>
    </Navbar>
)

export default NavbarInstance;
