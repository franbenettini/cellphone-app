//import {Nav, NavLink, Bars, NavMenu} from './Navbar.element';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
//import { getCategories } from '../../asyncmock';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection} from 'firebase/firestore'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'


const NavBar = () => {

    const [categories, setCategories] = useState([])
    const [expanded, setExpanded] = useState(false);

    useEffect (() => {
        //getCategories().then(categories => {
            //setCategories(categories)
        //})

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })

    }, [])

    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" sticky='top' expand="lg" >
            <Container>
                <Navbar.Brand >
                    <Link to='/' >
                        <a href="#/"><h1>Smart Shop</h1></a>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
                    <Nav>
                        { categories.map(cat => 
                        <NavLink onClick={() => setExpanded(false)} key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>) }
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar
