const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/generate', authenticate, productController.generateProduct);
router.get('/', authenticate, productController.getProducts);
router.get('/:id', authenticate, productController.getProduct);
router.put('/:id', authenticate, productController.updateProduct);
router.delete('/:id', authenticate, authorize('admin'), productController.deleteProduct);

module.exports = router;
