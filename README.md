# Epoch CSS

一个纯前端实现的 **CSS 效果与技巧演示集**。收录了大量即看即用的 CSS / SCSS 示例，覆盖布局、排版、视觉、动画、交互等场景，每个示例都配有实时预览和可复制的源码。

**在线访问：[https://css.epochyh.cn](https://css.epochyh.cn)**

## ✨ 功能特性

- **分类浏览**：内置 8 大分类、100+ 个示例
  - `Layout` 布局（Flexbox、Grid、圣杯布局等）
  - `Typography` 排版
  - `Color` 颜色
  - `Animation` 动画
  - `Interactive` 交互
  - `Modern` 现代 CSS 特性
  - `Responsive` 响应式
  - `SCSS` SCSS 语法技巧
- **实时预览**：每个示例都有真实渲染效果的 Live Preview
- **代码高亮与复制**：HTML / CSS / SCSS 三种代码一键复制
- **搜索**：支持按名称/描述快速搜索示例
- **暗色模式**：明暗主题一键切换，跟随系统偏好记忆
- **纯静态站点**：无需后端，数据全部内置于前端

## 🛠 技术栈

| 技术 | 说明 |
| --- | --- |
| [React 19](https://react.dev) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org) | 类型安全 |
| [Vite](https://vite.dev) | 构建工具 & 开发服务器 |
| [Ant Design 6](https://ant.design) | UI 组件库（含暗色主题算法） |
| [React Router](https://reactrouter.com) | 路由 |
| [Zustand](https://zustand.docs.pmnd.rs) | 状态管理（主题 / 搜索 / 用户） |
| [Sass](https://sass-lang.com) | SCSS 支持 |
| [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) | 代码高亮 |

## 🚀 快速开始

> 环境要求：Node.js ≥ 18，推荐使用 [pnpm](https://pnpm.io) 管理依赖。

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:5173）
pnpm dev

# 构建生产版本（输出到 dist/）
pnpm build

# 本地预览构建产物
pnpm preview

# ESLint 代码检查
pnpm lint
```

## 📁 项目结构

```
src/
├── api/                # HTTP 封装（axios）
├── assets/             # 静态资源
├── components/
│   ├── CodeBlock/      # 代码高亮 + 复制组件
│   └── LivePreview/    # 实时效果预览组件（iframe 隔离渲染）
├── data/
│   ├── categories/     # 各分类的示例数据（核心内容）
│   └── index.ts        # 汇总所有分类数据
├── layouts/            # 页面主布局
├── pages/              # 页面组件
│   ├── Welcome.tsx     # 首页（列表/搜索）
│   ├── DocDetail.tsx   # 示例详情页
│   └── NotFound.tsx    # 404
├── router/             # 路由配置
├── store/              # Zustand 状态
├── types/              # 类型定义
├── App.tsx             # 根组件（antd 主题配置）
└── main.tsx            # 入口
```

## 🗺 页面路由

| 路径 | 说明 |
| --- | --- |
| `/` | 首页：分类导航 + 示例列表 + 搜索 |
| `/doc/:id` | 示例详情：预览效果 + 查看源码 |
| `*` | 404 页面 |

## ➕ 如何新增一个示例

1. 在 `src/data/categories/` 下找到对应分类的文件（如布局类编辑 `layout.ts`）；
2. 按以下结构追加一个对象：

```ts
{
  id: "my-demo",            // 唯一 ID，用作 URL：/doc/my-demo
  name: "示例名称",
  category: "Layout",       // 与 CategoryType 匹配
  description: "一句话描述这个技巧",
  htmlCode: `<div class="demo">...</div>`,   // 可选
  cssCode: `.demo { ... }`,                  // 必填
  scssCode: `.demo { ... }`,                 // 可选
}
```

3. 如需新增分类：在 `src/data/categories/` 新建文件并在 `src/data/index.ts` 中引入，同时更新 `src/types/doc.ts` 的 `CategoryType` 与 `src/data/index.ts` 中的 `allCategories`。

## 📦 部署

执行 `pnpm build` 后将 `dist/` 目录部署到任意静态托管即可（Nginx、Vercel、Netlify、OSS 等）。

由于使用了 `BrowserRouter`（history 路由），服务端需将所有路径回退到 `index.html`。Nginx 示例：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
