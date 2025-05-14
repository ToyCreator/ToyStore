

import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    price: '',
    url: '',
    type: 'wooden-toy',
  });
  const [editingId, setEditingId] = useState(null);

  // 获取所有商品
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5001/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 添加或更新商品
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: `$ ${form.price}USD`, // 确保两位小数
    };

    if (editingId) {
      await fetch(`http://localhost:5001/api/products/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setEditingId(null);
    } else {
      await fetch('http://localhost:5001/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    setForm({ title: '', price: '', url: '', type: 'wooden-toy' });
    fetchProducts();
  };

  // 编辑商品
  const handleEdit = (product) => {
    const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
    setEditingId(product._id);
    setForm({
      title: product.title,
      price: numericPrice,
      url: product.url,
      type: product.type,
    });
  };

  // 删除商品
  const handleDelete = async (id) => {
    if (window.confirm('确认删除该商品？')) {
      await fetch(`http://localhost:5001/api/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">商品管理</h3>

      <Form onSubmit={handleSubmit} className="mb-5">
        <Form.Group className="mb-3">
          <Form.Label>商品名称:</Form.Label>
          <Form.Control
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>商品价格:</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>商品链接:</Form.Label>
          <Form.Control
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>商品类型:</Form.Label>
          <Form.Select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="wooden-toy">wooden-toy</option>
            <option value="stuffed-animal">stuffed-animal</option>
            <option value="related-product">related-product</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success">
          {editingId ? '更新商品' : '添加商品'}
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>类型</th>
            <th>链接</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td>{prod.type}</td>
              <td>
                <a href={prod.url} target="_blank" rel="noopener noreferrer">查看</a>
              </td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(prod)}
                >
                  编辑
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(prod._id)}
                >
                  删除
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Products;