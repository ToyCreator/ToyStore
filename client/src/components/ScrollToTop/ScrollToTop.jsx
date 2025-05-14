import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 每次 pathname 改变时滚动到顶部
    window.scrollTo({ top: 0, behavior: "smooth" }); // 或 behavior: 'auto'
  }, [pathname]);

  return null; // 这个组件不渲染任何内容
};

export default ScrollToTop;
