import Product from '../models/product.model.js'
import Color from '../models/color.model.js'
import Size from '../models/size.model.js'
import Category from '../models/category.model.js'; //? silersen 


// // Get all products
// export const getProducts = async (request, response) => {
//     const products = await Product.find()
//     if (!products) return response.status(404).send({ error: "Something Went wrong" })
//     return response.status(200).send(products)
// }


//-------------
// export const getProducts = async (request, response) => {
//     const { category } = request.query; // Get the category slug from the query parameters

//     try {
//         let filter = {};
//         if (category) {
//             // Find the category ID using the slug
//             const categoryDoc = await Category.findOne({ slug: category });
//             if (categoryDoc) {
//                 filter = { category: categoryDoc._id }; // Use the category ID to filter products
//             } else {
//                 return response.status(404).send({ error: "Category not found" });
//             }
//         }

//         console.log("Filter used for querying products:", filter); // Debug log
//         const products = await Product.find(filter).populate('category');
//         console.log("Products fetched from the database:", products); // Debug log

//         return response.status(200).send(products);
//     } catch (error) {
//         console.error("Error fetching products:", error); // Debug log
//         return response.status(500).send({ error: "Something went wrong" });
//     }
// };

export const getProducts = async (request, response) => {
    const { categories } = request.query; // Get the categories from the query parameters

    try {
        let filter = {};
        if (categories) {
            const categorySlugs = categories.split(',').map(decodeURIComponent);
            const categoryDocs = await Category.find({ slug: { $in: categorySlugs } });
            const categoryIds = categoryDocs.map(category => category._id);
            filter = { category: { $in: categoryIds } };
        }

        console.log("Filter used for querying products:", filter); // Debug log
        const products = await Product.find(filter).populate('category');
        console.log("Products fetched from the database:", products); // Debug log

        return response.status(200).send(products);
    } catch (error) {
        console.error("Error fetching products:", error); // Debug log
        return response.status(500).send({ error: "Something went wrong" });
    }
};


//---------------



// get a single product
export const getSingleProduct = async (request, response) => {
    const { productId } = request.params
    const singleproduct = await Product.findById(productId)
        .populate("stock.size")
    if (!singleproduct) return response.status(404).send({ error: "Something went wrong" })
    return response.status(200).send(singleproduct)
}



//add a single product
export const addSingleProduct = async (request, response) => {
    const { title, price, category, slug, sku, description, color, size, quantity } = request.body
    const { path } = request.file

    console.log(title, price, category, slug, sku, description, color, size, quantity);
    //check empty values
    if (!title
        || !price
        || !category
        || !slug
        || !sku
        || !description
        || !color
        || !size
        || !quantity
        || !path
    ) {
        return response.status(400).send({ error: "Please fill all required fields" })


    }
    //check existing specific product
    const existingProduct = await Product.findOne({ sku })
        .populate("stock.color")
        .populate("stock.size")

    const givenColor = await Color.findById(color)
    const givenSize = await Size.findById(size)



    if (existingProduct) {
        const existingStockItem = existingProduct.stock.find(
            stockItem => stockItem.color.name === givenColor.name
                && stockItem.size.name == givenSize.name)
        if (existingStockItem) {
            existingStockItem.quantity += +quantity;
        } else {
            existingProduct.stock.push({ color, size, quantity });
        }
        await existingProduct.save();
        return response.status(existingStockItem ? 200 : 201).send(existingProduct);
    }

    const stock = [{ quantity, size, color }]
    const newProduct = await Product.create({
        title,
        price,
        category,
        slug,
        sku,
        description,
        stock,
        productPic: path
    })
    response.status(201).send(newProduct)
}





