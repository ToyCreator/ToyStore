// src/components/AdminRoute/AdminRoute.jsx
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("adminToken"); // 判断是否已登录
  return isAuth ? children : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;
