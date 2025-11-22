import express from "express";
import "dotenv/config";
import userRouter from "./route/user.route.js";
import connectDB from "./util/db.js";
import todoRouter from "./route/todo.route.js"

const app = express();
connectDB();

app.use(express.json());
app.use("/auth", userRouter);
app.use("/", todoRouter)

app.listen(process.env.PORT, () => console.log(`App is running at port ${process.env.PORT}`));

