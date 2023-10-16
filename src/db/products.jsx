import { v4 as uuid } from "uuid";

export const products = [
    {
        _id: uuid(),
        productName: 'Leather camel sneakers',
        mrp: '2499',
        offer: '10%',
        price: '',
        categoryName: 'SNEAKERS',
        img: 'https://res.cloudinary.com/dewisedrc/image/upload/v1697342437/woodland-sneaker-camel_aegumr.webp',
        rating: '4.5',
        description: 'Leather camel sneakers for men',
    },
    {
        _id: uuid(),
        productName: 'Leather gray sneakers',
        mrp: '2299',
        offer: '10%',
        price: '',
        categoryName: 'SNEAKERS',
        img: 'https://res.cloudinary.com/dewisedrc/image/upload/v1697342435/woodland-casual-blue_w864uz.webp',
        rating: '4.2',
        description: 'Leather gray sneakers for men',
    },
]