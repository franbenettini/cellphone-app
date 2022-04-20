import { useState } from 'react'
import './ItemCount.css'

const Counter = ({initial=0, stock, onConfirm}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if ((count > initial)){
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