const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/createProduct', productController.createProduct);
router.get('/getAllProducts', productController.getAllProducts);
router.put('/editProduct/:id', productController.updateProduct);
router.get('/getProduct/:id', productController.getProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;
