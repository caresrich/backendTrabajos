import express from 'express';
import json from 'express'
import morgan from 'morgan';

//importando rutas
import rolesRutas from './routes/rolesRouters.js';
import usuariosRutas from './routes/usuarioRoutes.js'


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());


//using the routers
app.use('/api/roles',rolesRutas);
app.use('/api/usuarios',usuariosRutas);

export default app;