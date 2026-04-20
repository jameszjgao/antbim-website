/**
 * 镜像自 antbim.com 页面 CDN 的素材（见 public/assets/antbim/）。
 * 仅用于重设计演示；正式商用请替换为自有授权资源。
 */
export const antbimAsset = {
  /** 官网 CMS 导出的横版标识，可作备用；顶栏主识别见 BrandLogo 组件 */
  logoHeader: "/assets/antbim/logo-header.jpg",
  /** 首页主视觉：项目 ERP 能力辐射图（与官网首屏大图一致） */
  brandHeroIllustration: "/assets/antbim/brand-hero-illustration.png",
  featureProjectManagement: "/assets/antbim/feature-project-management.png",
  featureStrategy: "/assets/antbim/feature-strategy.png",
  featureTaskCollab: "/assets/antbim/feature-task-collab.png",
  featureSuiteDemo: "/assets/antbim/demo-screenshot.png",
  featureAnalytics: "/assets/antbim/feature-analytics.png",
  erpSection: "/assets/antbim/erp-section.png",
  iconPhone: "/assets/antbim/icon-phone.png",
  caseKelianying: "/assets/antbim/case-kelianying.png",
  caseQingyan: "/assets/antbim/case-qingyan.png",
  caseXinguangle: "/assets/antbim/case-xinguangle.png",
} as const;

export const caseCardImages = [
  antbimAsset.caseKelianying,
  antbimAsset.caseQingyan,
  antbimAsset.caseXinguangle,
] as const;
