import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProductsById().then(prods => {
            setProducts(prods)
        }).catch( error => {
            console.log(error)
        })
    }, [])


  return (
    <>
        {(products !== '')?<ItemDetail key={products.id}{...products}/>:<h3>Cargando..</h3>}
    </>
  )
}

export default ItemDetailContainer

