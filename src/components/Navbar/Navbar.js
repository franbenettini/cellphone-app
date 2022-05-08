import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection} from 'firebase/firestore'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'


const NavBar = () => {

    const [categories, setCategories] = useState([])
    const [expanded, setExpanded] = useState(false);

    useEffect (() => {
     

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })

    }, [])

    return (
        <Navbar className='navBar' expanded={expanded}  variant="dark" sticky='top' expand="lg" >
            <Container className='containerNav'>
                <Navbar.Brand>
                    <Link to='/' className='logo' >
                        <h1>Smart Shop</h1>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
                    <Nav className='nav'>
                        { categories.map(cat => 
                        <NavLink className='enlaces' onClick={() => setExpanded(false)} key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>) }
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar
