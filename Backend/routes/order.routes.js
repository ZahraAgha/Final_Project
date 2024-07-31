import express from 'express';
import { addOrder } from "../controllers/order.controller.js";
import { protectRoutes } from "../middlewares/projectRoutes.js";

const router = express.Router();
 
//Post a new Order
router.post("/", protectRoutes, addOrder)


export default router 