const products = [
    {
        id:1,
        name:'Iphone 13 Pro',
        price:999,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg',
        stock:25,
        description:'Descripcion de Iphone 13 Pro'
    },
    {
        id:2,
        name:'Iphone 13',
        price:699,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg',
        stock:50,
        description:'Descripcion de Iphone 13'
    },
    {
        id:3,
        name:'Iphone SE',
        price:429,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg',
        stock:30,
        description:'Descripcion de Iphone SE'
    }
]



export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products)
        }, 6000 )
    })
}


export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === 2))
        }, 2000 )
    })
}