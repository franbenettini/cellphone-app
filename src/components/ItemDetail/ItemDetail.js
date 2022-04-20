import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../ItemCount/ItemCount'; 
import './ItemDetail.css'
import CartContext from '../../context/CartContext';


const ItemDetail = ({ id, name, img, price, description, stock}) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) =>{
        const productObj = {
            id, name, price, quantity: count
        }

        addItem (productObj)
    }


    return(
        <div className='seccion'>
            <section className='seccionLeft'>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
            </section>

            <section className='seccionRight'>
                <div className='seccionOne'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                    <span>${price}</span>
                    <p>Stock disponible: {stock}</p>
                </div>
                <div className='seccionTwo'>
                    { isInCart(id) ? <Link    to='/cart'>Ir al carrito</Link> : <Counter onConfirm={handleAdd} stock={stock}/> } 
                </div>
            </section>
        </div>
    )
}



export default ItemDetail