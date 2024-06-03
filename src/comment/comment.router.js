<<<<<<< Updated upstream
import { Router } from "express";
import commentController from "./comment.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const commentRouter = new Router();

commentRouter.use(middlewareFunction);

commentRouter.post("/", commentController.createComment);
commentRouter.get("/", commentController.getComment);
commentRouter.get("/:id", commentController.getCommentById);
commentRouter.put("/:id", commentController.updateComment);
commentRouter.delete("/:id", commentController.deleteComment);
=======
import { Router } from "express";
import commentController from "./comment.controller.js";
import { middlewareFunction } from "../middleware/middleware.js";
export const commentRouter = new Router();

commentRouter.use(middlewareFunction);

commentRouter.post("/", commentController.createComment);
commentRouter.get("/", commentController.getComment);
commentRouter.get("/:id", commentController.getCommentById);
commentRouter.put("/:id", commentController.updateComment);
commentRouter.delete("/:id", commentController.deleteComment);
>>>>>>> Stashed changes
