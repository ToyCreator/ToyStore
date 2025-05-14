const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true }, // 存字符串格式，如 "19.99"
  url: { type: String, required: true },
  type: {
    type: String,
    enum: ['wooden-toy', 'stuffed-animal', 'related-product'],
    required: true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
