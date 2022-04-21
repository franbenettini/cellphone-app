import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
//import { getProducts } from '../../asyncmock';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { firestoreDb } from '../../services/firebase';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
        //getProducts(categoryId ).then(prods => {
            //setProducts(prods)
        //}).catch( error => {
            //console.log(error)
        //})

        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    if (products.length === 0 ){
        return <h1>No hay productos</h1>
    }

    return(
        <div>
            <h2 className='greeting'>{props.greeting}</h2>
            {products.length > 0 ? <ItemList products={products}/> : <h3>Cargando...</h3>}    
        </div>
    )
}

export default ItemListContainer