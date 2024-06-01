import { Router } from "express";
import authController from "./auth.controller.js";
import { middlewareFunction } from "../Middleware/Middleware";
export const authRouter = new Router();

authRouter.use(middlewareFunction);
