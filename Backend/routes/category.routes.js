import express from 'express';
import { getCategories, addCategory } from '../controllers/category.controller.js';

const router = express.Router();
//Get all colors
router.get("/", getCategories)

//Post a new color
router.post("/", addCategory)


export default router 