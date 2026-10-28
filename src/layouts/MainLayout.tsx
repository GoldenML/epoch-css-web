import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout, Menu, Typography, Input, Switch, theme } from "antd";
import { SearchOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { allCategories, docData } from "../data";
import { useSearchStore } from "../store/useSearchStore";
import { useThemeStore } from "../store/useThemeStore";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function MainLayout() {
  const { keyword, setKeyword } = useSearchStore();
  const { isDark, toggleTheme } = useThemeStore();
  const { token } = theme.useToken();
  const location = useLocation();

  // 菜单展开状态
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const selectedKey = location.pathname.split("/").pop() || "";

  // 当路由变化时，自动展开当前分类
  useEffect(() => {
    const currentDoc = docData.find((d) => d.id === selectedKey);
    if (currentDoc && !openKeys.includes(currentDoc.category)) {
      // 把 setState 放到 setTimeout 里，避免 React 同步渲染级联警告
      const timer = setTimeout(() => {
        setOpenKeys((prev) => [...prev, currentDoc.category]);
      }, 0);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // 过滤与菜单生成
  const filteredData = docData.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase()),
  );

  const menuItems = allCategories
    .map((category) => {
      const itemsInCategory = filteredData.filter(
        (d) => d.category === category,
      );
      if (itemsInCategory.length === 0) return null;

      return {
        key: category,
        label: category,
        children: itemsInCategory.map((item) => ({
          key: item.id,
          label: <Link to={`/doc/${item.id}`}>{item.name}</Link>,
        })),
      };
    })
    .filter(Boolean);

  const glassStyle = {
    background: isDark ? "rgba(20, 20, 20, 0.7)" : "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
  };

  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Header
        style={{
          ...glassStyle,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${glassStyle.borderColor}`,
          height: "64px",
          flexShrink: 0,
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
      >
        {/* 🌟 修复点：用 Link 包裹 Logo，点击即可返回首页 */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title
            level={4}
            style={{
              margin: 0,
              background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              cursor: "pointer",
            }}
          >
            EPOCH CSS / SCSS
          </Title>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Input
            placeholder="搜索属性..."
            prefix={<SearchOutlined style={{ color: "#8b5cf6" }} />}
            style={{
              width: 260,
              background: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.5)",
            }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            allowClear
          />
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            checked={isDark}
            onChange={toggleTheme}
            style={{ background: isDark ? "#8b5cf6" : "#d1d5db" }}
          />
        </div>
      </Header>

      {/* 下方内容区 */}
      <Layout
        style={{ flex: 1, overflow: "hidden", background: "transparent" }}
      >
        {/* Sider 侧边栏 */}
        <Sider
          width={250}
          theme={isDark ? "dark" : "light"}
          style={{
            ...glassStyle,
            borderRight: `1px solid ${glassStyle.borderColor}`,
            transition: "all 0.3s ease",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {menuItems.length > 0 ? (
            <Menu
              mode="inline"
              theme={isDark ? "dark" : "light"}
              openKeys={openKeys}
              onOpenChange={(keys) => setOpenKeys(keys)}
              selectedKeys={[selectedKey]}
              style={{
                height: "100%",
                borderRight: 0,
                background: "transparent",
              }}
              items={menuItems}
            />
          ) : (
            <div
              style={{
                padding: 20,
                textAlign: "center",
                color: token.colorTextSecondary,
              }}
            >
              没有找到相关属性
            </div>
          )}
        </Sider>

        {/* Content 右侧内容区 */}
        <Content
          style={{
            padding: "32px",
            height: "100%",
            overflowY: "auto",
            background: "transparent",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
