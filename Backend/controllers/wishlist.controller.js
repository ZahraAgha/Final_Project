import Wishlist from "../models/wishlist.model.js"
import Product from "../models/product.model.js"

//get or create a single wishlist
export const getWishlist = async (request, response) => {
    const { id: userId } = request.user
    if (!userId) {
        return response.status(401);
    }

    let wishlist = await Wishlist.findOne({ userId })
        .populate("items.product");
    if (!wishlist) {
        wishlist = await Wishlist.create({ userId });
    }

    response.status(200).send(wishlist)
}

//get a single cart
export const addToWishlist = async (request, response) => {
    const { id: userId } = request.user
    if (!userId) {
        return response.status(401);
    }

    const { productId } = request.body;

    const product = await Product.findById(productId);
    if (!product) {
        return response.status(400).send({ error: "Product is not available" });
    }

    let wishlist = await Wishlist.findOne({ userId })
        .populate("items.product");
    if (!wishlist) {
        wishlist = await Wishlist.create({ userId });
    }

    wishlist.items.push({ product: productId });
    await wishlist.save();

    response.status(200).send(wishlist)
}

//get a single cart
export const removeFromWishlist = async (request, response) => {
    const { id: userId } = request.user
    if (!userId) {
        return response.status(401);
    }

    const { productId } = request.body;
    const wishlist = await Wishlist.findOne({ userId })
        .populate("items");
    if (!wishlist) {
        return response.status(400).send({ error: "Wishlist is not available" });
    }

    wishlist.items = wishlist.items.filter(s => !s.product.equals(productId));
    await wishlist.save();

    response.status(200).send(wishlist)
}