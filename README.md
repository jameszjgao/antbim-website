# antbim-website

对 [蚂蚁分工官网](https://www.antbim.com/) 的**信息架构与公开文案**进行重组后的重设计落地页（Next.js 14 + Tailwind），便于部署到 Vercel。

## 本地开发

```bash
cd antbim-website
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 构建

```bash
npm run build
npm run start
```

## 发布到 Vercel

1. 在 [Vercel](https://vercel.com/) 新建 Project，Git 仓库指向本目录所在仓库（或将 `antbim-website` 作为 monorepo 子目录并设置 **Root Directory** 为 `antbim-website`）。
2. Framework Preset 选择 **Next.js**，Node 版本默认即可。
3. 首次部署完成后，在 Project → Settings → Domains 绑定自有域名（可选）。

命令行方式（需已登录 `vercel` CLI）：

```bash
cd antbim-website
npx vercel --prod
```

## 说明

- 文案与模块对齐官网公开介绍（产品、解决方案、案例、资讯、ERP、服务承诺与联系方式等）；**电话与备案号**等与公开页一致，便于替换为正式运营物料。
- 顶栏「注册 / 登录」与底部按钮为占位，接入真实认证或 CRM 表单即可。
