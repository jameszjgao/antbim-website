# antbim-website

**蚂蚁分工**官方营销推广落地页（Next.js 14 + Tailwind），用于**后续直接替换** [antbim.com](https://www.antbim.com/) 现有站点。文案与信息架构依据官网公开 HTML（首页 meta、首屏模块、`/Solution/` 等）归纳并做**转化向**编排；`public/assets/antbim/` 内素材已由运营方授权使用。

## 1:1 栏目与 URL（不合并、不省略）

- **路径注册表**：`lib/migration/legacy-paths.ts` 由 **`https://www.antbim.com/sitemap.xml`** 生成（当前 **668** 条，不含首页 `/`）。sitemap 未收录但线上存在的入口（如 **`/wxGetOpenId.jsp`**）在 **`scripts/sync-legacy-paths.mjs`** 的 `EXTRA_PATHNAMES` 中手工补全后执行 **`npm run sync-legacy-paths`** 再提交。
- **首页 `/`**：由本仓库 **`app/page.tsx`** 承接（新营销首页），**不参与**旧站代理。
- **其余已登记 path**：由 **`middleware.ts`** 在开启代理时 **rewrite** 到 **`LEGACY_UPSTREAM_ORIGIN`** 对应路径，保证外链与搜索引擎收录的 URL 继续可访问。
- **顶栏导航**：`lib/site-content.ts` 中 **`legacyPublicPaths` / `navPrimary`** 使用与旧站一致的 path（注意 **`/Solution/`** 大小写）。
- **⚠️ 防自指循环**：当 **antbim.com** 的 DNS 已指向 Vercel 本部署时，`LEGACY_UPSTREAM_ORIGIN` **不得**再设为 `https://www.antbim.com`（会请求自己又 rewrite 自己）。迁移期应指向**仍托管旧 HTML 的源**（例如旧主机 IP/临时域名/只读镜像），待各 URL 均在 Next 内实现后再关代理。
- **环境变量**（见仓库根目录 **`.env.example`**）：
  - **`LEGACY_PROXY_ENABLED`**：设为 `1` 或 `true` 时启用回源。
  - **`LEGACY_UPSTREAM_ORIGIN`**：旧站源站 origin，无尾斜杠，例如 `https://legacy-mirror.example.com`。

## 设计目标（营销优先）

- **首屏**：信任角标 + 双段价值陈述 + **单卡片 ERP 能力图** + 主/次 CTA + 社会证明数据条。
- **中段**：「为什么选择蚂蚁分工」三卡（体系落地 / 经营一体 / 规模验证）+ 官网品牌长文引用。
- **产品**：八大模块网格，引导预约演示做组合讲解。
- **能力纵深**：每块保留官网要点列表，并增加**成果导向**一句话（`marketingOutcome`）。
- **强转化条**：预约演示 + 免费下载。
- **项目 ERP** + **行业 / 场景标签云**（与解决方案页公开标签对齐）。
- **客户案例**：补充「成果聚焦」一行。
- **FAQ**：缩短决策链路。
- **资讯与资源中心**：与官网导航名称一致的结构化入口 + 资讯列表节选。

## 本地开发

```bash
cd antbim-website
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run start
```

## 推送到 GitHub

```bash
git remote -v
git push -u origin main
```

（若远程未配置，见历史提交中的 GitHub 说明。）

## 发布到 Vercel

1. 仓库连接 Vercel → Import → Framework **Next.js** → Deploy。
2. 将 **antbim.com** 的 DNS 指向 Vercel 提供的记录后，即可在 Vercel 中绑定生产域名并完成**替换原站**。

详见仓库内历史 README 中「从 GitHub 发布」分步说明。

## 替换原站前检查清单

- [ ] 将 `#cta` 区按钮与外链改为真实 **表单 / 企业微信 / CRM** 地址。
- [ ] 资讯列表项链接到真实文章 URL（当前为展示型列表）。
- [ ] 确认 **ICP、公司全称、电话** 与最新证照一致。
- [ ] 按需接入 **百度统计 / 友盟 / GA** 与转化埋点。

## 素材与版权

- `lib/antbim-assets.ts` 汇总本地路径；图源为原站 CDN 镜像文件。
- 运营方已声明授权用于替换原站；对外发布前仍建议法务留存书面授权记录。
