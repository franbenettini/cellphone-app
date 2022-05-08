import './Footer.css'
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection} from 'firebase/firestore'




const Footer = () => {


    const [categories, setCategories] = useState([])


    useEffect (() => {
     

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })

    }, [])

    return(
        <div className='mainFooter'>
            <div>
                <Link to='/' className='logo' >
                    <h1>Smart Shop</h1>
                </Link>
            </div>
            <div className='link'>
                { categories.map(cat => 
                <NavLink className='enlaces' key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>) }
            </div>
        </div>
    );
}

export default Footer