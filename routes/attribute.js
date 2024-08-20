const express = require('express');
const router = express.Router();
const attributeController = require('../controllers/attributeController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/hierarchy', authenticate, attributeController.getHierarchy);
router.post('/department', authenticate, authorize('admin'), attributeController.createDepartment);
router.post('/category', authenticate, authorize('admin'), attributeController.createCategory);
router.post('/subcategory', authenticate, authorize('admin'), attributeController.createSubcategory);
router.post('/attribute', authenticate, authorize('admin'), attributeController.createAttribute);

module.exports = router;
