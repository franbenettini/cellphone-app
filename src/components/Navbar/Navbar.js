import {Nav, NavLink, Bars, NavMenu} from './Navbar.element';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Smart Shop</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/phone-brands">
                    Phone Brands
                </NavLink>
                <NavLink to="/tablet-brands">
                    Tablets Brands
                </NavLink>
                <NavLink to="/contact-us">
                    Contact Us
                </NavLink>
                <CartWidget/>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar
