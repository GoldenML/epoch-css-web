export type CategoryType =
  | "Layout"
  | "Typography"
  | "Color"
  | "Animation"
  | "SCSS"
  | "Interactive" // 新增
  | "Modern" // 新增
  | "Responsive"; // 新增

export interface DocItem {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  htmlCode?: string;
  cssCode: string;
  scssCode?: string;
}
