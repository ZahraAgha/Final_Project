import express from 'express';
import { logout, signin, signup, resetPassword, forgetPassword, getCurrentUser } from '../controllers/auth.controllers.js';
import { protectRoutes } from "../middlewares/projectRoutes.js";

const router = express.Router();

//Sign Up
router.post("/signup", signup);

//Sign In
router.post("/signin", signin);

//Log out
router.post("/logout", logout);

//Reset
router.post("/reset-password", resetPassword);

//Forget
router.post("/forget-password", forgetPassword);

//User info
router.get("/me", protectRoutes, getCurrentUser)

export default router 