import { Router } from "express";
import commentController from './comment.controller.js';

export const commentRouter = new Router();

commentRouter.post('/', commentController.createComment);
commentRouter.get('/', commentController.getComment);
commentRouter.get('/:id', commentController.getCommentById);
commentRouter.put('/:id', commentController.updateComment);
commentRouter.delete('/:id', commentController.deleteComment);