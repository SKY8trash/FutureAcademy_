import { Router } from "express";
import teachersController from './teachers.controller.js';

export const teachersRouter = new Router();

teachersRouter.post('/', teachersController.createTeachers);
teachersRouter.get('/', teachersController.getTeachers);
teachersRouter.get('/:id', teachersController.getTeachersById);
teachersRouter.put('/:id', teachersController.updateTeachers);
teachersRouter.delete('/:id', teachersController.deleteTeachers);