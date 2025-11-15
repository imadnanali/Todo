import express from "express"
import isAuthenticate from "../middleware/auth.middleware.js"
import { createTodo } from "../controller/todo.controller.js"

const router = express.Router()

router.post("/todo", isAuthenticate, createTodo)
// router.get("/todo", isAuthenticate, getAllTodo)

export default router