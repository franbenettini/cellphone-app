import { createContext, useState } from "react"
import {toast, Zoom } from 'react-toastify'

const CartContext = createContext()

export const CartContextProvider = ({ children,name }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id, name) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
        toast.warning(`Se elimino ${name} del carrito`, {
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
            icon:false,
            });
    }

    const getQuantityProd = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }

    const totalCost = () => {
        const totalCost = Object.values(cart).reduce((acc, {quantity, price}) => acc + quantity * price ,0)
        return totalCost
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getQuantityProd,
            totalCost
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext