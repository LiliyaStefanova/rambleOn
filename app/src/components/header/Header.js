/* eslint-disable no-unused-vars */
import React from 'react';
import './index.css';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import Search from './Search'

library.add(faCompass);

const styles = {
    navBrand: {color: '#f1f1f1', fontSize: '1.8em'},
};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        // this.onSearchChange = this.onSearchChange.bind(this);
        // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    // onSearchChange(event) {
    //     this.setState({term: event.target.value});
    // }

    // onSearchSubmit(event) {
    //     const {term} = this.state;
    //     const cachedWalks = localStorage.getItem(term);
    //     this.setState({searchResults: cachedWalks});
    //     event.preventDefault();
    // }


    render() {
        // const {term} = this.state;
        return (
            <div className="header">
                <Navbar navbar>
                    <NavbarBrand className="mr-auto" style={styles.navBrand}>
                        <FontAwesomeIcon icon="compass" className="navIcon"/>
                        <Link to='/' className="brandLink">rambleOn</Link>
                    </NavbarBrand>
                    <Nav pills>
                        <NavItem className="navContainer">
                            <NavLink>
                                <Link to='/walk/create' className='link'>Add</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="navContainer">
                            <NavLink>
                                <Link to='/walks/all' className='link'>Manage</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="navContainer">
                            <NavLink>
                                <Link to='/resources' className='link'>Resources</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="navContainer">
                            <NavLink>
                                <Link to='/contact' className='link'>About</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Search
                                // value={term}
                                // onChange={this.onSearchChange}
                                // onSubmit={this.onSearchSubmit}
                              >
                                Search
                            </Search>
                        </NavItem>
                    </Nav>

                </Navbar>
                <div className="credits">
                    <span >Credit:<a href="https://www.flickr.com/photos/aevar/">Ævar Guðmundsson</a></span>
                </div>
            </div>
        );
    }
}

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

