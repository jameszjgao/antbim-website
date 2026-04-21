/**
 * 蚂蚁分工 antbim.com 营销落地页 — 文案与信息架构
 * 依据官网首页 HTML meta、首屏模块及 /Solution/ 等公开页面归纳；
 * 运营方已确认素材与表述可授权用于替换原站。
 */

/** 官网 <meta name="description"> 原文（用于长文案与内文一致性） */
export const officialBrandStory =
  "蚂蚁分工为易协云旗下产品，致力于为企业提供管理体系流程落地的项目管理产品及解决方案。从流程规范管理、进度效率管理、质量评审管理、文档记录管理以及跨部门协作等方面，助力企业在研发生产中严格遵循体系认证规范，实现业务流程标准化和自动化，高效落实体系，提升产品质量和项目交付效率，让客户持续满意。";

/** 正式注册 / 登录（独立子域），与顶栏「注册 / 登录」一致 */
export const authAppLoginUrl = "https://login.antbim.cn/login" as const;

export const siteMeta = {
  /** 浏览器标题 — 与官网 title 对齐 */
  title: "蚂蚁分工-助力管理体系流程落地的项目管理系统",
  /** SEO 摘要（约 150 字内，利于搜索结果点击率） */
  description:
    "蚂蚁分工是易协云旗下项目管理系统：订单到交付全流程、WBS 进度、料工费成本、预算利润、质量风险、资源与知识库一体；支持私有部署与大规模企业实践，立即预约演示。",
  longDescription: officialBrandStory,
  phone: "0571-28874166",
  company: "易协云（杭州）科技有限公司",
  productName: "蚂蚁分工",
  icp: "陕ICP备17022787号-1",
} as const;

/**
 * 顶栏与官网栏目 1:1：path 与 sitemap / 旧站公开链接一致（含大小写，如 `/Solution/`）。
 * 详情页与专题页由 middleware 在迁移期回源旧站；首页 `/` 由 Next 新营销页承接。
 */
export const legacyPublicPaths = {
  product: "/product/",
  solution: "/Solution/",
  testimonials: "/testimonials/",
  news: "/news/",
  /** 关于我们 — 与旧站导航一致 */
  about: "/h-col-102.html",
  messageBoard: "/h-msgBoard.html",
  /** 旧站营销页登录入口（sitemap 仍保留；顶栏 CTA 用 authAppLoginUrl） */
  legacyMarketingLogin: "/h-login.html",
  signup: "/h-signup.html",
} as const;

export const navPrimary = [
  { label: "产品", href: legacyPublicPaths.product },
  { label: "解决方案", href: legacyPublicPaths.solution },
  { label: "客户案例", href: legacyPublicPaths.testimonials },
  { label: "资讯中心", href: legacyPublicPaths.news },
  { label: "关于我们", href: legacyPublicPaths.about },
] as const;

/** 首屏辅助口号 — 与官网「帮企业…」一致 */
export const heroSupportingLine = "帮企业经营好源源不断的项目。";

/** 首屏主段落（承接标语 + 能力一句话） */
export const heroPrimaryCopy =
  "帮企业经营好源源不断的项目：从商机到交付、从进度到成本、从质量风险到知识沉淀，一套平台覆盖项目型业务全链路。";

/** 首屏次段落（对齐官网 meta 要点，略压缩） */
export const heroSecondaryCopy =
  "以流程规范、进度效率、质量评审、文档留痕与跨部门协作为抓手，助力企业在研发生产中落实体系与标准化、自动化，提升交付效率与客户满意度。";

/** 转化主路径（与顶栏按钮语义一致，便于埋点 id） */
/** 转化入口尽量落到旧站已存在页面；精确到「演示 / 下载」独立 URL 时可在后续对照原站 HTML 再拆分 */
export const conversion = {
  demo: { label: "预约演示", href: legacyPublicPaths.messageBoard },
  trial: { label: "扫码试用", href: legacyPublicPaths.signup },
  consult: { label: "预约咨询", href: legacyPublicPaths.messageBoard },
  download: { label: "免费下载", href: legacyPublicPaths.messageBoard },
  login: { label: "注册 / 登录", href: authAppLoginUrl },
} as const;

