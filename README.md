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

### 方式 A — 从 GitHub 发布（推荐，Push 即自动部署）

**前提**：代码已在 GitHub 上（见上文「推送到 GitHub」），默认分支一般为 **`main`**。

1. 打开 [Vercel Dashboard](https://vercel.com/dashboard) → **Add New…** → **Project**。
2. **Import Git Repository**：若首次使用，按提示安装 **Vercel GitHub App**，并勾选要授权的仓库（至少包含 **`antbim-website`**）。
3. 选中仓库 → **Import**。在配置页确认：
   - **Framework Preset**：**Next.js**（通常会自动识别）
   - **Root Directory**：本仓库根目录就是 Next 项目 → 留空 **`.`**；若将来放进 monorepo 子目录，再填例如 **`antbim-website`**
   - **Build Command** / **Output Directory**：保持默认即可（`next build` / Vercel 托管）
4. 无需填环境变量即可部署本静态营销站 → 点 **Deploy**。
5. 完成后在 **Project → Settings → Git** 可确认：**Production Branch**（一般为 `main`）、是否对 **Pull Request** 开启 **Preview Deployments**（默认开启则每个 PR 有预览 URL）。

之后只需 **`git push origin main`**，Vercel 会自动生产部署；其他分支 / PR 可生成预览环境（以 Dashboard 设置为准）。

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
