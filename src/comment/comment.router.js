import { Router } from "express";
import commentController from "./comment.controller.js";
import { middlewareFunction } from "../Middleware/Middleware";
export const commentRouter = new Router();

commentRouter.use(middlewareFunction);

commentRouter.post("/", commentController.createComment);
commentRouter.get("/", commentController.getComment);
commentRouter.get("/:id", commentController.getCommentById);
commentRouter.put("/:id", commentController.updateComment);
commentRouter.delete("/:id", commentController.deleteComment);
