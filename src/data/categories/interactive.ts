import type { DocItem } from "../../types/doc";

export const interactiveData: DocItem[] = [
  // ================= 表单与输入框 =================
  {
    id: "accent-color",
    name: "Accent-color 一键美化表单",
    category: "Interactive",
    description:
      "一行代码改变复选框（Checkbox）、单选框（Radio）和进度条的主题色，告别过去繁琐的自定义表单样式。",
    htmlCode: `
<div class="accent-box">
  <label><input type="checkbox" checked /> 记住密码</label>
  <label><input type="radio" name="r" checked /> 选项 A</label>
  <label><input type="range" value="60" /></label>
</div>
    `,
    cssCode: `
.accent-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background: #f8fafc;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
}

.accent-box input {
  accent-color: #8b5cf6;
  cursor: pointer;
  transform: scale(1.2);
}

.accent-box input[type="range"] {
  width: 100%;
}

.accent-box label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: bold;
}
    `,
    scssCode: `
input {
  accent-color: #8b5cf6;
}
    `,
  },
  {
    id: "focus-within",
    name: ":focus-within 父级焦点联动",
    category: "Interactive",
    description:
      "极其强大的交互伪类。当子元素（如 input）获得焦点时，可以修改父元素的样式，非常适合做搜索框的高亮。",
    htmlCode: `
<div class="search-wrapper">
  <span style="font-size: 20px;">🔍</span>
  <input type="text" placeholder="点我输入..." />
</div>
    `,
    cssCode: `
.search-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  transition: all 0.3s;
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
}

.search-wrapper input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  background: transparent;
}

/* 当内部 input 聚焦时，外层 wrapper 发生变化 */
.search-wrapper:focus-within {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 6px rgba(139, 92, 246, 0.15);
}
    `,
    scssCode: `
.search-wrapper {
  &:focus-within {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 6px rgba(139, 92, 246, 0.15);
  }
}
    `,
  },
  {
    id: "caret-color",
    name: "Caret-color 光标颜色",
    category: "Interactive",
    description:
      "修改输入框内闪烁光标的颜色。配合品牌色使用，能让输入体验显得极其精致。",
    htmlCode: `<input class="caret-input" type="text" value="看看我的光标颜色" />`,
    cssCode: `
.caret-input {
  width: 100%;
  max-width: 350px;
  padding: 16px;
  border: 2px solid #ddd;
  border-radius: 12px;
  outline: none;
  font-size: 18px;
  color: #333;
  display: block;
  margin: 40px auto;
  
  /* 修改光标颜色 */
  caret-color: #ef4444;
}
    `,
    scssCode: `
.caret-input {
  caret-color: #ef4444;
}
    `,
  },
  {
    id: "placeholder",
    name: "修改输入框占位符",
    category: "Interactive",
    description:
      "使用 `::placeholder` 伪元素，自定义 input 提示文字的颜色和字体。",
    htmlCode: `<input class="custom-input" placeholder="请输入你的名字..." />`,
    cssCode: `
.custom-input {
  width: 100%;
  max-width: 350px;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  display: block;
  margin: 40px auto;
  transition: border-color 0.3s;
}

.custom-input:focus {
  border-color: #8b5cf6;
}

.custom-input::placeholder {
  color: #94a3b8;
  font-style: italic;
}
    `,
    scssCode: `
.custom-input {
  &:focus {
    border-color: #8b5cf6;
  }
  
  &::placeholder {
    color: #94a3b8;
  }
}
    `,
  },

  // ================= 鼠标与点击反馈 =================
  {
    id: "pointer-events",
    name: "Pointer-events 鼠标穿透",
    category: "Interactive",
    description:
      "设置为 `none` 时，元素将忽略所有鼠标事件（点击、悬停等），事件会传递给下方的元素。常用于处理遮罩层或按钮禁用状态。",
    htmlCode: `
<div class="pointer-box">
  <button class="btn-disabled" onclick="alert('你点不到我')">禁用状态 (不能点)</button>
  <button class="btn-normal" onclick="alert('你点到了')">正常状态</button>
</div>
    `,
    cssCode: `
.pointer-box {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 60px;
}

button {
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-disabled {
  background: #cbd5e1;
  cursor: not-allowed;
  opacity: 0.7;
  
  /* 核心：鼠标事件穿透，彻底无法点击 */
  pointer-events: none;
}

.btn-normal {
  background: #3b82f6;
}
    `,
    scssCode: `
.btn-disabled {
  pointer-events: none;
  cursor: not-allowed;
}
    `,
  },
  {
    id: "active-scale",
    name: ":active 点击按压反馈",
    category: "Interactive",
    description:
      "使用 `:active` 伪类，在用户按住鼠标左键时缩小元素，松开恢复。这是移动端和现代 UI 极其常见的“按压感”。",
    htmlCode: `<button class="press-btn">按我试试</button>`,
    cssCode: `
.press-btn {
  display: block;
  margin: 60px auto;
  padding: 16px 32px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  
  transition: transform 0.1s;
}

.press-btn:active {
  transform: scale(0.90);
}
    `,
    scssCode: `
.press-btn {
  transition: transform 0.1s;
  
  &:active {
    transform: scale(0.90);
  }
}
    `,
  },
  {
    id: "custom-cursor",
    name: "自定义鼠标光标",
    category: "Interactive",
    description:
      "将鼠标指针替换为自定义图片或系统内置的其他指针样式，增加趣味性。",
    htmlCode: `<div class="cursor-box">Hover Me</div>`,
    cssCode: `
.cursor-box {
  width: 240px;
  height: 120px;
  margin: 40px auto;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  
  /* 十字准星光标 */
  cursor: crosshair;
}
    `,
    scssCode: `
.cursor-box {
  cursor: crosshair;
}
    `,
  },

  // ================= 文本与元素控制 =================
  {
    id: "user-select",
    name: "User-select 禁止文本选中",
    category: "Interactive",
    description:
      "防止用户划词选中文本。在实现拖拽组件、或者 UI 按钮文字时，为了防止出现蓝色的选中背景，极其有用。",
    htmlCode: `<div class="select-none-box">这段文字无法被鼠标选中复制，你可以试试。</div>`,
    cssCode: `
.select-none-box {
  padding: 30px;
  background: #fef2f2;
  color: #ef4444;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  max-width: 350px;
  margin: 40px auto;
  
  /* 核心属性 */
  user-select: none;
}
    `,
    scssCode: `
.select-none-box {
  user-select: none;
}
    `,
  },
  {
    id: "resize-control",
    name: "Resize 禁止调整文本框大小",
    category: "Interactive",
    description:
      "默认情况下 textarea 右下角有一个可以拖拽改变大小的角标，使用 `resize: none` 可以将其隐藏，保持 UI 整洁。",
    htmlCode: `<textarea class="no-resize" style="margin: 0 auto; display: block;">默认的右下角拖拽角标被我隐藏了，只能上下滚动。</textarea>`,
    cssCode: `
.no-resize {
  width: 100%;
  max-width: 350px;
  height: 120px;
  padding: 16px;
  border: 2px solid #ccc;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
  
  /* 禁止拖拽改变大小 */
  resize: none;
}
    `,
    scssCode: `
.no-resize {
  resize: none;
}
    `,
  },
  {
    id: "custom-scrollbar",
    name: "自定义滚动条",
    category: "Interactive",
    description:
      "使用 `::-webkit-scrollbar` 系列伪元素，可以将浏览器默认丑陋的滚动条改为极其精致的暗黑风格。",
    htmlCode: `
<div class="scroll-area">
  向下滚动...<br/><br/>1<br/><br/>2<br/><br/>3<br/><br/>4<br/><br/>5<br/><br/>6<br/><br/>7<br/><br/>8
</div>
    `,
    cssCode: `
.scroll-area {
  height: 200px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  overflow-y: auto;
  background: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 1.8;
}

/* 滚动条整体 */
.scroll-area::-webkit-scrollbar {
  width: 8px;
}

/* 滚动条轨道 */
.scroll-area::-webkit-scrollbar-track {
  background: #1e1e1e;
}

/* 滚动条滑块 */
.scroll-area::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

/* 滑块悬停状态 */
.scroll-area::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}
    `,
    scssCode: `
.scroll-area {
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #555;
    
    &:hover {
      background: #8b5cf6;
    }
  }
}
    `,
  },
];
