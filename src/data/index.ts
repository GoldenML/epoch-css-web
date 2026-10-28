import { layoutData } from "./categories/layout";
import { typographyData } from "./categories/typography";
import { visualData } from "./categories/visual";
import { animationData } from "./categories/animation";
import { scssData } from "./categories/scss";
// 增加新分类的引入
import { interactiveData } from "./categories/interactive";
import { modernData } from "./categories/modern";
import { responsiveData } from "./categories/responsive";

import type { DocItem } from "../types/doc";

export const docData: DocItem[] = [
  ...layoutData,
  ...typographyData,
  ...visualData,
  ...animationData,
  ...scssData,
  ...interactiveData,
  ...modernData,
  ...responsiveData,
];

export const allCategories = [
  "Layout",
  "Typography",
  "Color",
  "Animation",
  "Interactive", // 新增
  "Modern", // 新增
  "Responsive", // 新增
  "SCSS",
] as const;
