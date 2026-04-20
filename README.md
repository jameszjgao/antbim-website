# antbim-website

对 [蚂蚁分工官网](https://www.antbim.com/) 的**信息架构与公开文案**进行重组后的重设计落地页（Next.js 14 + Tailwind），便于部署到 Vercel。

## 本地开发

```bash
cd antbim-website
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 推送到 GitHub

本仓库已配置远程（若账号或仓库名不同，请自行修改）：

```bash
git remote -v
# origin  https://github.com/jameszjgao/antbim-website.git
```

**方式 A — 网页新建空仓库后推送**

1. 在 GitHub 新建仓库 **`antbim-website`**（不要勾选 README / .gitignore，保持空仓库）。
2. 执行：`git push -u origin main`

**方式 B — 使用 GitHub CLI 创建并推送**

```bash
gh auth login
cd antbim-website
gh repo create antbim-website --public --source=. --remote=origin --push
```

若远程已存在且仅缺仓库，也可用：`gh repo create antbim-website --public` 再在仓库页按提示推送。

## 构建

```bash
npm run build
npm run start
```

## 发布到 Vercel

### 方式 A — 连接 GitHub（推荐，可自动部署）

1. 先将本仓库推送到 GitHub（见上文「推送到 GitHub」）。
2. 登录 [Vercel Dashboard](https://vercel.com/dashboard) → **Add New…** → **Project** → **Import** 你的 `antbim-website` 仓库。
3. Framework 选 **Next.js**，**Root Directory** 若整库就是本项目则留空；若在 monorepo 子目录则填 `antbim-website`。
4. 点 **Deploy**。之后每次 `push` 到默认分支会自动构建。

### 方式 B — Vercel CLI（本机一次性登录）

```bash
cd antbim-website
npx vercel login          # 浏览器完成授权
npx vercel                # 首次：按提示 Link 到团队/项目
npx vercel --prod         # 生产环境
```

首次 `npx vercel` 会问是否关联现有 Project；选创建新 Project 即可。生产域名形如 `https://antbim-website-xxx.vercel.app`（以 CLI 输出为准）。

### 方式 C — 仅 Token（CI / 无浏览器环境）

在 Vercel → **Account Settings** → **Tokens** 创建 Token，然后：

```bash
cd antbim-website
VERCEL_TOKEN=你的token npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```

（勿将 Token 提交进仓库；在 GitHub Actions 里用 **Secrets** 注入。）

## 说明

- 文案与模块对齐官网公开介绍（产品、解决方案、案例、资讯、ERP、服务承诺与联系方式等）；**电话与备案号**等与公开页一致，便于替换为正式运营物料。
- 顶栏「注册 / 登录」与底部按钮为占位，接入真实认证或 CRM 表单即可。
