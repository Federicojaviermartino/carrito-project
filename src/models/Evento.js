import mongoose from "mongoose";

const { Schema } = mongoose
const eventoSchema = new Schema({
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
})

const Evento = mongoose.model("Evento", eventoSchema)

export default Evento