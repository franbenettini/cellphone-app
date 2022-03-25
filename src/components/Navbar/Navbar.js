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
                <NavLink to="/phone-brands" activeStyle>
                    Phone Brands
                </NavLink>
                <NavLink to="/tablet-brands" activeStyle>
                    Tablets Brands
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact Us
                </NavLink>
                <CartWidget/>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar
