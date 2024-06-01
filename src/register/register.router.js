import { Router } from "express";
import registerController from "./register.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const registerRouter = new Router();

registerRouter.use(middlewareFunction);
registerRouter.post("/", registerController.createRegister);