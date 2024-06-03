<<<<<<< Updated upstream
import { Router } from "express";
import teachersController from './teachers.controller.js';

export const teachersRouter = new Router();

teachersRouter.post('/', teachersController.createTeachers);
teachersRouter.get('/', teachersController.getTeachers);
teachersRouter.get('/:id', teachersController.getTeachersById);
teachersRouter.put('/:id', teachersController.updateTeachers);
teachersRouter.delete('/:id', teachersController.deleteTeachers);
=======
import { Router } from "express";
import teachersController from "./teachers.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const teachersRouter = new Router();

teachersRouter.use(middlewareFunction);

teachersRouter.post("/", teachersController.createTeachers);
teachersRouter.get("/", teachersController.getTeachers);
teachersRouter.get("/:id", teachersController.getTeachersById);
teachersRouter.put("/:id", teachersController.updateTeachers);
teachersRouter.delete("/:id", teachersController.deleteTeachers);
>>>>>>> Stashed changes
