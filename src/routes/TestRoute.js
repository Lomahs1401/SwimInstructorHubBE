import { Router } from 'express';
import TestController from '../app/controllers/TestController.js';

const testRouter = Router();
testRouter.get('/', TestController.index);

export default testRouter;