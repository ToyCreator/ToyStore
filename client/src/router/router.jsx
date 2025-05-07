import React, { lazy, } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayOut";

// 懒加载页面
const Home = lazy(() => import("../pages/home/Home"));
// const Login = lazy(() => import("@/features/auth/pages/Login"));
// const Dashboard = lazy(() => import("@/pages/Dashboard"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Catalog = lazy(() => import("../pages/catalog/Catalog"));
const ProductDetail = lazy(() => import("../components/ProductDetail/ProductDetail"));

const routerList = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
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
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routerList;