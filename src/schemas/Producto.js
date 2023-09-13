import mongoose from "mongoose";

const { Schema } = mongoose
const productoSchema = new Schema({
    nombre: String,
    precio: Number,
})

const Producto = mongoose.model("Producto", productoSchema)

export default Producto