import React, {Component} from 'react';
import './index.css';
import {Navbar, Nav, NavbarBrand, NavLink, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';

library.add(faCompass);

const styles = {
    navBrand: {color: '#f1f1f1', fontSize:'1.8em'},
    icon: {}
};


export default class Header extends Component {

    constructor(props) {
        super(props);
    };

render()
    {
    return (
        <Navbar expand="md">
            <NavbarBrand className="mr-auto" style={styles.navBrand}>
                <FontAwesomeIcon icon="compass" className="navIcon"/>
                <Link to='/' className="brandLink">Walk Planner</Link>
            </NavbarBrand>
            <Nav pills fill horizontal="right">
                <NavItem>
                    <NavLink>
                            <Link className='link' to='walk/create'>Create</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/walks/all' className='link'>Find</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/resources' className='link'>Resources</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/contact' className='link'>Contact</Link>
                    </NavLink>
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

Nav.propTypes = {
    tabs: PropTypes.bool,
    pills: PropTypes.bool,
    card: PropTypes.bool,
    justified: PropTypes.bool,
    fill: PropTypes.bool,
    vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    horizontal: PropTypes.string,
    navbar: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

