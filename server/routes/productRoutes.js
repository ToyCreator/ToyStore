// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// 可选添加管理员权限校验
// const { protectAdmin } = require('../middleware/authMiddleware');
// router.use(protectAdmin);

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
