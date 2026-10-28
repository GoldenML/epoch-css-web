import type { DocItem } from "../../types/doc";

export const animationData: DocItem[] = [
  // ================= 基础过渡 (Transition) =================
  {
    id: "transform-hover",
    name: "Transform 悬停缩放",
    category: "Animation",
    description:
      "最基础的过渡动画。使用 `transform` 配合 `transition`，在悬停时放大并旋转，产生极佳的交互反馈。",
    htmlCode: `<div class="hover-box">Hover</div>`,
    cssCode: `
.hover-box {
  width: 120px;
  height: 120px;
  margin: 40px auto;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 16px;
  cursor: pointer;
  
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hover-box:hover {
  transform: scale(1.2) rotate(10deg);
}
    `,
    scssCode: `
.hover-box {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
}
    `,
  },
  {
    id: "transition-all",
    name: "Transition 平滑过渡",
    category: "Animation",
    description:
      "让元素的多个属性（如背景色、圆角、宽度）在状态改变时平滑过渡，而不是瞬间突变。",
    htmlCode: `<div class="smooth-btn">Hover Me</div>`,
    cssCode: `
.smooth-btn {
  width: 160px;
  height: 60px;
  margin: 40px auto;
  background: #334155;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  
  transition: all 0.4s ease;
}

.smooth-btn:hover {
  background: #10b981;
  border-radius: 30px;
  width: 200px;
}
    `,
    scssCode: `
.smooth-btn {
  transition: all 0.4s ease;
  
  &:hover {
    background: #10b981;
    border-radius: 30px;
  }
}
    `,
  },

  // ================= 关键帧动画 (Keyframes) =================
  {
    id: "animation-keyframes",
    name: "Pulse 脉冲呼吸效果",
    category: "Animation",
    description:
      "利用 `@keyframes` 和 `transform: scale` 制作无限循环的心跳/呼吸灯效果。",
    htmlCode: `<div class="pulse-circle"></div>`,
    cssCode: `
.pulse-circle {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background-color: #ef4444;
  border-radius: 50%;
  
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 30px rgba(239, 68, 68, 0);
  }
  100% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}
    `,
    scssCode: `
.pulse-circle {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 30px rgba(239, 68, 68, 0);
  }
}
    `,
  },
  {
    id: "animation-bounce",
    name: "Bounce 上下弹跳",
    category: "Animation",
    description:
      "使用 `translateY` 和 `animation-direction: alternate`，让元素在两个状态之间来回交替运动。",
    htmlCode: `<div class="bounce-ball"></div>`,
    cssCode: `
.bounce-ball {
  width: 60px;
  height: 60px;
  margin: 80px auto 40px;
  background: #3b82f6;
  border-radius: 50%;
  
  animation: bounce 0.6s infinite alternate cubic-bezier(0.5, 0.05, 1, 0.5);
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-60px);
  }
}
    `,
    scssCode: `
.bounce-ball {
  animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
  to {
    transform: translateY(-60px);
  }
}
    `,
  },
  {
    id: "animation-spin",
    name: "Spin 旋转加载圈",
    category: "Animation",
    description:
      "使用 `rotate` 制作经典的环形 Loading 动画，通过 `border` 颜色差异营造旋转感。",
    htmlCode: `<div class="spinner"></div>`,
    cssCode: `
.spinner {
  width: 60px;
  height: 60px;
  margin: 50px auto;
  border: 6px solid #e2e8f0;
  border-top-color: #8b5cf6;
  border-radius: 50%;
  
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
    `,
    scssCode: `
.spinner {
  border: 6px solid #e2e8f0;
  border-top-color: #8b5cf6;
  animation: spin 1s linear infinite;
}
    `,
  },
  {
    id: "animation-loading-dots",
    name: "Dots 延迟跳动加载",
    category: "Animation",
    description:
      "利用 `animation-delay` 让多个圆点依次跳动，是前端极其常用的加载状态提示。",
    htmlCode: `
<div class="loading-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
    `,
    cssCode: `
.loading-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;
}

.dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  
  animation: jump 1.4s infinite ease-in-out both;
}

/* 错开延迟 */
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes jump {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
    `,
    scssCode: `
.dot {
  animation: jump 1.4s infinite both;
  
  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }
}
    `,
  },

  // ================= 进阶：伪元素与文本 =================
  {
    id: "typewriter",
    name: "打字机效果",
    category: "Animation",
    description:
      "纯 CSS 实现。利用 `steps()` 逐帧动画展开宽度，配合 `border-right` 模拟光标闪烁。",
    htmlCode: `<div class="typewriter">Hello CSS!</div>`,
    cssCode: `
.typewriter {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid #8b5cf6;
  font-family: monospace;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 60px auto;
  
  /* 两个动画同时执行 */
  animation: 
    typing 2s steps(10, end) forwards,
    blink 0.8s step-end infinite;
}

@keyframes typing {
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}
    `,
    scssCode: `
$len: 10;

.typewriter {
  animation: 
    typing 2s steps($len, end) forwards,
    blink 0.8s step-end infinite;
}
    `,
  },
  {
    id: "skeleton-loading",
    name: "骨架屏流光",
    category: "Animation",
    description:
      "通过移动 `background-position`，实现骨架屏（Skeleton）的扫光加载效果。",
    htmlCode: `<div class="skeleton"></div>`,
    cssCode: `
.skeleton {
  width: 300px;
  height: 160px;
  margin: 40px auto;
  border-radius: 12px;
  
  background: linear-gradient(
    90deg, 
    #f0f0f0 25%, 
    #e0e0e0 50%, 
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
    `,
    scssCode: `
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
    `,
  },
  {
    id: "text-shake",
    name: "错误提示抖动 (Shake)",
    category: "Animation",
    description:
      "利用 `translateX` 实现左右快速抖动，通常用于表单验证失败时的错误提示。",
    htmlCode: `<div class="shake-text">Password Error!</div>`,
    cssCode: `
.shake-text {
  width: 200px;
  margin: 60px auto;
  padding: 16px;
  background: #fee2e2;
  color: #ef4444;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #fecaca;
  font-size: 18px;
  font-weight: bold;
  
  animation: shake 0.5s;
}

.shake-text:hover {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-12px); }
  50% { transform: translateX(12px); }
  75% { transform: translateX(-6px); }
}
    `,
    scssCode: `
@keyframes shake {
  25% { transform: translateX(-12px); }
  50% { transform: translateX(12px); }
}
    `,
  },

  // ================= 3D 与性能优化 =================
  {
    id: "flip-card-3d",
    name: "3D 翻转卡片",
    category: "Animation",
    description:
      "利用 `perspective` 和 `transform-style: preserve-3d` 实现极其逼真的三维翻转效果。",
    htmlCode: `
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">正面 (Hover)</div>
    <div class="flip-card-back">背面 (3D)</div>
  </div>
</div>
    `,
    cssCode: `
.flip-card {
  width: 240px;
  height: 150px;
  margin: 30px auto;
  cursor: pointer;
  
  /* 3D 视距 */
  perspective: 1200px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  /* 开启 3D 空间 */
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  
  /* 隐藏背面 */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background: #3b82f6;
}

.flip-card-back {
  background: #8b5cf6;
  transform: rotateY(180deg);
}
    `,
    scssCode: `
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
    `,
  },
  {
    id: "will-change",
    name: "Will-change 动画性能优化",
    category: "Animation",
    description:
      "提前告诉浏览器元素将要发生什么变化，让浏览器提前做好 GPU 渲染优化，减少卡顿（注意：不要滥用）。",
    htmlCode: `<div class="will-change-box">Hover Me Smoothly</div>`,
    cssCode: `
.will-change-box {
  width: 200px;
  height: 100px;
  margin: 40px auto;
  background: #f59e0b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s;
  
  /* 提前通知浏览器准备 GPU 加速 */
  will-change: transform;
}

.will-change-box:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 15px 30px rgba(245, 158, 11, 0.5);
}
    `,
    scssCode: `
.will-change-box {
  will-change: transform;
  transition: transform 0.3s;
}
    `,
  },
  {
    id: "animation-timeline",
    name: "Animation-delay 错峰动画",
    category: "Animation",
    description:
      "通过给列表的每一项设置不同的 `nth-child` 延迟，实现波浪式的入场效果。",
    htmlCode: `
<div class="wave-list">
  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
</div>
    `,
    cssCode: `
.wave-list {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 60px;
}

.wave-list > div {
  width: 40px;
  height: 40px;
  background: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  animation: wave 1.5s infinite ease-in-out both;
}

/* 错开延迟 */
.wave-list > div:nth-child(1) { animation-delay: 0s; }
.wave-list > div:nth-child(2) { animation-delay: 0.1s; }
.wave-list > div:nth-child(3) { animation-delay: 0.2s; }
.wave-list > div:nth-child(4) { animation-delay: 0.3s; }
.wave-list > div:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}
    `,
    scssCode: `
/* 利用 SCSS 循环生成错峰延迟 */
@for $i from 1 through 5 {
  .wave-list > div:nth-child(#{$i}) {
    animation-delay: #{($i - 1) * 0.1}s;
  }
}
    `,
  },
];
