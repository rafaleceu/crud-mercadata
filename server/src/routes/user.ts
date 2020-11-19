import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

router.get('/', UserController.showAllUser);
router.get('/:id([0-9]+)', UserController.showUser);     //Regex to only allow numbers for id
router.post('/', UserController.createUser);
router.delete('/:id([0-9]+)', UserController.deleteUser);
router.patch('/:id([0-9]+)', UserController.updateUser);

export default router;