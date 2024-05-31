import { Router } from "express";
import usersController from './users.controller.js';

export const userRouter = new Router();

userRouter.get('/', usersController.getUsers);