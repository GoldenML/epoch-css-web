import { useParams, Link } from "react-router-dom";
import { Typography, Result, theme } from "antd";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import LivePreview from "../components/LivePreview";
import { docData } from "../data";
import { useThemeStore } from "../store/useThemeStore";

const { Title } = Typography;

export default function DocDetail() {
  const { id } = useParams();
  const { isDark } = useThemeStore();
  const { token } = theme.useToken();
  const currentDoc = docData.find((item) => item.id === id);

  if (!currentDoc) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉，你访问的 CSS 属性不存在。"
        extra={<Link to="/">返回首页</Link>}
      />
    );
  }

  const glassCardStyle = {
    background: isDark ? "rgba(30, 30, 30, 0.6)" : "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"}`,
    padding: "40px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  };

  const markdownStyles = {
    p: {
      fontSize: "16px",
      color: token.colorTextSecondary,
      lineHeight: 1.8,
      marginBottom: "24px",
    },
    code: {
      background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
      padding: "2px 6px",
      borderRadius: "4px",
      fontFamily: "monospace",
      color: isDark ? "#e879f9" : "#c026d3",
    },
    strong: { color: token.colorText, fontWeight: 600 },
  };

  return (
    // 🌟 移除了 Row 和 Col，直接用一个全宽的 div，并限制最大宽度防止在大屏上太散
    <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
      <div style={{ ...glassCardStyle, color: token.colorText }}>
        <div style={{ marginBottom: "40px" }}>
          <Title level={1} style={{ marginTop: 0, fontWeight: 700 }}>
            {currentDoc.name}
          </Title>

          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p style={markdownStyles.p} {...props} />
              ),
              code: ({ node, ...props }) => (
                <code style={markdownStyles.code} {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong style={markdownStyles.strong} {...props} />
              ),
            }}
          >
            {currentDoc.description}
          </ReactMarkdown>
        </div>

        {/* 预览区 */}
        <div id="preview">
          <Title
            level={4}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 24,
                background: "linear-gradient(to bottom, #8b5cf6, #3b82f6)",
                borderRadius: 4,
              }}
            ></span>
            效果预览
          </Title>
          <div style={{ marginBottom: "40px" }}>
            <LivePreview
              html={currentDoc.htmlCode || ""}
              css={currentDoc.cssCode}
            />
          </div>
        </div>

        {/* 代码区 */}
        <div id="code">
          <Title
            level={4}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 24,
                background: "linear-gradient(to bottom, #3b82f6, #2dd4bf)",
                borderRadius: 4,
              }}
            ></span>
            代码实现
          </Title>

          {/* 这里依然保留 Row 和 Col，让 CSS 和 SCSS 左右并排，但在极宽屏幕下会更宽阔 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <Title
                level={5}
                style={{
                  color: token.colorTextSecondary,
                  marginBottom: "12px",
                }}
              >
                标准 CSS
              </Title>
              <CodeBlock code={currentDoc.cssCode} language="css" />
            </div>
            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <Title
                level={5}
                style={{
                  color: token.colorTextSecondary,
                  marginBottom: "12px",
                }}
              >
                SCSS
              </Title>
              <CodeBlock
                code={currentDoc.scssCode || "// 暂无 SCSS 示例"}
                language="scss"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
