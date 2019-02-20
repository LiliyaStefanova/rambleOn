import React from 'react';
import './index.css';
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';

library.add(faCompass);

const styles = {
    navBrand: {color: '#f1f1f1', fontSize:'1.8em'},
};

export default class Header extends React.Component {

render()
    {
    return (
        <div className="header">
        <Navbar navbar>
            <NavbarBrand className="mr-auto" style={styles.navBrand}>
                <FontAwesomeIcon icon="compass" className="navIcon"/>
                <Link to='/' className="brandLink">Walk Planner</Link>
            </NavbarBrand>
            <Nav pills>
                <NavItem className="navContainer">
                    <NavLink>
                            <Link to='/walk/create' className='link'>Create</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navContainer">
                    <NavLink>
                            <Link to='/walks/all' className='link'>Find</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navContainer">
                    <NavLink>
                            <Link to='/resources' className='link'>Resources</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navContainer">
                    <NavLink>
                            <Link to='/contact' className='link'>Contact</Link>
                    </NavLink>
                </NavItem>
            </Nav>

        </Navbar>
        </div>
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

