import mongoose from "mongoose";

const { Schema } = mongoose
const itemSchema = new Schema({
    nombreItem: {
        type: String,
        required: true,
    },
    tipoItem: {
        type: String,
        enum: ["Evento", "Producto"],
        required: true,
    },
    unidades: {
        type: Number,
        required: true,
    },
    precioUnitario: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
})

itemSchema.methods.calculateTotal = function () {
    this.subtotal = this.precioUnitario * this.unidades;
};

const Item = mongoose.model("Item", itemSchema)

export default Item