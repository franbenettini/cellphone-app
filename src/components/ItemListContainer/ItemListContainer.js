import { useEffect, useState } from 'react';
import Counter from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch( error => {
            console.log(error)
        })
    }, [])

    const handleOnAdd = (quantity) => { 
         console.log(`se agregaron ${quantity} productos`)
    }

    return(
        <>
            <h2>{props.greeting}</h2>
            <Counter initial={1} stock={10} onAdd={handleOnAdd}/>
            <Counter initial={1} stock={15} onAdd={handleOnAdd}/>
            <ItemList products = {products}/>
        </>
    )
}

export default ItemListContainer