import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



// prisma/prisma.js
// import { PrismaClient } from '@prisma/client'

// let prisma

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient()
//     }
//     prisma = global.prisma
// }

// export default prisma




export const createProduct = async (image, title, price, category, description) => {
   
        const product = await prisma.product.create({
            data: {
                image,
                title,
                price,
                category,
                description
            }
        });
        console.log("Product created:", product);

        return product
};


export const getAllProducts = async () => {
   
    // const product = await prisma.product.findMany({
    //     orderBy: [
    //         {
    //             price: 'desc'
    //         }
    //     ]
    // })

    // query='iphone'

    // const product = await prisma.product.findMany({
    //     orderBy: [
    //         {
    //             price: 'desc'
    //         },
    //         {
    //             title: 'asc'
    //         }
    //     ],
        
    //     size:3,
    //     skip: true,

    //     where:{
    //         title:{
    //             contains: query
    //         }
    //     }
    // })

    const products = await prisma.product.findMany()

    console.log("Products:", products);

    return products
};


export const deleteProduct = async (id) => {
   
    await prisma.product.delete({
        where: {
            id: id
        }
    })
};

