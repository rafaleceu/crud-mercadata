import { Router } from 'express';
import LoginController from '../controller/LoginController';

const router = Router();

router.post('/', LoginController.showUser);

export default router;