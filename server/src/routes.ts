import { Router } from 'express';

import ProductController from './app/controllers/Product';

const routes = Router();

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

export default routes;
