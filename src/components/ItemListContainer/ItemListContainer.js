import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
        getProducts(categoryId ).then(prods => {
            setProducts(prods)
        }).catch( error => {
            console.log(error)
        })
    }, [categoryId])


    return(
        <div>
            <h2>{props.greeting}</h2>
            {products.length > 0 ? <ItemList products={products}/> : <h3>Cargando...</h3>}    
        </div>
    )
}

export default ItemListContainer