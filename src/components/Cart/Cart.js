import { useContext } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalCost, clearCart,getQuantity } = useContext(CartContext)

    if (getQuantity()  === 0) {
        return (
            <div className="emptyProducts">
                <h2>El carrito se encuentra vacío</h2>
                <a href="/">
                    <input className="button" type="button" value="Visita nuestra lista de producto"></input>
                </a>
            </div>
        )
    }

    return (
        <div className="cart"> 
            <div className="up">
                <h2>Total de la compra es:  $ {totalCost()}</h2>
                <Link to={'/form'}><button className="checkOut">Realizar compra</button></Link>
            </div> 
            <div className="products">
                {cart.map(prod => <ItemCart key={prod.id}{...prod} />)}
            </div>      
            
            <div className="butttonsFooter">
                <button className="buttonLeft" onClick={()=> clearCart()}>Vaciar carrito</button>
                    <div className="orgPruebaCantidad">
                        <div className="totalAmount">
                            <span>Total: </span>
                            <span>$ {totalCost()} </span>
                        </div>
                        <Link to={'/form'}><button className="checkOut">Realizar compra</button></Link>
                    </div>
                
            </div>
        </div>
    )
}

export default Cart