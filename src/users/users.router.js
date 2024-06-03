<<<<<<< Updated upstream
import { Router } from "express";
import usersController from "./users.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const userRouter = new Router();

userRouter.use(middlewareFunction);

userRouter.get("/", usersController.getUsers);
=======
import { Router } from "express";
import usersController from "./users.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const userRouter = new Router();

userRouter.use(middlewareFunction);

userRouter.get("/", usersController.getUsers);
>>>>>>> Stashed changes
