import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>加载中...</div>}>{element}</Suspense>;
};

export default AppRoutes;
