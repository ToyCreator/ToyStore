import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     const res = await fetch('/api/admin/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (!res.ok) {
  //       throw new Error('登录失败');
  //     }

  //     const data = await res.json();
  //     localStorage.setItem('adminToken', data.token);
  //     navigate('/admin/dashboard');
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };


  // 模拟登录成功
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin/dashboard";
  const handleLogin = () => {
    // 模拟登录
    localStorage.setItem("token", "fake-jwt-token");
    navigate(from, { replace: true });
  };


  return (
    <div style={{ padding: 40 }}>
      <h2>后台登录</h2>
      <input
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default AdminLogin;
