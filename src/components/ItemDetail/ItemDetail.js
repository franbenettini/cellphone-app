import { useContext } from 'react';
import Counter from '../ItemCount/ItemCount'; 
import './ItemDetail.css'
import CartContext from '../../context/CartContext';
import {toast, Zoom } from 'react-toastify'

const ItemDetail = ({ id, name, img, category, price, description, stock}) => {
    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const handleAdd = (count) =>{
        const productObj = {
            id, name, price, quantity: count
        }

        addItem (productObj)
        toast.success(`Se agregaron ${count} ${name} al carrito`, {
            position: "top-center",
            autoClose: 3000,
            transition: Zoom,
            theme:'colored',
            style:{
                color: 'black',
            },
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1,
            });
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
                    {
                        <Counter onConfirm={handleAdd} stock={stock} initial={getQuantityProd(id)}/> 
                    } 
                </div>
            </section>
        </div>
    )
}



export default ItemDetail