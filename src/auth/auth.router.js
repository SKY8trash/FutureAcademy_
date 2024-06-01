import { Router } from "express";
import authController from "./auth.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const authRouter = new Router();

authRouter.use(middlewareFunction);
