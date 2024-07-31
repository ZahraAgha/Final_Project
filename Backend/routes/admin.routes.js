import express from 'express';
import * as admin from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/users', admin.getUsers);
router.get('/users/:id', admin.getUser);
router.put('/users/:id', admin.updateUser);

router.get('/orders', admin.getOrders);
router.get('/orders/:id', admin.getOrder);
router.put('/orders/:id/items/:subId', admin.updateOrderItemStatus);

router.get('/products', admin.getProducts);
router.post('/products', admin.addProduct)
router.get('/products/:id', admin.getProduct);
router.put('/products/:id', admin.updateProduct);
router.delete('/products/:id', admin.deleteProduct);

router.get('/materials', admin.getMaterials);
router.post('/materials', admin.addMaterial);
router.delete('/materials/:id', admin.deleteMaterial);

router.get('/categories', admin.getCategories);
router.post('/categories', admin.addCategory);
router.delete('/categories/:id', admin.deleteCategory);

router.get('/sizes', admin.getSizes);
router.post('/sizes', admin.addSize);
router.delete('/sizes/:id', admin.deleteSize);

router.get('/colors', admin.getColors);
router.post('/colors', admin.addColor);
router.delete('/colors/:id', admin.deleteColor);

export default router