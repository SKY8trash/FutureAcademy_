import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';

import { postRouter } from "./src/posts/posts.router.js";
import { userRouter } from './src/users/users.router.js';
import { applicationRouter } from './src/application/application.router.js';
import { authRouter } from './src/auth/auth.router.js';
import { commentRouter } from './src/comment/comment.router.js';
import { registerRouter } from './src/register/register.router.js';
import { teachersRouter } from './src/teachers/teachers.router.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/application", applicationRouter);
app.use("/api/auth", authRouter);
app.use("/api/comment", commentRouter);
app.use("/api/register", registerRouter);
app.use("/api/teachers", teachersRouter);

await db.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});