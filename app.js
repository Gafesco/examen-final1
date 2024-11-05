import express from 'express';
import cors from 'cors';
import proyectoRoutes from './routes/proyecto.routes.js';

const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/api', proyectoRoutes); 

export default app;
