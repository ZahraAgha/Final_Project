import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hex: {
        type: String,
        required: true, 
    } 
})

export default mongoose.model("Color", colorSchema)