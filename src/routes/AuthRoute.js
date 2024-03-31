import { Router } from 'express';
import AuthController from '../app/controllers/AuthController.js';

const authRouter = Router();
authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.register);

export default authRouter;