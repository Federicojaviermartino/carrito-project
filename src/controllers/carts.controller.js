import Cart from '../models/Cart.js';
import Item from '../models/Item.js';

export const addToCart = async (req, res) => {
    try {
        const { productId, unidades } = req.body;
        const cartId = req.params.id;
        const item = new Item();
        let cart = await Cart.findById(cartId);
        if (!cart) {
            cart = new Cart({ _id: cartId, items: [] });
        }

        const existingItem = cart.items.find((item) => item.productId === productId);
        if (existingItem) {
            existingItem.unidades += unidades;
        } else {
            cart.items.push({ productId, unidades });
        }

        const updatedCart = await cart.save();
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar al carrito' });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const cartId = req.params.id; // ID del carrito

        // Buscar el carrito por ID
        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }

        // Filtrar los ítems para eliminar el ítem por productId
        cart.items = cart.items.filter((item) => item.productId !== productId);

        // Guardar el carrito actualizado en la base de datos
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el ítem del carrito' });
    }
};

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find().populate('items');
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los carritos' });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCart = await Cart.findByIdAndDelete(id);
        if (!deletedCart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json({ message: 'Carrito eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el carrito' });
    }
};