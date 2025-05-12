// routes/productRoutes.js

const express = require('express');
const router = express.Router();

// 示例的产品路由
router.get('/', (req, res) => {
  res.send('Product Route');
});

module.exports = router;
