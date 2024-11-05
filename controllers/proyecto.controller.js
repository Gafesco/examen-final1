// controllers/proyecto.controller.js
import Proyecto from '../models/proyecto.js';

export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findOne({ where: { id } });
    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(proyecto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProyecto = async (req, res) => {
  const { titulo, descripcion, completada, fecha_vencimiento, prioridad, asignado_a, categoria, costo_proyecto, pagado } = req.body;
  try {
    const newProyecto = await Proyecto.create({
      titulo,
      descripcion,
      completada,
      fecha_vencimiento,
      prioridad,
      asignado_a,
      categoria,
      costo_proyecto,
      pagado,
    });
    res.status(201).json(newProyecto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, completada, fecha_vencimiento, prioridad, asignado_a, categoria, costo_proyecto, pagado } = req.body;

    const proyecto = await Proyecto.findByPk(id);
    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    proyecto.set({
      titulo,
      descripcion,
      completada,
      fecha_vencimiento,
      prioridad,
      asignado_a,
      categoria,
      costo_proyecto,
      pagado,
    });

    await proyecto.save();

    res.json(proyecto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Proyecto.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
