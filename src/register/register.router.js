import { Router } from "express";
import registerController from "./register.controller.js";
import { middlewareFunction } from "../Middleware/Middleware.js";
export const registerRouter = new Router();

registerRouter.use(middlewareFunction);
