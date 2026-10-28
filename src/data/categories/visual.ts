import type { DocItem } from "../../types/doc";

export const visualData: DocItem[] = [
  // ================= 渐变与背景 =================
  {
    id: "conic-gradient",
    name: "Conic 圆锥渐变",
    category: "Color",
    description: "围绕中心点旋转的渐变。非常适合制作饼图、加载动画或色轮。",
    htmlCode: `<div class="conic-box"></div>`,
    cssCode: `
.conic-box {
  width: 180px;
  height: 180px;
  margin: 20px auto;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  
  background: conic-gradient(
    #3b82f6 0% 40%, 
    #ef4444 40% 70%, 
    #10b981 70% 100%
  );
}
    `,
    scssCode: `
.conic-box {
  background: conic-gradient(
    #3b82f6 0% 40%, 
    #ef4444 40% 70%, 
    #10b981 70% 100%
  );
  border-radius: 50%;
}
    `,
  },
  {
    id: "radial-gradient",
    name: "Radial 径向渐变 (聚光灯)",
    category: "Color",
    description: "从中心向外辐射的渐变。常用于制作背景光晕或聚光灯效果。",
    htmlCode: `<div class="radial-box">Spotlight</div>`,
    cssCode: `
.radial-box {
  width: 100%;
  max-width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 16px;
  
  background: radial-gradient(
    circle at center, 
    #8b5cf6 0%, 
    #1e1b4b 80%
  );
}
    `,
    scssCode: `
.radial-box {
  background: radial-gradient(
    circle at center, 
    #8b5cf6 0%, 
    #1e1b4b 80%
  );
}
    `,
  },
  {
    id: "background-clip-text",
    name: "背景裁剪 (文字)",
    category: "Color",
    description: "将背景限制在文字内部。实现霓虹渐变文字的核心原理。",
    htmlCode: `<h2 class="bg-clip-text">EPOCH CSS</h2>`,
    cssCode: `
.bg-clip-text {
  font-size: 56px;
  font-weight: 900;
  text-align: center;
  margin: 40px 0;
  
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  color: transparent;
}
    `,
    scssCode: `
.bg-clip-text {
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  color: transparent;
}
    `,
  },

  // ================= 阴影与光影 =================
  {
    id: "box-shadow",
    name: "Box Shadow 基础与悬浮",
    category: "Color",
    description:
      "最常见的阴影用法。配合 transition 可以在鼠标悬停时产生浮起的立体感。",
    htmlCode: `<div class="shadow-card">Hover Me</div>`,
    cssCode: `
.shadow-card {
  width: 200px;
  height: 120px;
  margin: 30px auto;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.shadow-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(59, 130, 246, 0.3);
}
    `,
    scssCode: `
.shadow-card {
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(59, 130, 246, 0.3);
  }
}
    `,
  },
  {
    id: "neon-glow",
    name: "Neon Glow 霓虹发光",
    category: "Color",
    description:
      "利用多层 box-shadow（内阴影和外阴影）叠加，实现赛博朋克风的霓虹发光效果。",
    htmlCode: `<div class="neon-btn">GLOW</div>`,
    cssCode: `
.neon-btn {
  width: 160px;
  height: 60px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: transparent;
  color: #0ff;
  border: 3px solid #0ff;
  border-radius: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  
  box-shadow: 
    0 0 20px #0ff, 
    inset 0 0 20px #0ff;
  text-shadow: 0 0 10px #0ff;
}
    `,
    scssCode: `
.neon-btn {
  box-shadow: 
    0 0 20px #0ff, 
    inset 0 0 20px #0ff;
  text-shadow: 0 0 10px #0ff;
}
    `,
  },
  {
    id: "filter-drop-shadow",
    name: "Drop Shadow 不规则阴影",
    category: "Color",
    description:
      "与 box-shadow 不同，drop-shadow 会识别元素的透明通道，为不规则图片（如带有透明背景的 PNG/SVG）生成贴合形状的阴影。",
    htmlCode: `<img class="drop-shadow-img" src="https://api.iconify.design/logos:react.svg" width="120" />`,
    cssCode: `
.drop-shadow-img {
  display: block;
  margin: 20px auto;
  
  filter: drop-shadow(0 15px 15px rgba(59, 130, 246, 0.6));
  transition: filter 0.3s;
}

.drop-shadow-img:hover {
  filter: drop-shadow(0 25px 25px rgba(59, 130, 246, 0.9));
}
    `,
    scssCode: `
.drop-shadow-img {
  filter: drop-shadow(0 15px 15px rgba(59, 130, 246, 0.6));
}
    `,
  },

  // ================= 滤镜与混合模式 =================
  {
    id: "filter-grayscale",
    name: "Filter 滤镜综合",
    category: "Color",
    description: "鼠标悬停时，将黑白模糊的图片瞬间变亮变彩色。",
    htmlCode: `<img class="filter-img" src="https://picsum.photos/300/300" alt="test" />`,
    cssCode: `
.filter-img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 20px auto;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
  
  filter: grayscale(100%) blur(3px) brightness(0.8);
  transition: filter 0.4s ease;
}

.filter-img:hover {
  filter: grayscale(0%) blur(0) brightness(1);
}
    `,
    scssCode: `
.filter-img {
  filter: grayscale(100%) blur(3px);
  transition: filter 0.4s ease;
  
  &:hover {
    filter: grayscale(0%) blur(0);
  }
}
    `,
  },
  {
    id: "mix-blend-mode",
    name: "Mix Blend Mode 混合模式",
    category: "Color",
    description:
      "模拟 Photoshop 的图层混合模式，实现文字与背景的深度融合效果。",
    htmlCode: `
<div class="blend-box">
  <div class="blend-text">EPOCH</div>
</div>
    `,
    cssCode: `
.blend-box {
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin: 0 auto;
  background: linear-gradient(45deg, #f59e0b, #ec4899);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.blend-text {
  font-size: 64px;
  font-weight: 900;
  color: white;
  letter-spacing: 6px;
  
  /* 核心属性 */
  mix-blend-mode: overlay;
}
    `,
    scssCode: `
.blend-text {
  mix-blend-mode: overlay;
}
    `,
  },
  {
    id: "backdrop-filter",
    name: "Backdrop Filter 毛玻璃",
    category: "Color",
    description: "制作毛玻璃质感的核心属性。它对元素背后的区域应用滤镜。",
    htmlCode: `
<div class="glass-bg">
  <div class="glass-card">Glass</div>
</div>
    `,
    cssCode: `
.glass-bg {
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin: 0 auto;
  background: url('https://picsum.photos/600/400') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.glass-card {
  width: 160px;
  height: 100px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  /* 毛玻璃核心 */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
    `,
    scssCode: `
.glass-card {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.4);
}
    `,
  },

  // ================= 形状与遮罩 =================
  {
    id: "clip-path-polygon",
    name: "Clip-path 多边形裁剪",
    category: "Color",
    description:
      "使用 `clip-path` 可以裁剪出各种炫酷的形状，如三角形、六边形、甚至自定义 SVG 路径。",
    htmlCode: `<div class="clip-box">Polygon</div>`,
    cssCode: `
.clip-box {
  width: 180px;
  height: 180px;
  margin: 20px auto;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  
  /* 六边形裁剪 */
  clip-path: polygon(
    50% 0%, 
    100% 25%, 
    100% 75%, 
    50% 100%, 
    0% 75%, 
    0% 25%
  );
}
    `,
    scssCode: `
.clip-box {
  clip-path: polygon(
    50% 0%, 100% 25%, 100% 75%, 
    50% 100%, 0% 75%, 0% 25%
  );
}
    `,
  },
  {
    id: "clip-path-circle",
    name: "Clip-path 圆形头像",
    category: "Color",
    description: "利用圆形裁剪快速实现用户头像的展示效果。",
    htmlCode: `<img class="avatar" src="https://picsum.photos/300/300" />`,
    cssCode: `
.avatar {
  width: 160px;
  height: 160px;
  display: block;
  margin: 20px auto;
  object-fit: cover;
  
  /* 圆形裁剪 */
  clip-path: circle(50% at 50% 50%);
}
    `,
    scssCode: `
.avatar {
  object-fit: cover;
  clip-path: circle(50% at 50% 50%);
}
    `,
  },
  {
    id: "mask-image",
    name: "Mask Image 图像遮罩",
    category: "Color",
    description: "使用渐变作为遮罩，让图片边缘自然淡出（非常适合相册背景）。",
    htmlCode: `<div class="mask-box"></div>`,
    cssCode: `
.mask-box {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background: url('https://picsum.photos/600/400') center/cover;
  border-radius: 12px;
  
  /* 底部渐变淡出 */
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}
    `,
    scssCode: `
.mask-box {
  $mask: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: $mask;
  mask-image: $mask;
}
    `,
  },
  {
    id: "border-gradient",
    name: "渐变边框",
    category: "Color",
    description: "双背景重叠实现渐变边框。",
    htmlCode: `<div class="gradient-border">Gradient</div>`,
    cssCode: `
.gradient-border {
  width: 200px;
  height: 100px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 16px;
  
  border: 5px solid transparent;
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, #ff00cc, #3333ff) border-box;
}
    `,
    scssCode: `
.gradient-border {
  border: 5px solid transparent;
  
  $inner: linear-gradient(#fff, #fff);
  $border: linear-gradient(135deg, #ff00cc, #3333ff);
  
  background: $inner padding-box, $border border-box;
}
    `,
  },
  {
    id: "border-image",
    name: "Border Image 九宫格边框",
    category: "Color",
    description:
      "虽然现在有了渐变边框，但 `border-image` 依然是处理复杂装饰边框（如相框、复古花纹）的利器。",
    htmlCode: `<div class="border-img-box">Border Image</div>`,
    cssCode: `
.border-img-box {
  width: 250px;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  
  border: 15px solid transparent;
  border-image: linear-gradient(to right, #f59e0b, #ef4444) 1;
}
    `,
    scssCode: `
.border-img-box {
  border: 15px solid transparent;
  border-image: linear-gradient(to right, #f59e0b, #ef4444) 1;
}
    `,
  },
  {
    id: "opacity-vs-rgba",
    name: "Opacity 与 RGBA 的区别",
    category: "Color",
    description:
      "`opacity` 会让整个元素（包括子元素）变透明；而 `rgba` 背景色只让背景变透明，子元素不受影响。",
    htmlCode: `
<div class="compare-box">
  <div class="box opacity-box">
    <div class="child">Opacity</div>
  </div>
  <div class="box rgba-box">
    <div class="child">RGBA</div>
  </div>
</div>
    `,
    cssCode: `
.compare-box {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.box {
  width: 140px;
  height: 140px;
  background: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* 整个盒子连同文字都半透明 */
.opacity-box {
  opacity: 0.5; 
}

/* 只有背景半透明，文字依然纯白 */
.rgba-box {
  background: rgba(59, 130, 246, 0.5); 
}
    `,
    scssCode: `
.opacity-box {
  opacity: 0.5;
}

.rgba-box {
  background: rgba(59, 130, 246, 0.5);
}
    `,
  },
];
