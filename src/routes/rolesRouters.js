import Router from 'express';

import {getAllRoles} from '../controllers/rolesController.js'

const router = Router();


router.get('/',getAllRoles);



export default router;