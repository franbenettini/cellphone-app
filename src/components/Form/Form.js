import './Form.css'
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { useForm } from "react-hook-form"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import {nameValidations, emailValidations, direccionValidations, telefonoValidations} from '../../utils/validations'

const Form = () => {

    const { handleSubmit, register, formState: {errors} } = useForm();             
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, totalCost, clearCart } = useContext(CartContext)
    const [buttonDisabled, setButtonDisabled] = useState(true)


    const onBlurHandler = (event) =>  {
        if (input.correo === input.mailConfirm) {
            console.log('hola')
            setButtonDisabled(false)
        }
    }

    const handleSubmitForm = (values) => {
        console.log(values);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: input,
            productsOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            total: totalCost(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })

    }

    if (loading) {
        return <span> Se esta generando su orden</span>
    }

    
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                <div className='Form'>
                    <h1>Tus datos</h1>

                    <label>Nombre: <input {...register('nombre', nameValidations)} type='text' onChange={handleChange} value={input.nombre || ""}/>
                    
                    {errors.nombre ? (<ErrorMessage message= {errors.nombre?.message}/>) : null}
                    </label>

                    <label>Email: <input {...register('correo', emailValidations)} type='text' onChange={handleChange} value={input.correo || ""}/>

                    {errors.correo ? (<ErrorMessage message= {errors.correo?.message}/>) : null}    
                    </label>

                    <label>Ingrese nuevamente el Email: <input {...register('mailConfirm', emailValidations)} type='text' onChange={handleChange} onBlur={onBlurHandler} value={input.mailConfirm  || ""}/>

                    {errors.mailConfirm  ? (<ErrorMessage message= {errors.mailConfirm ?.message}/>) : null}    
                    </label>

                    <label>Dirección: <input {...register('direccion',direccionValidations)} type='text' onChange={handleChange} value={input.direccion || ""}/>
                    
                    {errors.direccion ? (<ErrorMessage message= {errors.direccion?.message}/>) : null}
                    </label>

                    <label>Teléfono:<input {...register('telefono', telefonoValidations)} type="number" onChange={handleChange} value={input.telefono || ""}/>
                    
                    {errors.telefono ? (<ErrorMessage message= {errors.telefono?.message}/>) : null}
                    </label>



                    <button /* onClick={() => createOrder()} */ /* type="button" */ type="submit" >Finalizar compra</button>
                </div>
            </div>
        </form>
    )
} 

export default Form