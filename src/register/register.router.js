<<<<<<< Updated upstream
import { Router } from "express";
import registerController from "./register.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const registerRouter = new Router();

registerRouter.use(middlewareFunction);
=======
import { Router } from "express";
import registerController from "./register.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const registerRouter = new Router();

registerRouter.use(middlewareFunction);
>>>>>>> Stashed changes
registerRouter.post("/", registerController.createRegister);