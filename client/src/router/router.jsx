import React, { lazy, } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayOut";
import AdminLayout from "../layouts/AdminLayout";
import { Outlet } from "react-router-dom";
// 懒加载页面
const Home = lazy(() => import("../pages/home/Home"));
// const Login = lazy(() => import("@/features/auth/pages/Login"));
// const Dashboard = lazy(() => import("@/pages/Dashboard"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Catalog = lazy(() => import("../pages/catalog/Catalog"));
const ProductDetail = lazy(() => import("../components/ProductDetail/ProductDetail"));


// 后台管理页面
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const Products = lazy(() => import("../pages/admin/Products"));
const Users = lazy(() => import("../pages/admin/Users"));
const AdminRoute = lazy(() => import("../components/AdminRoute/AdminRoute"));
const AdminLogin = lazy(() => import("../pages/admin/Login"));


const routerList = [
  // 默认重定向
  {
    path: '/',
    element: <Navigate to="/home" />,

  },

  // 主站页面
  {
    element: <MainLayout />, // 带布局的页面
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
        // children: [
        //   {
        //     path: 'product/:name',
        //     element: <ProductDetail />,
        //   }
        // ]
      },
      {
        path: 'product/:name',
        element: <ProductDetail />,
      },

    ],
  },
  // 后台管理页面
  {
    path: "/admin",
    element: <Outlet />, // 承载子路由
    children: [
      // 未登录时，默认跳转到登录页
      { index: true, element: <Navigate to="login" /> },
      { path: "login", element: <AdminLogin /> },
      {
        element: (
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        ),
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "products", element: <Products /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routerList;