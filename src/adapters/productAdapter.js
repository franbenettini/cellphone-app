export const createAdapterProductFromFirestore = (doc) =>{
    const data = doc.data()

    const formattedProduct = {
        id: doc.id,
        name: data.name,
        cateogory: data.cateogory,
        img: data.img,
        price: data.price,
        description: data.description
    }

    return formattedProduct
}