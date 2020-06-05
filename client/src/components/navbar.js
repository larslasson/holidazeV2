import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

  return (
    
      <Navbar sticky="top" expand="lg">
        <Link to='/'><Navbar.Brand >HOLIDAZE</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className='container__Nav--link nav-link' to='/'>Home</NavLink>
            <NavLink className='container__Nav--link nav-link' to='/establishments'>Establishments</NavLink>
            <NavLink className='container__Nav--link nav-link' to='/contact'>Contact</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink className='container__Nav--link nav-link' to='/admin'>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;