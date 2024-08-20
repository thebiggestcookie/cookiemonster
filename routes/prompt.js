const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Prompt Management Page' });
});

module.exports = router;

