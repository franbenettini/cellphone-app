import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { getProducts } from '../../services/firebase/firestore';
import Spinner from '../Spinner/Spinner'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [show, setShow] =useState(false)

    const { categoryId } = useParams()

    useEffect (() => {

        let isActive = true
        
        getProducts(categoryId).then(products => {
            if(isActive){
                setProducts(products)
            }
            setShow(true) 
        }).catch(error => {
            console.log(error)
        })

        return () =>{
            isActive = false
        }
    }, [categoryId])


    return(
        <div>
            {
            show ?
                (products.length > 0 ?
                    <>  
                    
                        <h2 className='greeting'>{props.greeting}</h2>
                        <ItemList products={products}/>
                    </>
                    : 
                    <h1>No hay productos</h1>
                ) 
                :
                < Spinner />
            }
        </div>
    )
}

export default ItemListContainer