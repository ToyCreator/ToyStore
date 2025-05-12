import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  // 路由守卫
  const isAuthenticated = !!localStorage.getItem("token"); // 判断是否登录
  const location = useLocation();

  if (!isAuthenticated) {
    // 未登录跳转到登录页，并保留原始路径
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
