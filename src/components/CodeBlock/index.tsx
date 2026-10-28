import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "css" }: CodeBlockProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    messageApi.success("代码已复制！");
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        width: "100%",
        minWidth: 0, // 防止撑破父容器
      }}
    >
      {contextHolder}

      {/* 模拟 macOS 窗口顶栏 */}
      <div
        style={{
          background: "#1e1e1e",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f56",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#27c93f",
            }}
          ></div>
        </div>
        <span
          style={{
            marginLeft: "16px",
            fontSize: "12px",
            color: "#888",
            fontFamily: "monospace",
          }}
        >
          {language.toUpperCase()}
        </span>
      </div>

      <Button
        type="text"
        size="small"
        icon={<CopyOutlined />}
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 10,
          right: 12,
          zIndex: 10,
          color: "#aaa",
        }}
      >
        复制
      </Button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={true}
        // 🌟 核心修复：移除 wrapLongLines，允许水平滚动
        customStyle={{
          margin: 0,
          padding: "20px",
          background: "#1e1e1e",
          fontSize: "14px",
          width: "100%",
          boxSizing: "border-box",
          overflowX: "auto", // 超长代码出现横向滚动条
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
