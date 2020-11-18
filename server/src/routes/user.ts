import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

router.get('/', UserController.showAllUser);
router.post('/', UserController.createUser);
router.get('/:id([0-9]+)', UserController.showUser);
router.patch('/:id([0-9]+)', UserController.updateUser);
router.delete(':id([0-9]+)', UserController.deleteUser);

export default router;