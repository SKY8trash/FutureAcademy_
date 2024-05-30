import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';

import { postRouter } from "./src/posts/posts.router.js";
import { userRouter } from './src/users/users.router.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

await db.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// отзывы
// пользователи
// посты
// новости