/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompass} from '@fortawesome/free-solid-svg-icons'

library.add(faCompass)

const styles = {
  navBrand: { color: '#2ecc71', fontSize: '1.8em' },
}

const Header = (props) =>

      <div className="header">
        <Navbar navbar="true">
          <NavbarBrand className="mr-auto" style={styles.navBrand}>
            <FontAwesomeIcon icon="compass" className="navIcon"/>
            <Link to='/' className="brandLink">rambleOn</Link>
          </NavbarBrand>
          <Nav pills>
            <NavItem className="navContainer">
              <NavLink>
                <Link to='/walks/all' className='link'>My Walks</Link>
              </NavLink>
            </NavItem>
            <NavItem className="navContainer">
              <NavLink>
                <Link to='/walk/create' className='link'>Plan New</Link>
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
          </Nav>
        </Navbar>
      </div>

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

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
}

export default Header;

