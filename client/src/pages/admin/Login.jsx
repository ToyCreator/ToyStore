import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5001/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        alert(data.message || '登录失败');
      }
    } catch (error) {
      alert('服务器连接失败');
      console.error('登录错误', error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>管理员登录</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-3" placeholder="用户名" value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control mb-3" type="password" placeholder="密码" value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary w-100">登录</button>
      </form>
    </div>
  );
};

export default AdminLogin;
