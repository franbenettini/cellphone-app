import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './Navbar.element';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Smart Shop</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/phone-brands" activeStyle>
                    Phone Brands
                </NavLink>
                <NavLink to="/tablet-brands" activeStyle>
                    Tablets Brands
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact Us
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar
