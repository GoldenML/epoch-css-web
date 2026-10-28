import type { DocItem } from "../../types/doc";

export const modernData: DocItem[] = [
  // ================= 布局与响应式 =================
  {
    id: "css-nesting",
    name: "CSS 原生嵌套 (Nesting)",
    category: "Modern",
    description:
      "不需要 Sass/Less 了！现代 CSS 原生支持嵌套。你可以直接在父选择器里写子选择器，并且用 `&` 代表父级。",
    htmlCode: `
<div class="native-nest">
  <button class="btn">Hover Me</button>
</div>
    `,
    cssCode: `
.native-nest {
  padding: 40px;
  text-align: center;
  background: #f8fafc;
  border-radius: 12px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  .btn {
    background: #3b82f6;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    /* 原生嵌套用 & 代表父级 */
    &:hover {
      background: #2563eb;
      transform: scale(1.05);
    }
  }
}
    `,
    scssCode: `
/* 现代原生 CSS 和 SCSS 语法几乎一致 */
.native-nest {
  .btn {
    &:hover { ... }
  }
}
    `,
  },
  {
    id: "container-queries",
    name: "Container Queries 容器查询",
    category: "Modern",
    description:
      "响应式设计的未来！用 `@container` 根据父容器大小适配组件（极其适合做可复用的卡片）。",
    htmlCode: `
<div class="resize-wrapper">
  <div class="card-container">
    <div class="card">
      <div class="icon" style="font-size: 24px;">✨</div>
      <div class="text">我是一个响应卡片</div>
    </div>
  </div>
  <p style="font-size: 12px; text-align: center; color: #666; margin-top:16px;">↔️ 拖动右下角改变容器宽度</p>
</div>
    `,
    cssCode: `
.resize-wrapper {
  resize: horizontal;
  overflow: auto;
  border: 2px dashed #ccc;
  padding: 16px;
  max-width: 100%;
  min-width: 200px;
  border-radius: 12px;
  background: #fafafa;
}

.card-container {
  container-type: inline-size;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #8b5cf6;
  color: white;
  padding: 24px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
}

/* 当父容器宽度大于 350px 时触发 */
@container (min-width: 350px) {
  .card {
    flex-direction: row;
    justify-content: center;
    background: #3b82f6;
  }
}
    `,
    scssCode: `
.card-container {
  container-type: inline-size;
}

@container (min-width: 350px) {
  .card {
    flex-direction: row;
  }
}
    `,
  },
  {
    id: "dvh-svh",
    name: "现代视口单位 (dvh/svh)",
    category: "Modern",
    description:
      "在移动端，`100vh` 会包含浏览器的地址栏。`dvh`（动态视口高度）完美解决了移动端全屏布局的痛点。",
    htmlCode: `<div class="dvh-box">高度自适应视口</div>`,
    cssCode: `
.dvh-box {
  width: 100%;
  max-width: 400px;
  height: 200px; /* 在 iframe 中演示用固定高度替代 100dvh */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 12px;
}
    `,
    scssCode: `
.dvh-box {
  height: 100dvh;
}
    `,
  },

  // ================= 样式控制与优先级 =================
  {
    id: "css-variables",
    name: "CSS 原生变量 (var)",
    category: "Modern",
    description:
      "CSS 原生变量可以被 JavaScript 动态修改，是实现“暗黑模式”或主题切换的核心。",
    htmlCode: `<div class="var-box">Dynamic Theme</div>`,
    cssCode: `
:root {
  --brand-color: #3b82f6;
}

.var-box {
  width: 200px;
  height: 120px;
  margin: 30px auto;
  background: var(--brand-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 16px;
  transition: background 0.3s;
  cursor: pointer;
}

.var-box:hover {
  /* 覆盖变量 */
  --brand-color: #ec4899;
}
    `,
    scssCode: `
:root {
  --brand-color: #3b82f6;
}

.var-box {
  background: var(--brand-color);
  
  &:hover {
    --brand-color: #ec4899;
  }
}
    `,
  },
  {
    id: "has-selector",
    name: ":has() 父级关系选择器",
    category: "Modern",
    description:
      "CSS 界的“大杀器”。它可以选中“包含某个特定子元素”的父元素，实现纯 CSS 的状态管理。",
    htmlCode: `
<div class="has-box">
  <input type="checkbox" style="transform: scale(1.5);" /> <span style="margin-left:12px;">勾选改变父级背景</span>
</div>
    `,
    cssCode: `
.has-box {
  padding: 24px 30px;
  border: 2px solid #ddd;
  border-radius: 12px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  max-width: 350px;
  margin: 40px auto;
  cursor: pointer;
}

/* 当内部包含被选中的 input 时，改变自身背景 */
.has-box:has(input:checked) {
  background: #dcfce7;
  border-color: #22c55e;
  color: #166534;
}
    `,
    scssCode: `
.has-box {
  &:has(input:checked) {
    background: #dcfce7;
  }
}
    `,
  },
  {
    id: "cascade-layers",
    name: "@layer 级联层",
    category: "Modern",
    description:
      "解决 CSS 优先级冲突的神器。把样式分到不同的层，层的顺序决定优先级，彻底告别 `!important`。",
    htmlCode: `<div class="layer-demo">文字颜色由高优先级层决定</div>`,
    cssCode: `
/* 声明层的优先级顺序，后面的层优先级更高 */
@layer base, components;

@layer components {
  .layer-demo {
    color: white;
    background: #3b82f6;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
}

@layer base {
  .layer-demo {
    color: red;
    background: #f0f0f0;
    padding: 30px;
  }
}
    `,
    scssCode: `
@layer base, components;

@layer components {
  .layer-demo { ... }
}

@layer base {
  .layer-demo { ... }
}
    `,
  },
  {
    id: "all-property",
    name: "all 属性一键重置",
    category: "Modern",
    description:
      "使用 `all: unset` 可以一键重置元素的所有 CSS 属性。在重写第三方组件库样式时极其好用。",
    htmlCode: `<div style="text-align:center;"><button class="reset-btn">被强重置的按钮</button></div>`,
    cssCode: `
.reset-btn {
  /* 强制重置所有属性，去掉浏览器默认样式 */
  all: unset;
  
  background: #10b981;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: background 0.3s;
}

.reset-btn:hover {
  background: #059669;
}
    `,
    scssCode: `
.reset-btn {
  all: unset;
}
    `,
  },

  // ================= 颜色与逻辑属性 =================
  {
    id: "color-mix",
    name: "color-mix() 原生颜色混合",
    category: "Modern",
    description:
      "不需要 Sass 函数，CSS 原生支持混合颜色。快速生成一个颜色的变亮、变暗或半透明版本。",
    htmlCode: `<div class="color-mix-box">原生颜色混合</div>`,
    cssCode: `
.color-mix-box {
  /* 混合蓝色和白色，各占 50% */
  background: color-mix(in srgb, #3b82f6 50%, white);
  color: #1e3a8a;
  padding: 30px;
  text-align: center;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #3b82f6;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
}
    `,
    scssCode: `
.color-mix-box {
  background: color-mix(in srgb, #3b82f6 50%, white);
}
    `,
  },
  {
    id: "logical-properties",
    name: "逻辑属性 (Logical Properties)",
    category: "Modern",
    description:
      "以前写 `margin-left`，从右到左排版时会出错。改用 `margin-inline-start`，会自动根据排版方向适配。",
    htmlCode: `<div class="logical-box">逻辑属性 margin-inline</div>`,
    cssCode: `
.logical-box {
  width: 240px;
  padding: 24px;
  background: #f59e0b;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  
  /* 左右居中，取代 margin-left/right: auto */
  margin-inline: auto;
  margin-block: 40px;
}
    `,
    scssCode: `
.logical-box {
  margin-inline: auto;
}
    `,
  },
  {
    id: "starting-style",
    name: "@starting-style 入场动画",
    category: "Modern",
    description:
      "以前用 CSS 做元素从无到有的过渡（比如弹窗）很难。`@starting-style` 可以定义元素的“初始状态”，让入场动画极丝滑。",
    htmlCode: `
<details class="start-details">
  <summary style="cursor:pointer; font-weight:bold; font-size:16px;">点我展开/收起</summary>
  <p class="content">这是一段弹出的内容。</p>
</details>
    `,
    cssCode: `
.start-details {
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 12px;
  width: 100%;
  max-width: 350px;
  margin: 30px auto;
}

.content {
  background: #8b5cf6;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  opacity: 0;
  transform: translateY(-15px);
  
  transition: 
    opacity 0.4s, 
    transform 0.4s, 
    display 0.4s allow-discrete;

  /* 关键：定义初始状态 */
  @starting-style {
    opacity: 0;
    transform: translateY(-15px);
  }
}

.start-details[open] .content {
  opacity: 1;
  transform: translateY(0);
}
    `,
    scssCode: `
.content {
  @starting-style {
    opacity: 0;
    transform: translateY(-15px);
  }
}
    `,
  },
];
