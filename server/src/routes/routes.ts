import { Router } from 'express';
import user from './user';

const routes = Router();

routes.use('/api', user);

export default routes;