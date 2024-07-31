import mongoose, {Schema} from "mongoose";

const materialSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    
});

export default mongoose.model("Material", materialSchema);
