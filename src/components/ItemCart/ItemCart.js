import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = () => {
    const { cart, totalCost, removeItem, clearCart} = useContext(CartContext)
    

    if (cart.length === 0) {
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
            <h2>Total de la compra es:  $ {totalCost()}</h2>
            <button className="checkOut">Realizar compra</button>{/*  falta darle evento al boton*/}
            <ul>
                <div className='products'>
                    { cart.map(prod => 
                    <li key= {prod.id} className="prods">
                         <span className="name">{prod.name}</span>
                         <p>Cantidad: {prod.quantity} </p>
                         <div className="lastColumn">
                            <div className="priceContainer">
                                <span className="price">$ {prod.price}</span>
                                SubTotal: $ { prod.quantity * prod.price} 
                            </div>
                            <button onClick={() => removeItem(prod.id)}>x</button>
                         </div> 
                    </li>)}
                </div>

                <div className="totalAmount">
                    <span>Total: </span>
                    <span>$ {totalCost()} </span>
                </div>
            </ul>
            
            <div className="butttonsFooter">
                <button className="buttonLeft" onClick={()=> clearCart()}>Vaciar carrito</button>
                <button className="buttonRight">Realizar compra</button>{/*  falta darle evento al boton*/}
            </div>
        </div>
    )
}





export default ItemCart