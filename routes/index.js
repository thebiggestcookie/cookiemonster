const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const productRoutes = require('./product');
const attributeRoutes = require('./attribute');
const promptRoutes = require('./prompt');
const analyticsRoutes = require('./analytics');
const adminRoutes = require('./admin');

router.use('/auth', authRoutes);
router.use('/product', productRoutes);
router.use('/attribute', attributeRoutes);
router.use('/prompt', promptRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/admin', adminRoutes);

// Default route for API
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the LLM Product Categorizer API' });
});

module.exports = router;

