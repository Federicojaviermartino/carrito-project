import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose
const cartSchema = new Schema({
    items: [
        {
            type: ObjectId,
            ref: 'Item'
        }
    ],
    total: {
        type: Number,
        required: true,
    },
})

const Cart = mongoose.model("Cart", cartSchema)

export default Cart