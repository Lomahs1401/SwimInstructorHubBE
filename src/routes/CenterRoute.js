import { Router } from 'express';
import CenterController from '../app/controllers/CenterController.js';

const centerRouter = Router();
centerRouter.get('/', CenterController.index)

export default centerRouter;