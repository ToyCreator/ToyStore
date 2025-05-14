import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col, Alert, Modal } from 'react-bootstrap';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ username: '', password: '' });
  const [editForm, setEditForm] = useState({ _id: '', username: '', password: '' });
  const [showEditModal, setShowEditModal] = useState(false);
  const [message, setMessage] = useState('');
  const [currentAdminId, setCurrentAdminId] = useState(null);
  const token = localStorage.getItem('adminToken');

  const fetchAdmins = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/admin/list', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setAdmins(data);
    } catch (err) {
      console.error('获取管理员失败:', err);
    }
  };

  useEffect(() => {
    // 获取当前登录管理员信息
    fetch('http://localhost:5001/api/admin/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setCurrentAdminId(data._id));

    fetchAdmins();
  }, []);

  // 添加管理员
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5001/api/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ 管理员添加成功');
        setForm({ username: '', password: '' });
        fetchAdmins();
      } else {
        setMessage(`❌ 添加失败: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ 添加请求失败');
    }
  };

  // 删除管理员
  const handleDelete = async (id) => {
    if (!window.confirm('确定要删除该管理员？')) return;
    try {
      const res = await fetch(`http://localhost:5001/api/admin/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setMessage('✅ 删除成功');
        fetchAdmins();
      } else {
        setMessage('❌ 删除失败');
      }
    } catch (err) {
      console.error('删除失败:', err);
    }
  };

  // 显示编辑弹窗
  const handleEditClick = (admin) => {
    setEditForm({ _id: admin._id, username: admin.username, password: '' });
    setShowEditModal(true);
  };

  // 提交编辑
  const handleEditSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5001/api/admin/${editForm._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (res.ok) {
        setMessage('✅ 修改成功');
        setShowEditModal(false);
        fetchAdmins();
      } else {
        const data = await res.json();
        setMessage(`❌ 修改失败: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ 修改请求失败');
    }
  };

  return (
    <div>
      <h3 className="mb-4">管理员管理</h3>

      {message && <Alert variant="info">{message}</Alert>}

      <Form onSubmit={handleAddAdmin} className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="用户名"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="password"
              placeholder="密码"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </Col>
          <Col md={4}>
            <Button type="submit" variant="primary" className="w-100">
              添加管理员
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>序号</th>
            <th>用户名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={admin._id}>
              <td>{index + 1}</td>
              <td>{admin.username}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEditClick(admin)}
                >
                  编辑
                </Button>
                {/* 只有不是当前管理员，才显示删除按钮 */}
                {admin._id !== currentAdminId && (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(admin._id)}
                  >
                    删除
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 编辑弹窗 */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>编辑管理员</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>用户名</Form.Label>
              <Form.Control
                type="text"
                value={editForm.username}
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>密码（可留空）</Form.Label>
              <Form.Control
                type="password"
                placeholder="如需修改请输入新密码"
                value={editForm.password}
                onChange={(e) =>
                  setEditForm({ ...editForm, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            取消
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            保存修改
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminManagement;