export const heroHighlights = [
  "项目管理",
  "管理策略",
  "任务管理",
  "协同应用",
  "统计分析",
] as const;

export const stats = [
  { value: "2000+", label: "服务企业客户" },
  { value: "15W+", label: "注册企业数" },
  { value: "2000W+", label: "注册用户数" },
  { value: "多年领跑", label: "平台项目管理类目" },
] as const;

/** 选择理由 — 营销向三条，对应官网能力与社会证明 */
export const whyAntbim = [
  {
    title: "体系流程真正落地",
    body: "围绕流程规范、进度效率、质量评审、文档留痕与跨部门协作，把认证与内控要求拆到可执行的任务与里程碑，减少「制度上墙、执行走样」。",
  },
  {
    title: "项目经营一体化",
    body: "订单商务、进度、料工费成本、预算利润、质量与风险、资源调度与知识库在同一平台串联，管理层看得见进度、算得清账、控得住风险。",
  },
  {
    title: "经大规模验证的交付力",
    body: "海量企业与用户长期使用，配套实施培训、业务咨询与 TOP 服务团队，支持私有部署与高可用架构，满足成长型与集团型客户。",
  },
] as const;

export const productModules = [
  {
    title: "订单商务跟进",
    desc: "从商机到合同，从需求到交付，订单全过程客户协同是满意交付的基础。",
  },
  {
    title: "项目流程进度管理",
    desc: "AI、模板和灵活工具，完整规划项目全流程 WBS、关键里程碑与进度监控，确保完整如期交付。",
  },
  {
    title: "项目料工费成本管理",
    desc: "物料成本、人工成本、委外成本、摊销费用一体化核算，全面把控项目成本。",
  },
  {
    title: "项目预算与利润监控",
    desc: "项目成本预算和利润空间全过程监控；及时控制超预算事项，保障经营效益。",
  },
  {
    title: "项目质量与风险监控",
    desc: "项目质量过程溯源保障；完善预案，最小化项目风险因素的影响。",
  },
  {
    title: "企业资源管理",
    desc: "人机料资源调度；合作伙伴资源拓展。",
  },
  {
    title: "文档知识库管理",
    desc: "项目档案有序归集，安全归档；企业经验知识化沉淀，持续改进。",
  },
  {
    title: "功能插件",
    desc: "基于 HTML 的原生态 JS 插件，即插即用。",
  },
] as const;

export const featureBlocks = [
  {
    id: "pm-tool",
    eyebrow: "高效易用的项目管理工具",
    title: "快速高效的项目创建体验",
    lead: "适配订单排期交付、产品研发制造等多种项目管理场景。",
    marketingOutcome: "更快立项、更少返工：模板 + 多视图让项目结构一次搭好，进度与风险一眼可见。",
    bullets: [
      "项目模板管理",
      "多场景适配",
      "项目多视图",
      "进度管理",
      "风险管理",
      "管理工具",
    ],
  },
  {
    id: "strategy",
    eyebrow: "智能灵活的管理策略",
    title: "可智能配置各类规则",
    lead: "灵活应对不同项目管理需求。",
    marketingOutcome: "把「人盯」变成「规则盯」：预警、自动化与日历规则降低遗漏与扯皮成本。",
    bullets: [
      "项目预警规则",
      "任务自动化规则",
      "企业日历规则",
      "应用通知规则",
      "高度灵活的角色权限",
    ],
  },
  {
    id: "task",
    eyebrow: "简单高效专业的任务协同工具",
    title: "从任务创建到协同落地",
    lead: "操作多元，简单高效。",
    marketingOutcome: "执行层少切换工具：任务孪生、模板导入与跨项目协同，让一线专注交付。",
    bullets: [
      "任务创建：手动、模板导入、任务孪生",
      "任务协同：任务内、任务间、项目间、伙伴间",
      "多场景适配",
    ],
  },
  {
    id: "suite",
    eyebrow: "面向项目领域的专业组合应用方案",
    title: "全方位协助项目监控管理",
    lead: "专业组合，尽在掌控。",
    marketingOutcome: "待办、审批、文件、工时、汇报与三方同步一体，减少信息孤岛与重复录入。",
    bullets: ["待办", "审批", "文件", "工时", "日历", "动态", "汇报", "酷应用", "三方同步"],
  },
  {
    id: "analytics",
    eyebrow: "专业灵活的分析工具",
    title: "动态数据分析，全面透视项目进展",
    lead: "精准数据复盘，助力效果评估与优化。",
    marketingOutcome: "用数据对齐经营会：预置报表 + 透视与图表，支撑复盘与资源再分配决策。",
    bullets: [
      "专业预置项目报表",
      "统计模板",
      "统计数字组件",
      "表格、透视表、图表组件",
      "灵活易用自定义",
    ],
  },
] as const;

