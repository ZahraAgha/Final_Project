import express from 'express';
import { addToWishlist, getWishlist, removeFromWishlist } from '../controllers/wishlist.controller.js';
import { protectRoutes } from "../middlewares/projectRoutes.js";

const router = express.Router();


router.get("/", protectRoutes, getWishlist)
router.post("/", protectRoutes, addToWishlist)
router.delete("/", protectRoutes, removeFromWishlist)


export default router 