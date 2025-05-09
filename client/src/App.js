import React from "react";
// import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/index";
import { HashRouter } from 'react-router-dom';
// 从 BrowserRouter 改为 HashRouter。
// GitHub Pages 服务器只看 index.html，不会管 #/home，由前端解析路径，
function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
