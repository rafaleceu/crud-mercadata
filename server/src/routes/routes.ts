import { Router } from 'express';
import user from './user';
import login from './login';

const routes = Router();

routes.use('/login', login)
routes.use('/api', user);

export default routes;