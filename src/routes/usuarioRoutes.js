import Router from 'express';

import {login,getAllUsers} from '../controllers/usuariosController.js'

const router = Router();
router.post('/',login);
router.get('/',getAllUsers)

export default router;