const products = [
    {
        id:1,
        name:'Iphone 13 Pro',
        price:199800,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg',
        stock:25,
        description:'Descripcion de Iphone 13 Pro'
    },
    {
        id:2,
        name:'Iphone 13',
        price:139800,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg',
        stock:50,
        description:'Descripcion de Iphone 13'
    },
    {
        id:3,
        name:'Iphone SE',
        price:85800,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg',
        stock:30,
        description:'Descripcion de Iphone SE'
    },
    {
        id:4,
        name:'Iphone 12',
        price:119800,
        category:'celular',
        img:'https://www.apple.com/v/iphone/home/bf/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_large.jpg',
        stock:60,
        description:'Descripcion de Iphone 12'
    },
    {
        id:5,
        name:'Galaxy S22 Ultra',
        price:237999,
        category:'celular',
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-ultra-s908-sm-s908ezwmaro-thumb-530923211?$216_216_PNG$',
        stock:90,
        description:'Descripcion de Galaxy S22 Ultra'
    },
    {
        id:6,
        name:'Galaxy S22+',
        price:195999,
        category:'celular',
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-plus-s906-sm-s906ezwmaro-thumb-530922595?$216_216_PNG$',
        stock:45,
        description:'Descripcion de Galaxy S22+'
    },
    {
        id:7,
        name:'Galaxy S22',
        price:154999,
        category:'celular',
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901eidlaro-thumb-530921550?$216_216_PNG$',
        stock:10,
        description:'Descripcion de Galaxy S22'
    },
    {
        id:8,
        name:'Ipad Pro',
        price:159800,
        category:'tablet',
        img:'https://www.apple.com/v/ipad/home/bw/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png',
        stock:15,
        description:'Descripcion de Ipad Pro'
    },
    {
        id:9,
        name:'Ipad Air',
        price:119800,
        category:'tablet',
        img:'https://www.apple.com/v/ipad/home/bw/images/overview/compare_ipad_air__bxjv33pk6nte_large.png',
        stock:60,
        description:'Descripcion Ipad Air'
    },
    {
        id:10,
        name:'Ipad',
        price:65800,
        category:'tablet',
        img:'https://www.apple.com/v/ipad/home/bw/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png',
        stock:20,
        description:'Descripcion Ipad'
    }
]

const categories = [
    {id: 'celular', description: 'Celular'},
    {id: 'tablet', description: 'Tablet'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}


export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === parseInt(id)))
        }, 100 )
    })
}

