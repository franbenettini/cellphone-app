import { firestoreDb } from "./index"
import {getDocs, query, collection, where} from 'firebase/firestore'
import { createAdapterProductFromFirestore } from "../../adapters/productAdapter"

export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return createAdapterProductFromFirestore(doc)
            })
            resolve(products)
        })
    })
}