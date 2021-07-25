import { Router, Request, Response } from 'express';
import * as services from '../services/user.services';
const router = Router();


router.get('/', services.getUsers);
router.post('/', services.addUsers);

export default router;