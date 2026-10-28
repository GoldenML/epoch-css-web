import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import router from "./router";
import zhCN from "antd/locale/zh_CN";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

export default function App() {
  const { isDark } = useThemeStore();

  // 动态给 body 加上或移除 'dark' 类名，驱动 CSS 变量
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#8b5cf6",
          borderRadius: 8,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
