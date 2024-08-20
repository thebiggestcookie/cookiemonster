const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Attribute Management Page' });
});

module.exports = router;

