import mongoose, {Schema} from "mongoose";

const wishlistItem = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    }
})

const wishlistSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: {
        type: [wishlistItem],
        default: []
    },
})

export default mongoose.model("Wishlist", wishlistSchema)