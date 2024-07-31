import mongoose, {Schema} from "mongoose";

const sizeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

export default mongoose.model("Size", sizeSchema) 