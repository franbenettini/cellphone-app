import { useState, useContext } from 'react'
import './ItemCount.css'
import CartContext from '../../context/CartContext';

const Counter = ({initial=1, stock, onConfirm}) => {
    const [count, setCount] = useState(initial)
    const { removeItem } = useContext(CartContext)

    const decrement = () => {
        if ((count > 0)){
            setCount(count-1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count+1) 
        }
    }


    return(
        <div className='countButton'>
            <div className='count'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button> 
            </div>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter