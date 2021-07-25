import test from './test.routes';
import {Router} from 'express';

const router = Router();

router.use('/test', test);


export default router;
