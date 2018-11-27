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
    links: {color: '#f1f1f1', fontSize:'1.2em'},
    navBrand: {color: '#f1f1f1', fontSize:'1.8em'},
    icon: {color: '#f1f1f1', size:'1em', marginRight:'3px'}
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
                <FontAwesomeIcon icon="compass" style={styles.icon}/>
                <Link to='/' style={{'color':'#f1f1f1'}}>Walk Planner</Link>
            </NavbarBrand>
            <Nav pills fill horizontal="right">
                <NavItem>
                    <NavLink>
                            <Link style={styles.links} to='walk/create'>Create</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/walks/all' style={styles.links}>Find</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/resources' style={styles.links}>Resources</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                            <Link to='/contact' style={styles.links}>Contact</Link>
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

