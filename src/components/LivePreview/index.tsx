interface LivePreviewProps {
  html: string;
  css: string;
}

export default function LivePreview({ html, css }: LivePreviewProps) {
  const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              margin: 0; 
              padding: 30px; /* 调整内边距，留有呼吸感但不拥挤 */
              font-family: -apple-system, sans-serif; 
              background-color: #fafafa;
              background-image: radial-gradient(#d1d5db 1px, transparent 1px);
              background-size: 20px 20px;
              
              /* 让内容在画布中垂直居中 */
              display: flex;
              flex-direction: column;
              align-items: center; 
              justify-content: center;
              min-height: 100vh;
              box-sizing: border-box;
              overflow-y: auto;
            }
            ${css}
          </style>
        </head>
        <body>${html}</body>
      </html>
    `;

  return (
    <iframe
      srcDoc={srcDoc}
      title="Live Preview"
      sandbox="allow-scripts"
      scrolling="yes"
      style={{
        width: "100%",
        height: "400px", // 🌟 高度从 320px 增加到 400px
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "12px",
        boxShadow: "inset 0 2px 10px rgba(0,0,0,0.03)",
        background: "#fafafa",
      }}
    />
  );
}
