// routes/proyecto.routes.js
import { Router } from 'express';
import { createProyecto, deleteProyecto, getProyecto, updateProyecto, getProyectos } from '../controllers/proyecto.controller.js';

const router = Router();

router.get('/proyectos', getProyectos);
router.get('/proyectos/:id', getProyecto);
router.post('/proyectos', createProyecto);
router.put('/proyectos/:id', updateProyecto);
router.delete('/proyectos/:id', deleteProyecto);

export default router;
