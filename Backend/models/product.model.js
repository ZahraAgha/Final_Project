import mongoose, {mongo, Schema} from "mongoose";

const stockItem = new Schema({
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
        required: true,
    },
})

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    productPic: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
        required: true,
    },
    stock: [stockItem],
})

export default mongoose.model("Product", productSchema)