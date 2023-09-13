import Producto from '../models/Producto.js';

export const createProducto = async (req, res) => {
    try {
        const { nombre, precio, thumbnail, descripcion } = req.body;
        const producto = new Producto({ nombre, precio, thumbnail, descripcion });
        const nuevoProducto = await producto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, thumbnail, descripcion } = req.body;
        const producto = await Producto.findByIdAndUpdate(
            id,
            { nombre, precio, thumbnail, descripcion },
            { new: true }
        );
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};