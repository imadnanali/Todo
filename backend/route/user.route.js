import express from "express";
import { logIn, signIn } from "../controller/auth.controller.js";
import isAuthenticate from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", logIn);

export default router