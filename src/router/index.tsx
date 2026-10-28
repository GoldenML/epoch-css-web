import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Welcome from "@pages/Welcome";
import DocDetail from "@pages/DocDetail";
import NotFound from "@pages/NotFound";

export const HOME_PATHNAME = "/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // 根路由使用 MainLayout
    children: [
      {
        index: true, // 默认子路由，访问 "/" 时渲染
        element: <Welcome />,
      },
      {
        path: "doc/:id", // 访问 "/doc/flex" 时渲染
        element: <DocDetail />,
      },
    ],
  },
  {
    // 全局 404 路由：当访问任何不匹配的路径时展示
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
