import {Nav, NavLink, Bars, NavMenu} from './Navbar.element';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
//import { getCategories } from '../../asyncmock';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection} from 'firebase/firestore'
import './Navbar.css'


const Navbar = () => {

    const [categories, setCategories] = useState([])

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
        
            <Nav>
                <Link to="/">
                    <h1>Smart Shop</h1>
                </Link>
                <Bars/>
                <NavMenu>
                    {/*<NavLink to="/list">
                        Phone Brands
                    </NavLink>
                    <NavLink to="/detail">
                        Tablets Brands
                    </NavLink>
                    <NavLink to="/contact-us">
                        Contact Us
                    </NavLink>*/}
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>) }
                    <CartWidget/>
                </NavMenu>
            </Nav>
    )
}

export default Navbar
