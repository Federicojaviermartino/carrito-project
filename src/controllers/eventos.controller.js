import Evento from '../models/Evento.js';

export const createEvento = async (req, res) => {
    try {
        const { nombre, precio, thumbnail, descripcion } = req.body;
        const evento = new Evento({ nombre, precio, thumbnail, descripcion });
        const nuevoEvento = await evento.save();
        res.status(201).json(nuevoEvento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el evento' });
    }
};

export const getEventos = async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
};

export const updateEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, thumbnail, descripcion } = req.body;
        const evento = await Evento.findByIdAndUpdate(
            id,
            { nombre, precio, thumbnail, descripcion },
            { new: true }
        );
        if (!evento) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el evento' });
    }
};

export const deleteEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await Evento.findByIdAndDelete(id);
        if (!evento) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json({ message: 'Evento eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el evento' });
    }
};