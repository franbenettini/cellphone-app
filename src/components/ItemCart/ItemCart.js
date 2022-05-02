import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)
    

    return ( 
        <div className="itemCart">
                <div className="containerName">
                    <h3 className="name">{name}</h3>
                </div>
                <p>Cantidad: {quantity}</p>
                <div className="price">
                    <span> $ {price}</span>
                    <span>SubTotal: $ { quantity * price}</span>
                </div>
                <button className="removeItem" onClick={() => removeItem(id,name)}>x</button>

        </div>
    )
}





export default ItemCart