export const erpSection = {
  title: "蚂蚁分工项目 ERP",
  body: "覆盖项目型业务经营 7 大场景，融汇 5 大过程管理模型精髓，专注项目型企业的业财融合，帮助企业实现业务经营一体化。",
  marketingHook: "适合订单交付型、项目制造型与多项目并行企业：把合同、交付、成本与利润串成一条链。",
  ctas: [
    { label: "预约演示", href: legacyPublicPaths.messageBoard },
    { label: "预约咨询", href: legacyPublicPaths.messageBoard },
    { label: "免费下载", href: legacyPublicPaths.messageBoard },
  ] as const,
};

/** 行业标签 — 摘自官网解决方案页公开行业词 */
export const industryTags = [
  "机械设备",
  "工程服务",
  "产线设备",
  "机床模具",
  "仪器仪表",
  "智能电子",
  "生物科学",
  "包装材料",
] as const;

/** 场景标签 — 摘自官网解决方案页公开场景词 */
export const scenarioTags = [
  "订单交付流程排期",
  "研发项目流程规划",
  "项目进度收支一体化",
  "客户供应商跨企协同",
  "工单派发与售后抢修",
  "排程与准时交付",
  "订单精细化管理",
  "工程立项到竣工",
  "制造企业全生命周期质量",
] as const;

export const solutionCopy = {
  industryTitle: "行业解决方案",
  industryLead: "覆盖装备制造、电子、仪器、包装等多类项目型组织，按行业最佳实践预置流程与看板，缩短上线周期。",
  scenarioTitle: "场景解决方案",
  scenarioLead: "围绕订单交付、研发规划、收支一体、跨企协同、售后工单等高频场景，用可配置流程与模板快速落地。",
} as const;

/** 中段强转化条 */
export const midFunnelCta = {
  title: "先看清价值，再定方案",
  body: "留下联系方式或预约演示，顾问结合您的行业与项目形态，演示关键场景并给出落地路径建议。支持扫码试用与私有化部署评估。",
} as const;

export const cases = [
  {
    title: "【科联盈自动化】13 年氦检设备企业，用蚂蚁分工实现生产管理升级",
    excerpt:
      "2023 年苏州科联盈引入蚂蚁分工，借助项目协同和任务协同等工具，实现生产进度管理、采购管理、绩效管理等方面的管理升级。",
    tag: "制造业",
    outcome: "生产进度 · 采购 · 绩效一体化协同",
  },
  {
    title: "智能电动汽车背后的支撑：清研精准用蚂蚁分工实现项目业务经营一体化",
    excerpt:
      "苏州清研精准汽车科技有限公司自 2018 年成立以来，深耕智能电动汽车检测装备领域，借助蚂蚁分工推进项目业务经营一体化。",
    tag: "汽车装备",
    outcome: "项目业务与经营数据对齐",
  },
  {
    title: "从理论到落地，汽车冷成型件企业「新光凯乐」如何将质量管理体系付诸实践？",
    excerpt:
      "面对频繁的客户审厂和项目管理挑战，新光凯乐利用项目管理和审批流程功能，提高项目进度透明度、规范评审程序，并优化文件管理。",
    tag: "质量体系",
    outcome: "审厂可追溯 · 评审与文件规范化",
  },
] as const;

