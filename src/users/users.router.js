import { Router } from "express";
import usersController from "./users.controller.js";
import { middlewareFunction } from "../Middleware/Middleware";
export const userRouter = new Router();

userRouter.use(middlewareFunction);

userRouter.get("/", usersController.getUsers);
