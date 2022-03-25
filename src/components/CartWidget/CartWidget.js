import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'

const CartWidget = () => {
    return(
        <>
            <FaShoppingCart color='white'/>
            <p className="cartText">4</p>
        </>
    )
}

export default CartWidget