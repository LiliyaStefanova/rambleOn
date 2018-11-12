import React from 'react';
import './index.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';
library.add(faCompass);

const Header = () =>{
    return(
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <FontAwesomeIcon icon="compass"/>
                    <Link to = '/'>Walk Planner</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="pills">
                <NavItem><Link to = '/'>Home</Link></NavItem>
                <NavItem><Link to = 'walk/create'>Create</Link></NavItem>
                <NavItem><Link to = '/walks/all'>View</Link></NavItem>
                <NavItem><Link to = '/resources'>Resources</Link></NavItem>
                <NavItem><Link to = '/contact'>Contact</Link></NavItem>
            </Nav>
        </Navbar>

    )
};

export default Header;
