import Item from '../models/Item.js';

export const createItem = async (req, res) => {
    try {
        const { nombreItem, tipoItem, unidades, precioUnitario, subtotal } = req.body;
        const newItem = new Item({ nombreItem, tipoItem, unidades, precioUnitario, subtotal });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el item' });
    }
};

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los items' });
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreItem, tipoItem, unidades, precioUnitario, subtotal } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { nombreItem, tipoItem, unidades, precioUnitario, subtotal },
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el item' });
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        res.json(deletedItem);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el item' });
    }
};