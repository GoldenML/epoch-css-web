import { Typography, Row, Col } from "antd";
import { useThemeStore } from "../store/useThemeStore";
import { theme } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function Welcome() {
  const { isDark } = useThemeStore();
  const { token } = theme.useToken();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
      }}
    >
      {/* 大标题带渐变 */}
      <Title
        level={1}
        style={{
          fontSize: "64px",
          margin: 0,
          background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #2dd4bf)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: 900,
          letterSpacing: "-2px",
        }}
      >
        EPOCH CSS / SCSS
      </Title>

      <Paragraph
        style={{
          fontSize: "20px",
          color: token.colorTextSecondary,
          marginTop: "24px",
          maxWidth: "600px",
        }}
      >
        探索前端样式的边界。这里收录了最实用的 CSS 布局技巧、动画效果以及 SCSS
        高级用法。
      </Paragraph>

      {/* 快捷入口卡片 */}
      <Row
        gutter={[24, 24]}
        style={{ marginTop: "48px", width: "100%", maxWidth: "800px" }}
      >
        {[
          { title: "Flexbox 布局", desc: "一维布局的绝对王者", id: "flex" },
          {
            title: "霓虹渐变文字",
            desc: "让文字炸裂的视觉效果",
            id: "text-gradient",
          },
          {
            title: "毛玻璃特效",
            desc: "极致现代感的 UI 风格",
            id: "backdrop-filter",
          },
        ].map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Link to={`/doc/${item.id}`}>
              <div
                style={{
                  background: isDark
                    ? "rgba(30, 30, 30, 0.6)"
                    : "rgba(255, 255, 255, 0.8)",
                  border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <Title level={4} style={{ margin: 0, color: token.colorText }}>
                  {item.title}
                </Title>
                <Paragraph
                  style={{
                    margin: "8px 0 0",
                    color: token.colorTextSecondary,
                    fontSize: "14px",
                  }}
                >
                  {item.desc}
                </Paragraph>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
