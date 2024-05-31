import { Router } from "express";
import authController from './auth.controller.js';

export const authRouter = new Router();

authRouter.post('/', authController.createAuth);
authRouter.get('/', authController.getAuth);
authRouter.get('/:id', authController.getAuthById);
authRouter.put('/:id', authController.updateAuth);
authRouter.delete('/:id', authController.deleteAuth);