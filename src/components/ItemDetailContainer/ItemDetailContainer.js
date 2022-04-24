//import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = ({setCart, cart}) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()

    useEffect (() => {
        //getProductsById(productId).then(item => {
            //setProduct(item)
        //}).catch( error => {
            //console.log(error)
        //}).finally(() => {
            //setLoading(false)
        //})

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
            setLoading(true)
        })

    }, [productId])
    

        
  return (
    <div>
        {
            loading ?
            (product ?
                <ItemDetail  {...product} setCart={setCart} cart={cart}/>:
                <h1>El producto no existe</h1>)
            :
                <h1>Cargando...</h1>
        }
    </div>
  )
}

export default ItemDetailContainer

