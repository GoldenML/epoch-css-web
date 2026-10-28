import type { DocItem } from "../../types/doc";

export const responsiveData: DocItem[] = [
  // ================= 布局与网格 =================
  {
    id: "auto-fit-grid",
    name: "Grid 智能自适应网格 (Auto-fit)",
    category: "Responsive",
    description:
      "极其经典的响应式代码。利用 `repeat(auto-fit, minmax(...))`，不需要媒体查询，卡片就会随容器宽度自动换行。",
    htmlCode: `
<div class="auto-grid">
  <div class="card">1</div><div class="card">2</div>
  <div class="card">3</div><div class="card">4</div>
  <div class="card">5</div>
</div>
    `,
    cssCode: `
.auto-grid {
  display: grid;
  
  /* 智能自适应核心 */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  
  gap: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
}

.card {
  background: #8b5cf6;
  color: white;
  padding: 30px 0;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 20px;
}
    `,
    scssCode: `
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
}
    `,
  },
  {
    id: "media-query",
    name: "媒体查询 Media Query",
    category: "Responsive",
    description: "响应式设计的基石。根据屏幕尺寸应用不同的样式。",
    htmlCode: `<div class="mq-box">缩小窗口试试</div>`,
    cssCode: `
.mq-box {
  width: 100%;
  max-width: 400px;
  height: 120px;
  margin: 0 auto;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s;
}

/* 当屏幕宽度小于 500px 时生效 */
@media (max-width: 500px) {
  .mq-box {
    background: #ef4444;
    font-size: 16px;
    border-radius: 0;
  }
}
    `,
    scssCode: `
.mq-box {
  background: #3b82f6;
  
  @media (max-width: 500px) {
    background: #ef4444;
  }
}
    `,
  },
  {
    id: "breakpoint-scss",
    name: "SCSS 封装媒体查询断点",
    category: "Responsive",
    description:
      "在 SCSS 中，利用 Map 和 Mixin 封装断点，让媒体查询代码极其优雅。",
    htmlCode: `<div class="responsive-card">响应式卡片</div>`,
    cssCode: `
/* 编译后的 CSS */
.responsive-card {
  padding: 20px;
  background: #ddd;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
}

@media (min-width: 768px) {
  .responsive-card {
    padding: 30px;
    background: #ccc;
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .responsive-card {
    padding: 40px;
    background: #bbb;
    max-width: 500px;
  }
}
    `,
    scssCode: `
$breakpoints: (
  "md": 768px,
  "lg": 1024px
);

@mixin respond-to($bp) {
  @media (min-width: map-get($breakpoints, $bp)) {
    @content;
  }
}

.responsive-card {
  padding: 20px;
  
  @include respond-to("md") {
    padding: 30px;
  }
}
    `,
  },

  // ================= 流体排版与尺寸 =================
  {
    id: "clamp-function",
    name: "Clamp 流体排版",
    category: "Responsive",
    description:
      "`clamp(最小值, 理想值, 最大值)`。让字体大小随屏幕宽度平滑缩放，彻底告别 JS 计算和媒体查询。",
    htmlCode: `<h2 class="fluid-title">响应式字体缩放</h2>`,
    cssCode: `
.fluid-title {
  /* 最小 24px，随屏幕放大，最大 48px */
  font-size: clamp(24px, 6vw, 48px);
  
  color: #8b5cf6;
  text-align: center;
  margin-top: 60px;
  font-weight: 900;
  transition: font-size 0.1s;
}
    `,
    scssCode: `
.fluid-title {
  font-size: clamp(24px, 6vw, 48px);
}
    `,
  },
  {
    id: "calc-function",
    name: "Calc 动态计算",
    category: "Responsive",
    description:
      "允许在 CSS 中进行加减乘除，并且可以混合不同的单位（如百分比和像素）。",
    htmlCode: `<div class="calc-box">Calc Box</div>`,
    cssCode: `
.calc-box {
  /* 宽度占满 100%，但减去左右各 30px 的间距 */
  width: calc(100% - 60px);
  
  margin: 40px auto;
  height: 120px;
  background: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
}
    `,
    scssCode: `
.calc-box {
  width: calc(100% - 60px);
}
    `,
  },
  {
    id: "vw-vh",
    name: "视口单位 (vw / vh)",
    category: "Responsive",
    description:
      "`vw` 是视口宽度的 1%，`vh` 是视口高度的 1%。常用于全屏背景或横向滚动条。",
    htmlCode: `<div class="viewport-box">50vw Width</div>`,
    cssCode: `
.viewport-box {
  width: 50vw;
  height: 120px;
  background: #f59e0b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 40px auto;
  font-size: 20px;
  font-weight: bold;
}
    `,
    scssCode: `
.viewport-box {
  width: 50vw;
}
    `,
  },

  // ================= 媒体元素适配 =================
  {
    id: "responsive-image",
    name: "响应式图片",
    category: "Responsive",
    description:
      "最基础的响应式图片写法，保证图片在容器内等比缩放，不会溢出或变形。",
    htmlCode: `<img class="resp-img" src="https://picsum.photos/800/400" />`,
    cssCode: `
.resp-img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
    `,
    scssCode: `
.resp-img {
  max-width: 100%;
  height: auto;
}
    `,
  },
  {
    id: "aspect-ratio",
    name: "Aspect-ratio 锁定宽高比",
    category: "Responsive",
    description:
      "固定元素的长宽比，防止图片或视频未加载时导致的布局抖动（CLS）。",
    htmlCode: `<div class="ratio-box">16:9 比例</div>`,
    cssCode: `
.ratio-box {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 40px auto;
  font-size: 24px;
  font-weight: bold;
}
    `,
    scssCode: `
.ratio-box {
  aspect-ratio: 16 / 9;
}
    `,
  },

  // ================= 设备与偏好检测 =================
  {
    id: "hover-pointer",
    name: "检测鼠标悬停能力",
    category: "Responsive",
    description:
      "在触屏手机和带鼠标的电脑上，交互体验不同。`(hover: hover)` 确保只在有鼠标的设备上执行悬浮效果。",
    htmlCode: `<button class="hover-detect-btn">鼠标悬停变色 (手机端点击不会变色)</button>`,
    cssCode: `
.hover-detect-btn {
  padding: 20px 40px;
  margin: 60px auto;
  display: block;
  background: #64748b;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

/* 只在支持悬停的设备上生效 */
@media (hover: hover) and (pointer: fine) {
  .hover-detect-btn:hover {
    background: #8b5cf6;
    transform: scale(1.05);
  }
}
    `,
    scssCode: `
@media (hover: hover) and (pointer: fine) {
  .hover-detect-btn:hover {
    background: #8b5cf6;
  }
}
    `,
  },
  {
    id: "prefers-color-scheme",
    name: "跟随系统暗黑模式",
    category: "Responsive",
    description:
      "通过 `prefers-color-scheme` 自动读取用户的系统偏好。如果用户电脑开了暗黑模式，网页可以自动变黑。",
    htmlCode: `<div class="auto-dark-box">根据系统偏好自动变色</div>`,
    cssCode: `
/* 默认亮色 */
.auto-dark-box {
  padding: 30px;
  text-align: center;
  border-radius: 12px;
  background: white;
  color: #333;
  border: 2px solid #ddd;
  width: 100%;
  max-width: 350px;
  margin: 40px auto;
  font-size: 18px;
  font-weight: bold;
}

/* 如果系统开启了深色模式 */
@media (prefers-color-scheme: dark) {
  .auto-dark-box {
    background: #1e1e1e;
    color: #fff;
    border-color: #444;
  }
}
    `,
    scssCode: `
@media (prefers-color-scheme: dark) {
  .auto-dark-box {
    background: #1e1e1e;
    color: #fff;
  }
}
    `,
  },
];
