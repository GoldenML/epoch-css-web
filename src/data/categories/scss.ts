import type { DocItem } from "../../types/doc";

export const scssData: DocItem[] = [
  // ================= 基础与复用 =================
  {
    id: "scss-variables",
    name: "SCSS 变量与作用域",
    category: "SCSS",
    description:
      "使用 `$` 定义变量。SCSS 支持全局变量和局部变量。非常适合维护品牌色和间距。",
    htmlCode: `<div class="theme-box">Primary Color</div>`,
    cssCode: `
/* 编译后的 CSS */
.theme-box {
  background-color: #8b5cf6;
  color: #ffffff;
  padding: 24px;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
}
    `,
    scssCode: `
// 全局变量
$brand-color: #8b5cf6;
$text-white: #ffffff;

.theme-box {
  background-color: $brand-color;
  color: $text-white;
  padding: 24px;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
}
    `,
  },
  {
    id: "scss-nested",
    name: "SCSS 嵌套与父选择器 &",
    category: "SCSS",
    description:
      "SCSS 允许选择器嵌套。使用 `&` 代表父级选择器，非常适合书写伪类和伪元素。",
    htmlCode: `<button class="btn">Hover Me</button>`,
    cssCode: `
/* 编译后的 CSS */
.btn {
  background: #3b82f6;
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #2563eb;
}

.btn::after {
  content: "!";
}
    `,
    scssCode: `
.btn {
  background: #3b82f6;
  color: white;
  padding: 16px 32px;
  
  // 使用 & 引用父级
  &:hover {
    background: #2563eb;
  }
  
  &::after {
    content: "!";
  }
}
    `,
  },
  {
    id: "scss-extend",
    name: "SCSS @extend 继承与占位符",
    category: "SCSS",
    description:
      "利用 `%placeholder` 定义基础样式，再用 `@extend` 继承。它不会生成冗余代码，而是将选择器组合在一起。",
    htmlCode: `
<button class="btn-primary">Primary</button>
<button class="btn-danger">Danger</button>
    `,
    cssCode: `
/* 编译后的 CSS */
.btn-primary, .btn-danger {
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 12px;
}

.btn-primary {
  background: #3b82f6;
}

.btn-danger {
  background: #ef4444;
}
    `,
    scssCode: `
%btn-base {
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
}

.btn-primary {
  @extend %btn-base;
  background: #3b82f6;
}

.btn-danger {
  @extend %btn-base;
  background: #ef4444;
}
    `,
  },
  {
    id: "scss-mixin",
    name: "SCSS Mixin 混合宏",
    category: "SCSS",
    description:
      "像函数一样复用代码块。你可以传入参数，并设定默认值，是组件化开发中最常用的方式。",
    htmlCode: `<div class="flex-center">Centered Text</div>`,
    cssCode: `
/* 编译后的 CSS */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 160px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0 auto;
}
    `,
    scssCode: `
// 定义带默认参数的 Mixin
@mixin flex($justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

.flex-center {
  @include flex; // 使用默认参数
  width: 100%;
  height: 160px;
  background: #f0f0f0;
}
    `,
  },

  // ================= 进阶：插槽与逻辑 =================
  {
    id: "scss-content",
    name: "SCSS @content 内容块 (插槽)",
    category: "SCSS",
    description:
      "Mixin 的高级用法。利用 `@content` 可以将外部代码块“注入”到 Mixin 内部，非常适合封装媒体查询。",
    htmlCode: `<div class="responsive-box">在宽屏下我会变蓝</div>`,
    cssCode: `
/* 编译后的 CSS */
.responsive-box {
  width: 100%;
  max-width: 300px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
  background: #f0f0f0;
  border-radius: 12px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
}

@media (min-width: 600px) {
  .responsive-box {
    background: #3b82f6;
    color: white;
    max-width: 500px;
  }
}
    `,
    scssCode: `
// 封装媒体查询 Mixin
@mixin pc-screen {
  @media (min-width: 600px) {
    @content; // 外部传入的内容会被塞到这里
  }
}

.responsive-box {
  width: 100%;
  padding: 30px;
  text-align: center;
  
  @include pc-screen {
    background: #3b82f6;
    color: white;
  }
}
    `,
  },
  {
    id: "scss-if-else",
    name: "SCSS @if / @else 条件判断",
    category: "SCSS",
    description:
      "在 SCSS 中可以使用逻辑判断。常用于编写主题切换工具类或根据参数改变样式。",
    htmlCode: `<div class="alert alert-error">Error Message</div>`,
    cssCode: `
/* 编译后的 CSS */
.alert-error {
  background: #fee2e2;
  color: #ef4444;
  border: 2px solid #ef4444;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
    `,
    scssCode: `
@mixin alert($type) {
  padding: 20px;
  border-radius: 12px;
  
  @if $type == "success" {
    background: #dcfce7;
    color: #22c55e;
    border: 2px solid #22c55e;
  } @else if $type == "error" {
    background: #fee2e2;
    color: #ef4444;
    border: 2px solid #ef4444;
  } @else {
    background: #f3f4f6;
    color: #6b7280;
  }
}

.alert-error {
  @include alert("error");
}
    `,
  },

  // ================= 高级：函数与循环 =================
  {
    id: "scss-function",
    name: "SCSS @function 自定义函数",
    category: "SCSS",
    description:
      "用 `@function` 编写自定义函数，返回一个具体的值。非常适合处理计算。",
    htmlCode: `<div class="fluid-text">流体排版文字</div>`,
    cssCode: `
/* 编译后的 CSS */
.fluid-text {
  font-size: clamp(24px, 4vw, 48px);
  color: #333;
  text-align: center;
  font-weight: 900;
  margin-top: 60px;
}
    `,
    scssCode: `
// 定义一个计算流体文字大小的函数
@function fluid-font($min, $max) {
  @return clamp(#{$min}px, 4vw, #{$max}px);
}

.fluid-text {
  font-size: fluid-font(24, 48);
  color: #333;
  text-align: center;
  font-weight: 900;
}
    `,
  },
  {
    id: "scss-map-each",
    name: "SCSS Map 与 @each 遍历",
    category: "SCSS",
    description:
      "通过 Map 管理配置，并用 `@each` 遍历批量生成类名。这是构建组件库的核心技巧。",
    htmlCode: `
<div style="text-align:center; margin-top:50px;">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
</div>
    `,
    cssCode: `
/* 编译后的 CSS */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
}

.btn-primary { background: #3b82f6; }
.btn-success { background: #10b981; }
.btn-danger { background: #ef4444; }
    `,
    scssCode: `
$colors: (
  "primary": #3b82f6,
  "success": #10b981,
  "danger": #ef4444
);

.btn {
  padding: 12px 24px;
  color: white;
  border: none;
  border-radius: 8px;
}

@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
  }
}
    `,
  },
  {
    id: "scss-for-loop",
    name: "SCSS @for 循环生成网格",
    category: "SCSS",
    description:
      "使用 `@for` 循环可以瞬间生成几十个工具类，比如宽度比例、外边距等。",
    htmlCode: `
<div class="grid-demo">
  <div class="col-1">1</div>
  <div class="col-3">3</div>
</div>
    `,
    cssCode: `
/* 编译后的 CSS */
.col-1 { width: 25%; }
.col-2 { width: 50%; }
.col-3 { width: 75%; }
.col-4 { width: 100%; }

.grid-demo {
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  overflow: hidden;
  border-radius: 12px;
}

.grid-demo > div {
  float: left;
  background: #8b5cf6;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgba(255,255,255,0.2);
}
    `,
    scssCode: `
// 生成 25%, 50%, 75%, 100% 的宽度类
@for $i from 1 through 4 {
  .col-#{$i} {
    width: $i * 25%;
  }
}

.grid-demo > div {
  float: left;
  background: #8b5cf6;
  color: white;
}
    `,
  },
  {
    id: "scss-math",
    name: "SCSS 数学运算 (math.div)",
    category: "SCSS",
    description:
      "新版 Dart Sass 推荐使用 `math.div()` 进行除法计算，避免与 CSS 原生属性冲突。",
    htmlCode: `<div class="math-box">Fixed Ratio Box</div>`,
    cssCode: `
/* 编译后的 CSS */
.math-box {
  width: 33.3333%;
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
@use "sass:math"; // 引入现代 Sass 数学模块

.math-box {
  // 100% 除以 3
  width: math.div(100%, 3);
  
  height: 120px;
  background: #f59e0b;
  color: white;
}
    `,
  },
  {
    id: "scss-use-module",
    name: "SCSS @use 模块化系统",
    category: "SCSS",
    description:
      "`@use` 是替代 `@import` 的现代方案。它只会加载一次，避免样式重复，并自带命名空间，防止变量冲突。",
    htmlCode: `<div class="module-box">Module System</div>`,
    cssCode: `
/* 编译后的 CSS */
.module-box {
  border: 3px solid #10b981;
  color: #10b981;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
}
    `,
    scssCode: `
/* 
  假设你有一个 _variables.scss 文件：
  $success-color: #10b981;
*/

// 使用 @use 引入，并设置命名空间为 'vars'
@use "sass:color"; 
$success-color: #10b981;

.module-box {
  border: 3px solid $success-color;
  color: $success-color;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
}
    `,
  },
];
