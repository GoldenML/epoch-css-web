import type { DocItem } from "../../types/doc";

export const typographyData: DocItem[] = [
  // ================= 基础与截断 =================
  {
    id: "single-line-ellipsis",
    name: "单行文本溢出省略",
    category: "Typography",
    description: "前端开发极其高频的“三大件”组合，专治单行文本撑破容器。",
    htmlCode: `<div class="single-line">这是一段极其极其极其极其极其极其极其极其长的单行文本，看看会不会撑破盒子。</div>`,
    cssCode: `
.single-line {
  width: 100%;
  max-width: 400px;
  padding: 16px;
  background: #f3f4f6;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  
  /* 核心三件套 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
    `,
    scssCode: `
.single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
    `,
  },
  {
    id: "line-clamp",
    name: "多行文本截断",
    category: "Typography",
    description:
      "利用 `-webkit-line-clamp` 实现优雅的多行截断，超出部分显示省略号。",
    htmlCode: `
<div class="text-box">
  这是一段很长很长的文本，用来演示多行文本溢出时如何自动显示省略号。通过 CSS 的 line-clamp 属性，我们可以非常轻松地将其限制为两行。
</div>
    `,
    cssCode: `
.text-box {
  width: 320px;
  padding: 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  
  /* 核心代码 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
    `,
    scssCode: `
@mixin text-truncate($lines) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $lines;
  overflow: hidden;
}

.text-box {
  @include text-truncate(2);
}
    `,
  },
  {
    id: "word-break",
    name: "长单词强制换行",
    category: "Typography",
    description:
      "处理超长连续字符（如超长英文单词、URL）导致容器被撑破的问题。",
    htmlCode: `<div class="url-text">https://www.example.com/really-long-url-that-will-break-the-container</div>`,
    cssCode: `
.url-text {
  width: 320px;
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  font-size: 16px;
  
  /* 强制换行 */
  word-break: break-all;
}
    `,
    scssCode: `
.url-text {
  word-break: break-all;
}
    `,
  },

  // ================= 视觉特效 =================
  {
    id: "text-gradient",
    name: "霓虹渐变文字",
    category: "Typography",
    description:
      "利用 `background-clip: text` 配合渐变背景，可以做出非常赛博朋克的渐变色文字。",
    htmlCode: `<h2 class="neon-text">CYBERPUNK</h2>`,
    cssCode: `
.neon-text {
  font-size: 64px;
  font-weight: 900;
  text-align: center;
  margin: 40px 0;
  
  background: linear-gradient(90deg, #ff00cc, #3333ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(255,0,204,0.6));
}
    `,
    scssCode: `
.neon-text {
  $gradient: linear-gradient(90deg, #ff00cc, #3333ff, #00ffff);
  
  background: $gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
    `,
  },
  {
    id: "text-stroke",
    name: "文字描边 (空心字)",
    category: "Typography",
    description:
      "使用 `-webkit-text-stroke` 属性为文字添加轮廓，非常适合做海报标题。",
    htmlCode: `<h2 class="stroke-text">HOLLOW</h2>`,
    cssCode: `
.stroke-text {
  font-size: 64px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 4px;
  margin: 40px 0;
  
  color: transparent;
  -webkit-text-stroke: 3px #8b5cf6;
}
    `,
    scssCode: `
.stroke-text {
  color: transparent;
  -webkit-text-stroke: 3px #8b5cf6;
}
    `,
  },
  {
    id: "text-shadow",
    name: "文字阴影",
    category: "Typography",
    description:
      "text-shadow 属性用于为文字添加阴影效果，常用于强调文本或制作发光效果。",
    htmlCode: `<h2 class="shadow-text">Glow Text</h2>`,
    cssCode: `
.shadow-text {
  font-size: 56px;
  color: #fff;
  text-align: center;
  margin: 40px 0;
  
  text-shadow: 
    0 0 15px #3b82f6, 
    0 0 30px #3b82f6, 
    0 0 50px #3b82f6;
}
    `,
    scssCode: `
.shadow-text {
  color: #fff;
  text-shadow: 
    0 0 15px #3b82f6, 
    0 0 30px #3b82f6;
}
    `,
  },
  {
    id: "text-decoration",
    name: "花式下划线",
    category: "Typography",
    description:
      "`text-decoration` 不仅仅只有直线，还可以设置波浪线、双实线，甚至可以控制下划线的粗细和偏移。",
    htmlCode: `
<div class="deco-box">
  <a href="#" class="link-wavy">波浪下划线</a> <br/><br/> 
  <span class="link-thick">加粗虚线下划线</span>
</div>
    `,
    cssCode: `
.deco-box {
  text-align: center;
  font-size: 20px;
}

.link-wavy {
  color: #8b5cf6;
  text-decoration: underline wavy #8b5cf6;
  text-underline-offset: 8px;
}

.link-thick {
  color: #3b82f6;
  text-decoration: underline dashed #3b82f6 3px;
  text-underline-offset: 8px;
}
    `,
    scssCode: `
.link-wavy {
  text-decoration: underline wavy #8b5cf6;
  text-underline-offset: 8px;
}
    `,
  },

  // ================= 间距与布局 =================
  {
    id: "letter-spacing",
    name: "字间距与词间距",
    category: "Typography",
    description:
      "`letter-spacing` 控制字母间距，`word-spacing` 控制单词间距。常用于提升标题的高级感。",
    htmlCode: `<h2 class="spacing-text">BREATHE</h2>`,
    cssCode: `
.spacing-text {
  font-size: 48px;
  text-align: center;
  font-weight: 300;
  color: #333;
  margin: 40px 0;
  
  letter-spacing: 16px;
  word-spacing: 20px;
}
    `,
    scssCode: `
.spacing-text {
  letter-spacing: 16px;
  word-spacing: 20px;
}
    `,
  },
  {
    id: "line-height-indent",
    name: "行高与首行缩进",
    category: "Typography",
    description:
      "`line-height` 控制行高，`text-indent` 控制首行缩进。这是阅读类长文网站的基础。",
    htmlCode: `
<p class="article-text">
  前端开发是一门艺术，CSS 则是这门艺术的基础颜料。合理的行高和首行缩进，能够极大地提升用户的阅读体验，让长篇文章看起来不再枯燥。
</p>
    `,
    cssCode: `
.article-text {
  width: 400px;
  margin: 0 auto;
  font-size: 16px;
  color: #555;
  
  line-height: 2.2;
  text-indent: 2em;
}
    `,
    scssCode: `
.article-text {
  line-height: 2.2;
  text-indent: 2em;
}
    `,
  },
  {
    id: "text-align-last",
    name: "强制最后一行对齐",
    category: "Typography",
    description:
      "当文本使用 `text-align: justify` 两端对齐时，最后一行通常是左对齐的。用 `text-align-last` 可以强制最后一行也两端对齐。",
    htmlCode: `<p class="justify-text">这一段文字使用了两端对齐，并且最后一行也被强制拉满了两端对齐，非常适合做表单或者标签的排版。</p>`,
    cssCode: `
.justify-text {
  width: 320px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  
  text-align: justify;
  text-align-last: justify;
}
    `,
    scssCode: `
.justify-text {
  text-align: justify;
  text-align-last: justify;
}
    `,
  },
  {
    id: "text-wrap-balance",
    name: "文本平衡换行",
    category: "Typography",
    description:
      "现代 CSS 属性 `text-wrap: balance`。在处理多行标题时，它能自动计算并让每一行的长度更加均匀，告别“孤字”。",
    htmlCode: `<h2 class="balance-title">这是一个稍微有点长，需要平衡换行的标题</h2>`,
    cssCode: `
.balance-title {
  width: 360px;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  color: #333;
  line-height: 1.4;
  
  /* 核心属性 */
  text-wrap: balance;
}
    `,
    scssCode: `
.balance-title {
  text-wrap: balance;
}
    `,
  },

  // ================= 特殊排版 =================
  {
    id: "drop-cap",
    name: "首字下沉",
    category: "Typography",
    description:
      "杂志排版风格的首字母放大效果，通过 `::first-letter` 伪元素实现。",
    htmlCode: `
<div class="drop-cap-text">
  前端开发是一门艺术。通过 CSS 的伪元素，我们可以轻松实现类似杂志排版的首字下沉效果，让文章看起来更加高级。
</div>
    `,
    cssCode: `
.drop-cap-text {
  width: 360px;
  margin: 0 auto;
  line-height: 1.8;
  color: #333;
  font-size: 16px;
}

.drop-cap-text::first-letter {
  font-size: 4em;
  float: left;
  line-height: 0.9;
  margin-right: 12px;
  color: #8b5cf6;
  font-weight: bold;
}
    `,
    scssCode: `
.drop-cap-text {
  &::first-letter {
    font-size: 4em;
    float: left;
    color: #8b5cf6;
  }
}
    `,
  },
  {
    id: "selection-color",
    name: "自定义划词颜色",
    category: "Typography",
    description:
      "通过 `::selection` 伪元素修改鼠标划词选中时的背景和文字颜色，提升品牌感。",
    htmlCode: `<p class="select-text">用鼠标选中这段话，看看颜色是不是变成了紫色的背景和白色的字？</p>`,
    cssCode: `
.select-text {
  padding: 20px;
  font-size: 20px;
  color: #333;
  line-height: 1.6;
}

.select-text::selection {
  background: #8b5cf6;
  color: white;
}
    `,
    scssCode: `
.select-text {
  &::selection {
    background: #8b5cf6;
    color: white;
  }
}
    `,
  },
  {
    id: "writing-mode",
    name: "竖排文字",
    category: "Typography",
    description: "将文字方向变为垂直排列。中国古代诗词排版必备。",
    htmlCode: `
<div class="vertical-text">
  春眠不觉晓<br/>
  处处闻啼鸟
</div>
    `,
    cssCode: `
.vertical-text {
  writing-mode: vertical-rl;
  height: 240px;
  margin: 0 auto;
  font-size: 28px;
  line-height: 1.8;
  color: #333;
  letter-spacing: 6px;
  border-left: 3px solid #8b5cf6;
  padding-left: 20px;
}
    `,
    scssCode: `
.vertical-text {
  writing-mode: vertical-rl;
}
    `,
  },
  {
    id: "numeric-tabular",
    name: "等宽数字",
    category: "Typography",
    description:
      "让数字（如 1 和 8）占据相同的宽度。这在金融数据、倒计时、表格对齐时极其重要。",
    htmlCode: `
<div class="number-box">
  <span class="num">11:11:11</span><br/>
  <span class="num">99:99:99</span>
</div>
    `,
    cssCode: `
.number-box {
  text-align: center;
  font-family: monospace;
}

.num {
  font-size: 36px;
  font-weight: bold;
  color: #3b82f6;
  line-height: 1.5;
  
  /* 等宽数字 */
  font-variant-numeric: tabular-nums;
}
    `,
    scssCode: `
.num {
  font-variant-numeric: tabular-nums;
}
    `,
  },
];
