const Product = require('../models/productModel');

// 获取所有商品
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products)
    
  } catch (err) {
    res.status(500).json(
      {
        error: '服务器错误',
        detail:err.message
      }
    )
  }
}

// 添加商品
const createProduct = async (req, res) => {
  try {
    const { title, price, url, type } = req.body;

    if (!title || !price || !url || !type) {
      return res.status(400).json({ message: '所有字段均为必填' });
    }
  
    const newProduct = new Product({ title, price, url, type });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: '创建失败', detail: err.message });
  }
}

// 更新商品
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, url, type } = req.body;

  const product = await Product.findById(id);
  if (!product) return res.status(404).json({ message: '商品未找到' });

  product.title = title;
  product.price = price;
  product.url = url;
  product.type = type;

  const updated = await product.save();
  res.json(updated);
};

// 删除商品
const deleteProduct = async (req, res) => {
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
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
