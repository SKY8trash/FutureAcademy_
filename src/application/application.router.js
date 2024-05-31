import { Router } from "express";
import applicationController from './application.controller.js';

export const applicationRouter = new Router();

applicationRouter.post('/', applicationController.createApplication);
applicationRouter.get('/', applicationController.getApplication);
applicationRouter.get('/:id', applicationController.getApplicationById);
applicationRouter.put('/:id', applicationController.updateApplication);
applicationRouter.delete('/:id', applicationController.deleteApplication);