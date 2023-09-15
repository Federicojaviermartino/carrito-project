import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose
const cartSchema = new Schema({
    items: [],
    total: {
        type: Number,
        required: true,
    },
})

cartSchema.methods.calculateTotal = function () {
    let total = 0;
    for (const item of this.items) {
        total += item.subtotal;
    }
    this.total = total;
};

const Cart = mongoose.model("Cart", cartSchema)

export default Cart