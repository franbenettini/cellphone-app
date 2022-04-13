import { useState } from 'react'

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
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter