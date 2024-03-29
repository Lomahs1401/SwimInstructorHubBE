import { Router } from 'express';
import CenterController from '../app/controllers/CenterController.js';

const centerRouter = Router();
centerRouter.get('/', CenterController.index) // [GET] /centers
centerRouter.post('/store', CenterController.store) // [POST] /centers/store
centerRouter.get('/:id', CenterController.show) // [GET] /centers/:id
centerRouter.put('/:id', CenterController.update) // [PUT] /centers
centerRouter.delete('/:id', CenterController.delete) // [DELETE] /centers

export default centerRouter;