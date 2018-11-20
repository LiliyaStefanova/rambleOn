import React, {Component} from 'react';
import './index.css';
import {Navbar, Nav, NavbarBrand, NavLink, NavItem, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';

library.add(faCompass);

export default class Header extends Component {

    constructor(props) {
        super(props);


    };

render()
    {
    return (
        <Navbar expand="md" light color="light">
            <NavbarBrand className="mr-auto">
                <FontAwesomeIcon icon="compass"/>
                <Link to='/'>Walk Planner</Link>
            </NavbarBrand>
            <Nav pills>
                <NavItem>
                    <NavLink><Link to='/'>Home</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='walk/create'>Create</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/walks/all'>View</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/resources'>Resources</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/contact'>Contact</Link></NavLink>
                </NavItem>
            </Nav>

        </Navbar>

    );
    }
};

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};