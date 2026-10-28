import type { DocItem } from "../../types/doc";

export const layoutData: DocItem[] = [
  // ================= 基础与经典 =================
  {
    id: "flex",
    name: "Flexbox 布局",
    category: "Layout",
    description: "最经典的一维布局模型，用于在行或列中分配空间和对齐元素。",
    htmlCode: `
<div class="flex-box">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
    `,
    cssCode: `
.flex-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 160px;
  background: #f0f0f0;
  border-radius: 12px;
}

.flex-box > div {
  width: 70px;
  height: 70px;
  background: #3b82f6;
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
.flex-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  
  > div {
    width: 70px;
    height: 70px;
    border-radius: 12px;
  }
}
    `,
  },
  {
    id: "grid",
    name: "Grid 网格布局",
    category: "Layout",
    description: "二维布局利器，适用于将页面划分为行和列的网格结构。",
    htmlCode: `
<div class="grid-box">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
    `,
    cssCode: `
.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  background: #e6f4ff;
  border-radius: 12px;
}

.grid-box > div {
  padding: 32px;
  background: #1677ff;
  color: white;
  text-align: center;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}
    `,
    scssCode: `
.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  > div {
    padding: 32px;
    color: white;
  }
}
    `,
  },
  {
    id: "margin-auto-center",
    name: "Margin Auto 水平居中",
    category: "Layout",
    description:
      "最常见的块级元素水平居中方式。必须给元素设定宽度，否则它会占满整行。",
    htmlCode: `<div class="center-block">I am centered</div>`,
    cssCode: `
.center-block {
  width: 260px;
  height: 80px;
  margin: 0 auto;
  background: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
}
    `,
    scssCode: `
.center-block {
  width: 260px;
  margin: 0 auto;
}
    `,
  },
  {
    id: "absolute-center",
    name: "绝对定位居中",
    category: "Layout",
    description:
      "利用 `position: absolute` 配合 `transform`，实现未知宽高元素的完美居中。",
    htmlCode: `
<div class="parent-box">
  <div class="child-center">Centered</div>
</div>
    `,
    cssCode: `
.parent-box {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 200px;
  background: #e0e7ff;
  border-radius: 12px;
}

.child-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4f46e5;
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
}
    `,
    scssCode: `
.parent-box {
  position: relative;
  
  .child-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
    `,
  },

  // ================= Flex 进阶 =================
  {
    id: "flex-wrap",
    name: "Flex 弹性换行",
    category: "Layout",
    description:
      "默认情况下 Flex 元素会挤在一行。使用 `flex-wrap: wrap` 可以在空间不足时自动折行。",
    htmlCode: `
<div class="wrap-box">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
    `,
    cssCode: `
.wrap-box {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background: #fdf2f8;
  border-radius: 12px;
}

.wrap-box > div {
  width: 90px;
  height: 50px;
  background: #ec4899;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
}
    `,
    scssCode: `
.wrap-box {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  
  > div {
    width: 90px;
    height: 50px;
  }
}
    `,
  },
  {
    id: "flex-grow",
    name: "Flex Grow 占据剩余空间",
    category: "Layout",
    description:
      "让指定的子元素自动拉伸，占满父容器剩余的所有空间（常用于左右布局，右侧自适应）。",
    htmlCode: `
<div class="grow-box">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content (flex: 1)</div>
</div>
    `,
    cssCode: `
.grow-box {
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
}

.sidebar {
  width: 120px;
  background: #475569;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.main {
  flex: 1;
  background: #94a3b8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}
    `,
    scssCode: `
.grow-box {
  display: flex;
  
  .sidebar {
    width: 120px;
  }
  
  .main {
    flex: 1;
  }
}
    `,
  },

  // ================= Grid 进阶 =================
  {
    id: "grid-areas",
    name: "Grid Area 区域命名 (圣杯布局)",
    category: "Layout",
    description: "通过给网格命名，可以像拼图一样直观地定义布局。",
    htmlCode: `
<div class="layout">
  <header>Header</header>
  <aside>Aside</aside>
  <main>Main</main>
  <footer>Footer</footer>
</div>
    `,
    cssCode: `
.layout {
  display: grid;
  grid-template-areas: 
    "header header" 
    "aside main" 
    "footer footer";
  grid-template-columns: 120px 1fr;
  grid-template-rows: 60px 160px 50px;
  width: 100%;
  max-width: 500px;
  
  gap: 10px;
  background: #f4f4f5;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.layout > * {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

header { grid-area: header; background: #3b82f6; }
aside { grid-area: aside; background: #8b5cf6; }
main { grid-area: main; background: #10b981; }
footer { grid-area: footer; background: #f59e0b; }
    `,
    scssCode: `
.layout {
  display: grid;
  grid-template-areas: 
    "header header" 
    "aside main" 
    "footer footer";
  grid-template-columns: 120px 1fr;
  grid-template-rows: 60px 160px 50px;
  gap: 10px;
  
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
  }
}
    `,
  },
  {
    id: "grid-auto-flow",
    name: "Grid 自动排列与密排",
    category: "Layout",
    description:
      "当网格项目大小不一时，使用 `grid-auto-flow: dense` 可以自动填补网格中的空白区域。",
    htmlCode: `
<div class="dense-grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item span-2">3 (Span 2)</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
    `,
    cssCode: `
.dense-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
}

.item {
  background: #64748b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
}

.span-2 {
  grid-column: span 2;
  background: #3b82f6;
}
    `,
    scssCode: `
.dense-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  
  .span-2 {
    grid-column: span 2;
  }
}
    `,
  },

  // ================= 定位与层叠 =================
  {
    id: "position-fixed",
    name: "Fixed 固定定位",
    category: "Layout",
    description:
      "相对于浏览器视口进行定位。无论怎么滚动页面，它都会固定在那里。",
    htmlCode: `<div class="fixed-btn">Fixed</div>`,
    cssCode: `
.fixed-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 80px;
  height: 80px;
  background: #8b5cf6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
  z-index: 100;
  font-weight: bold;
}
    `,
    scssCode: `
.fixed-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
}
    `,
  },
  {
    id: "position-sticky",
    name: "Sticky 粘性定位",
    category: "Layout",
    description: "吸顶导航必备。在跨越特定阈值前为相对定位，之后为固定定位。",
    htmlCode: `
<div class="scroll-box">
  <div class="header">吸顶 Header</div>
  <div class="content">
    向下滚动我看看...<br/><br/>1<br/><br/>2<br/><br/>3<br/><br/>4<br/><br/>5<br/><br/>6<br/><br/>7<br/><br/>8
  </div>
</div>
    `,
    cssCode: `
.scroll-box {
  height: 240px;
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  background: #f0f0f0;
  border-radius: 12px;
}

.header {
  position: sticky;
  top: 0;
  background: #3b82f6;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.content {
  padding: 24px;
  text-align: center;
  color: #555;
  font-size: 16px;
}
    `,
    scssCode: `
.scroll-box {
  height: 240px;
  overflow-y: auto;
  
  .header {
    position: sticky;
    top: 0;
    background: #3b82f6;
  }
}
    `,
  },
  {
    id: "z-index",
    name: "Z-index 层叠顺序",
    category: "Layout",
    description:
      "控制重叠元素的堆叠顺序。数字越大的越靠上，前提是元素必须有 `position` 属性。",
    htmlCode: `
<div class="z-box">
  <div class="box b1">z-index: 1</div>
  <div class="box b2">z-index: 3</div>
  <div class="box b3">z-index: 2</div>
</div>
    `,
    cssCode: `
.z-box {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 200px;
  background: #f8fafc;
  border-radius: 12px;
}

.box {
  position: absolute;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  opacity: 0.9;
  font-weight: bold;
}

.b1 { background: #ef4444; top: 20px; left: 20px; z-index: 1; }
.b2 { background: #3b82f6; top: 40px; left: 80px; z-index: 3; }
.b3 { background: #10b981; top: 60px; left: 140px; z-index: 2; }
    `,
    scssCode: `
.box {
  position: absolute;
  
  &.b1 { z-index: 1; }
  &.b2 { z-index: 3; }
  &.b3 { z-index: 2; }
}
    `,
  },
  {
    id: "inset",
    name: "Inset 定位简写",
    category: "Layout",
    description:
      "`top`、`right`、`bottom`、`left` 的简写。常用于制作铺满父容器的半透明遮罩层。",
    htmlCode: `
<div class="relative-box">
  <div class="overlay">Inset: 0 遮罩</div>
</div>
    `,
    cssCode: `
.relative-box {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 200px;
  background: url('https://picsum.photos/600/300') center/cover;
  border-radius: 12px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}
    `,
    scssCode: `
.overlay {
  position: absolute;
  inset: 0;
}
    `,
  },

  // ================= 盒模型与尺寸 =================
  {
    id: "box-sizing",
    name: "Box-sizing 盒模型",
    category: "Layout",
    description:
      "`content-box`（默认）宽度不包含 padding 和 border；`border-box` 宽度包含了它们。",
    htmlCode: `
<div class="box-demo content-box">content-box</div>
<div class="box-demo border-box">border-box</div>
    `,
    cssCode: `
.box-demo {
  width: 200px;
  height: 70px;
  padding: 20px;
  border: 10px solid #333;
  margin-bottom: 20px;
  font-size: 16px;
  color: white;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-box {
  box-sizing: content-box;
  background: #ef4444;
}

.border-box {
  box-sizing: border-box;
  background: #10b981;
}
    `,
    scssCode: `
/* 现代开发通常加上这段 */
*, *::before, *::after {
  box-sizing: border-box;
}
    `,
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio 锁定宽高比",
    category: "Layout",
    description:
      "在响应式开发中，用于固定图片、视频或卡片的长宽比（如 16:9），防止布局抖动。",
    htmlCode: `<div class="video-box">16 : 9 比例</div>`,
    cssCode: `
.video-box {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(45deg, #10b981, #3b82f6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 24px;
}
    `,
    scssCode: `
.video-box {
  width: 100%;
  aspect-ratio: 16 / 9;
}
    `,
  },

  // ================= 隐藏与溢出 =================
  {
    id: "display-none",
    name: "Display None (不占位隐藏)",
    category: "Layout",
    description: "元素从渲染树中消失，不占据任何空间。它下面的元素会顶上来。",
    htmlCode: `
<div class="box">上方盒子</div>
<div class="hidden-box">我被 display: none 隐藏了</div>
<div class="box">下方盒子</div>
    `,
    cssCode: `
.box {
  width: 280px;
  height: 50px;
  background: #3b82f6;
  color: white;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
}

.hidden-box {
  display: none;
  height: 80px;
  background: #ef4444;
  color: white;
  text-align: center;
}
    `,
    scssCode: `
.hidden-box {
  display: none;
}
    `,
  },
  {
    id: "visibility-hidden",
    name: "Visibility Hidden (占位隐藏)",
    category: "Layout",
    description: "元素不可见，但依然占据着原本的空间，就像变成透明了一样。",
    htmlCode: `
<div class="box">上方盒子</div>
<div class="hidden-box">我被 visibility: hidden 隐藏了</div>
<div class="box">下方盒子</div>
    `,
    cssCode: `
.box {
  width: 280px;
  height: 50px;
  background: #3b82f6;
  color: white;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
}

.hidden-box {
  visibility: hidden;
  height: 80px;
  background: #ef4444;
  color: white;
  text-align: center;
}
    `,
    scssCode: `
.hidden-box {
  visibility: hidden;
}
    `,
  },
  {
    id: "overflow",
    name: "Overflow 溢出控制",
    category: "Layout",
    description:
      "当内容超出容器大小时，如何进行处理。常见值：`visible` (默认), `hidden`, `scroll`, `auto`。",
    htmlCode: `<div class="overflow-box">超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本</div>`,
    cssCode: `
.overflow-box {
  width: 320px;
  height: 100px;
  overflow: auto;
  background: #f0f0f0;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  color: #333;
}
    `,
    scssCode: `
.overflow-box {
  width: 320px;
  height: 100px;
  overflow: auto;
}
    `,
  },
  {
    id: "multi-column",
    name: "多列文本布局",
    category: "Layout",
    description: "像报纸排版一样，将长文本自动切分为多列。",
    htmlCode: `<div class="news-text">春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明！江流宛转绕芳甸，月照花林皆似霰。空里流霜不觉飞，汀上白沙看不见。</div>`,
    cssCode: `
.news-text {
  column-count: 2;
  column-gap: 32px;
  column-rule: 1px dashed #ccc;
  padding: 24px;
  font-size: 16px;
  line-height: 2;
  color: #555;
  background: #fafafa;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
}
    `,
    scssCode: `
.news-text {
  column-count: 2;
  column-gap: 32px;
  column-rule: 1px dashed #ccc;
}
    `,
  },
  {
    id: "scroll-snap",
    name: "Scroll Snap 滚动捕捉",
    category: "Layout",
    description: "无需 JS，实现丝滑的横向整页滑动效果。",
    htmlCode: `
<div class="snap-box">
  <div class="snap-item">1</div>
  <div class="snap-item">2</div>
  <div class="snap-item">3</div>
</div>
    `,
    cssCode: `
.snap-box {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding-bottom: 16px;
  width: 100%;
  max-width: 500px;
}

.snap-item {
  flex: 0 0 85%;
  height: 200px;
  background: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  scroll-snap-align: center;
  font-size: 36px;
  font-weight: bold;
}
    `,
    scssCode: `
.snap-box {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  .snap-item {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }
}
    `,
  },
];
