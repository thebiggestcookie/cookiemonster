const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/overview', authenticate, analyticsController.getOverview);
router.get('/grader-performance', authenticate, analyticsController.getGraderPerformance);
router.get('/llm-performance', authenticate, analyticsController.getLLMPerformance);
router.get('/category-distribution', authenticate, analyticsController.getCategoryDistribution);
router.get('/trends', authenticate, analyticsController.getTrends);
router.get('/export', authenticate, authorize('admin'), analyticsController.exportData);
router.post('/generate-report', authenticate, authorize('admin'), analyticsController.generateReport);

module.exports = router;
