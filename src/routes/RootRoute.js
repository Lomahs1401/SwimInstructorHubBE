import { Router } from 'express';
import RootController from '../app/controllers/RootController.js';

const rootRouter = Router();
rootRouter.get('/', RootController.index);

export default rootRouter;