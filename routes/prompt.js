const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/', authenticate, promptController.getPrompts);
router.post('/', authenticate, authorize('admin'), promptController.createPrompt);
router.get('/:id/versions', authenticate, promptController.getPromptVersions);
router.post('/:id/versions', authenticate, authorize('admin'), promptController.createPromptVersion);
router.post('/ab-test', authenticate, authorize('admin'), promptController.createABTest);
router.get('/ab-test/:id/results', authenticate, promptController.getABTestResults);

module.exports = router;