/** 资讯动态 — 汇总官网首页与资讯区公开标题（节选） */
export const news = [
  { title: "终于有人把「项目进度管理」说清楚了！学会这 4 步，项目延期不存在的", date: "2026-04-08" },
  { title: "金之光电子科技有限公司：用蚂蚁分工重塑生产项目管理流程，产研协同效率跃升", date: "2025-07-29" },
  { title: "向上管理不是拍马屁！项目经理必学的 4 个向上沟通技巧 | 蚂蚁分工", date: "2026-04-14" },
  { title: "项目经理的高效会议指南：90% 的会都可以不开！", date: "2026-04-10" },
  { title: "项目总是推不动？学会这 5 招，让跨部门协作效率翻倍", date: "2026-04-10" },
  { title: "助力企业抢占 2025 智造制高点！制造业数智化转型（AI 融合）高级研修班报名在即", date: "资讯" },
  { title: "资料下载 |《企业流程成熟度评估工具包》助您精准定位流程瓶颈", date: "资料" },
  { title: "HEMP 项目数字化经营指南", date: "指南" },
  { title: "排程管理：从延误到准时，订单交付不再难", date: "场景实践" },
  { title: "工程管理丨从立项到竣工，全流程一手掌控！", date: "场景实践" },
  { title: "硬件生产丨快速收集、自动整理……制造企业全生命周期质量管理", date: "场景实践" },
] as const;

export const bottomStats = [
  { value: "1,000", suffix: "家+", label: "在服客户续了又续" },
  { value: "2000W", suffix: "+", label: "用户共同信赖" },
] as const;

export const aboutPoints = [
  "支持私有部署、高可用部署",
  "多端同步、协作更高效",
  "TOP 服务 · 专业服务团队",
] as const;

/** 资源中心入口 — 与官网导航名称一致 */
export const resourceHubItems = [
  { name: "资讯中心", hint: "观点、活动与版本动态" },
  { name: "功能实践", hint: "场景打法与配置思路" },
  { name: "资料下载", hint: "模板与白皮书" },
  { name: "PM 干货", hint: "项目管理方法论" },
  { name: "企业动态", hint: "品牌与客户声音" },
  { name: "帮助中心", hint: "使用说明与常见问题" },
  { name: "帮助手册", hint: "结构化功能说明" },
] as const;

export const footerLinks = [
  { group: "产品功能", items: ["项目流程进度", "项目资源成本", "项目客户协同"] },
  { group: "服务中心", items: ["实施培训", "业务咨询", "知识科普"] },
  { group: "解决方案", items: ["行业解决方案", "场景化解决方案", "更多应用场景解决方案"] },
  { group: "关于", items: ["加入我们", "媒体报道", "案例合作"] },
] as const;

/** 营销 FAQ — 归纳自产品能力与客户常见问法 */
export const faqItems = [
  {
    q: "蚂蚁分工和通用协作工具有什么区别？",
    a: "蚂蚁分工面向「项目型业务」：把订单、WBS、成本预算、质量与风险、文档与伙伴协同放在同一套模型里，支撑经营视角而不仅是任务打勾。",
  },
  {
    q: "是否支持私有化与集团权限？",
    a: "支持私有部署与高可用部署；角色权限可灵活配置，适配多组织、多项目并行与审计留痕需求。",
  },
  {
    q: "实施周期大概多久？",
    a: "取决于行业模板与集成深度。顾问会先梳理关键场景与主数据，再分阶段上线模板、规则与报表，降低一次性切换风险。",
  },
  {
    q: "能否与现有 ERP / 财务系统对接？",
    a: "项目型 ERP 强调业财融合与数据贯通，可通过标准接口与插件方式与常见业务系统对接；具体边界需在方案阶段评估。",
  },
  {
    q: "如何获取演示或试用？",
    a: "可通过页面上的预约演示、预约咨询、免费下载或扫码试用入口联系；全国统一服务热线 0571-28874166。",
  },
] as const;
