import { Router } from 'express';
import CenterController from '../app/controllers/CenterController.js';

const centerRouter = Router();
centerRouter.get('/', CenterController.index)
centerRouter.get('/:id', CenterController.show)
centerRouter.post('/:id', CenterController.store)
centerRouter.put('/:id', CenterController.update)
centerRouter.delete('/:id', CenterController.delete)

export default centerRouter;