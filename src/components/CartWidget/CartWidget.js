import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className='cartText'>
            <FaShoppingCart/>
            {getQuantity()}
        </div>
    )
}

export default CartWidget