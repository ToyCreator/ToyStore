import React, { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayOut";
import AdminLayout from "../layouts/AdminLayout";
import AdminRoute from "../components/AdminRoute/AdminRoute";

// 懒加载页面
const Home = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Catalog = lazy(() => import("../pages/catalog/Catalog"));
const ProductDetail = lazy(() => import("../components/ProductDetail/ProductDetail"));

// 后台管理页面
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const Products = lazy(() => import("../pages/admin/Products"));
const Users = lazy(() => import("../pages/admin/Users"));
const AdminLogin = lazy(() => import("../pages/admin/Login"));

const routerList = [
  // 默认重定向
  {
    path: '/',
    // browserrouter的写法
    // element: <Navigate to="/home" />,
    // hashrouter的写法
    element: <Navigate to="home" replace />,// ✅ 改为相对路径并使用 replace
  },

  // 前台页面
  {
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "product/:name", element: <ProductDetail /> },
    ],
  },

  // 后台管理页面
  {
    path: "/admin",
    children: [
      // 未登录状态可访问 login
      { path: "login", element: <AdminLogin /> },

      // 登录后访问的受保护页面
      {
        element: (
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        ),
        children: [
          { index: true, element: <Navigate to="products" /> },
          // { path: "dashboard", element: <Dashboard /> },
          { path: "products", element: <Products /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
  },

  // 404 页面
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routerList;
