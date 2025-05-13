const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String,
  url: String,
  title: String,
  price: String,
  type: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
