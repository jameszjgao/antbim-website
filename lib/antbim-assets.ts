/**
 * 镜像自 antbim.com 页面 CDN 的素材（见 public/assets/antbim/）。
 * 仅用于重设计演示；正式商用请替换为自有授权资源。
 */
export const antbimAsset = {
  logoHeader: "/assets/antbim/logo-header.jpg",
  brandHeroIllustration: "/assets/antbim/brand-hero-illustration.png",
  banners: [
    "/assets/antbim/banner-slide-1.webp",
    "/assets/antbim/banner-slide-2.webp",
    "/assets/antbim/banner-slide-3.webp",
    "/assets/antbim/banner-slide-4.webp",
  ],
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

export const featureBlockImages = [
  antbimAsset.featureProjectManagement,
  antbimAsset.featureStrategy,
  antbimAsset.featureTaskCollab,
  antbimAsset.featureSuiteDemo,
  antbimAsset.featureAnalytics,
] as const;

export const caseCardImages = [
  antbimAsset.caseKelianying,
  antbimAsset.caseQingyan,
  antbimAsset.caseXinguangle,
] as const;
