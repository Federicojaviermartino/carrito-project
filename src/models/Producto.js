import mongoose from "mongoose";

const { Schema } = mongoose
const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    thumbnail: String,
    descripcion: String,
    productType: {
        enum: [
            "product", "event"
        ],
        type: String,
        required: true,
    },
})

const Producto = mongoose.model("Producto", productoSchema)

export default Producto