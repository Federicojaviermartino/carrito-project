import Cart from '../models/Cart.js';
import Producto from '../models/Producto.js';
export const addToCart = async (req, res) => {
    try {
        const { productId, unidades } = req.body;
        const cartId = req.params.id;
        let cart = null
        if (cartId === true) {
            cart = await Cart.findById(cartId);
            if (!cart) {
                cart = new Cart({ _id: cartId, items: [] });
            }
        }
        else {
            cart = new Cart({ _id: cartId, items: [] });
        }
        const existingItem = cart.items.find((item) => item.productId === productId);
        if (existingItem) {
            existingItem.unidades += 1;
        } else {
            const product = await Producto.findById(productId)
            cart.items.push({
                productId,
                nombreItem: product.nombre,
                tipoItem: product.productType,
                unidades,
                precioUnitario: product.precio,
                subtotal: product.precio * unidades,
            });
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
        const cartId = req.params.id;

        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }

        cart.items = cart.items.filter((item) => item.productId !== productId);

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