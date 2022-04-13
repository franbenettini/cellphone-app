import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../ItemCount/ItemCount'; 


const ItemDetail = ({ name, img, price, description, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const handleAdd = (count) =>{
        setQuantity(count)
    }



    return(
        <div>
            <section>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <h3>{name}</h3>
                <span>${price}</span>
                <p>{description}</p>
                <span>Stock disponible: {stock}</span>
            </section>
            {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Counter onConfirm={handleAdd} stock={stock}/> } 
        </div>
    )
}



export default ItemDetail