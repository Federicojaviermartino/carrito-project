import mongoose from "mongoose";

const { Schema } = mongoose
const eventoSchema = new Schema({
    nombre: String,
    precio: Number,
})

const Evento = mongoose.model("Evento", eventoSchema)

export default Evento