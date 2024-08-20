const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/users', authenticate, authorize('admin'), adminController.getUsers);
router.post('/users', authenticate, authorize('admin'), adminController.createUser);
router.put('/users/:id', authenticate, authorize('admin'), adminController.updateUser);
router.delete('/users/:id', authenticate, authorize('admin'), adminController.deleteUser);

router.get('/llm-configs', authenticate, authorize('admin'), adminController.getLLMConfigs);
router.post('/llm-configs', authenticate, authorize('admin'), adminController.createLLMConfig);
router.put('/llm-configs/:id', authenticate, authorize('admin'), adminController.updateLLMConfig);
router.delete('/llm-configs/:id', authenticate, authorize('admin'), adminController.deleteLLMConfig);

router.get('/system-health', authenticate, authorize('admin'), adminController.getSystemHealth);

module.exports = router;
