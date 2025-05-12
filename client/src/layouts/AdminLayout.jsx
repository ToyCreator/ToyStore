// layouts/AdminLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
        <h2>后台管理</h2>
        <nav>
          <NavLink to="/admin/dashboard">仪表盘</NavLink><br />
          <NavLink to="/admin/products">商品管理</NavLink><br />
          <NavLink to="/admin/users">用户管理</NavLink><br />
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
