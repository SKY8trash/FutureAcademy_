import { Router } from "express";
import registerController from './register.controller.js';

export const registerRouter = new Router();

registerRouter.post('/', registerController.createRegister);
registerRouter.get('/', registerController.getRegister);
registerRouter.get('/:id', registerController.getRegisterById);
registerRouter.put('/:id', registerController.updateRegister);
registerRouter.delete('/:id', registerController.deleteRegister);