// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')
// 获取数据库内部的数据
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
    
  } catch (err) {
    res.status(500).json(
      {
        error: '服务器错误',
        detail:err.message
      }
    )
  }
});
// POST /api/products - 添加一个新产品
router.post('/', async (req, res) => {
  try {
    const { id, url, title, price, type } = req.body;
    const product = new Product({ id, url, title, price, type });
    await product.save();
    res.status(201).json({ message: '产品创建成功', product });
  } catch (err) {
    res.status(400).json({ error: '创建失败', detail: err.message });
  }
});

// DELETE /api/products/:id - 根据 ID 删除产品
router.delete('/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: '产品已删除' });
    } else {
      res.status(404).json({ error: '找不到产品' });
    }
  } catch (err) {
    res.status(500).json({ error: '删除失败', detail: err.message });
  }
});
module.exports = router;
