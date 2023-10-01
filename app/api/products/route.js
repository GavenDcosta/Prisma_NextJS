import { createProduct, getAllProducts, deleteProduct } from "@/prisma/product";

// import QueryRouter from "@/components/queryRouter";


export const GET = async () => {
    try{

        const allProducts = await getAllProducts();

       return new Response(JSON.stringify(allProducts), {status:200})

    } catch (error){ 
        return new Response("Failed to fetch the prompt", {status:500})
    }
}



export const DELETE = async (req) => {
    // const { id } = QueryRouter()
    const { id } = req.query

    if (!id) {
        console.log("id not there");
        return new Response("Missing id parameter", { status: 400 });
    }

    console.log(id);
    try {
        await deleteProduct(id);
        return new Response("Product deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete Product", { status: 500 });
    }
};

export const POST = async (req) => {
    const { image, title, price, category, description } = await req.json()

    try {
        const newProduct = await createProduct(image, title, price, category, description);
        
        return new Response(JSON.stringify(newProduct), {status:201})

    } catch (error) {
        return new Response("Failed to create a new prompt", {status:500})
    }
}













// export default async function handler(req, res) {
//     try {
//         switch (req.method) {
//             case 'POST': {
//                 const { image, title, price, category } = req.body;
//                 const newProduct = await createProduct(image, title, price, category);
//                 res.status(201).json(newProduct);
//                 break;
//             }

//             case 'GET': {
//                 const allProducts = await getAllProducts();
//                 res.status(200).json(allProducts);
//                 break;
//             }

//             case 'DELETE': {
//                 const { id } = req.query;
//                 await deleteProduct(id);
//                 res.status(200).json({ message: 'Product deleted successfully' });
//                 break;
//             }

//             default: {
//                 res.status(405).end(`Method ${req.method} Not Allowed`);
//             }
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
