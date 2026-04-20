import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  aboutPoints,
  bottomStats,
  cases,
  erpSection,
  featureBlocks,
  heroHighlights,
  news,
  productModules,
  siteMeta,
  stats,
} from "@/lib/site-content";

const solutionTiles = [
  { title: "行业解决方案", desc: "制造、汽车装备、电子、项目型服务等多行业最佳实践。" },
  { title: "场景解决方案", desc: "订单交付、研发制造、质量与合规、成本与利润等场景化打法。" },
];

const resourceHub = [
  "资讯中心",
  "功能实践",
  "资料下载",
  "PM 干货",
  "企业动态",
  "帮助中心",
  "帮助手册",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,138,7,0.35),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:24px_24px] opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:pb-28 lg:pt-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-100">
              <Sparkles className="h-3.5 w-3.5" />
              多年领跑平台项目管理类目
            </div>
            <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              蚂蚁分工
              <span className="block text-slate-300 sm:mt-1 sm:inline sm:before:content-['·_']">
                助力管理体系流程落地的项目管理系统
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              帮企业经营好源源不断的项目：从商机到交付、从进度到成本、从质量风险到知识沉淀，一套平台覆盖项目型业务全链路。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-brand-400"
              >
                扫码试用 / 预约演示
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                了解产品能力
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {heroHighlights.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-ink-900/60 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 shadow-soft"
                >
                  <div className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="scroll-mt-20 border-t border-white/5 bg-ink-900/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">产品</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">覆盖项目经营全链路的能力矩阵</h2>
              <p className="mt-3 text-slate-400">
                订单商务跟进、流程进度、料工费成本、预算利润、质量风险、企业资源、文档知识库与可插拔 JS 插件——全面用上蚂蚁分工公开介绍中的模块要点。
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {productModules.map((m) => (
                <article
                  key={m.title}
                  className="group rounded-2xl border border-white/10 bg-ink-950/40 p-6 transition hover:border-brand-500/35 hover:shadow-glow"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/25">
                      <Layers3 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-brand-100">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature blocks */}
        <section className="border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">能力纵深</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">模板、规则、任务、组合应用与分析一体化</h2>
            </div>

            <div className="mt-12 space-y-14">
              {featureBlocks.map((block, idx) => (
                <div
                  key={block.id}
                  className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-10 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300/90">{block.eyebrow}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{block.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{block.lead}</p>
                    <div className="mt-6 hidden text-6xl font-bold text-white/[0.04] lg:block">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {block.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 rounded-xl border border-white/5 bg-ink-950/50 px-3 py-2.5 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP */}
        <section className="border-t border-white/5 bg-gradient-to-b from-brand-500/10 via-ink-950 to-ink-950 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  <LineChart className="h-3.5 w-3.5 text-brand-300" />
                  业财融合 · 项目型 ERP
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{erpSection.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{erpSection.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {erpSection.ctas.map((c) => (
                    <a
                      key={c}
                      href="#cta"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-400/50 hover:bg-white/10"
                    >
                      {c}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: BarChart3, t: "经营驾驶舱", d: "项目利润、预算执行、风险预警一屏掌握" },
                    { icon: ShieldCheck, t: "过程合规", d: "审批、文件、版本与审计轨迹可追溯" },
                    { icon: Users2, t: "伙伴协同", d: "项目间、伙伴间任务与资料安全协作" },
                    { icon: CalendarClock, t: "日历与排期", d: "企业日历规则 + 多项目排期对齐" },
                  ].map((card) => (
                    <div
                      key={card.t}
                      className="rounded-2xl border border-white/10 bg-ink-900/60 p-4"
                    >
                      <card.icon className="h-5 w-5 text-brand-400" />
                      <div className="mt-3 text-sm font-semibold text-white">{card.t}</div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{card.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="scroll-mt-20 border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">解决方案</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">行业 × 场景，双轴覆盖</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {solutionTiles.map((s) => (
                <div key={s.title} className="rounded-2xl border border-white/10 bg-ink-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="scroll-mt-20 border-t border-white/5 bg-ink-900/35 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">客户案例</p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">超过 2000 家企业客户成功案例</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">成功经验的例证，用户真实的声音（节选官网公开案例表述）。</p>
              </div>
              <a href="#resources" className="text-sm font-medium text-brand-300 hover:text-brand-200">
                更多客户案例 →
              </a>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {cases.map((c) => (
                <article key={c.title} className="flex flex-col rounded-2xl border border-white/10 bg-ink-950/50 p-6">
                  <span className="w-fit rounded-full bg-brand-500/15 px-2.5 py-0.5 text-[11px] font-medium text-brand-200 ring-1 ring-brand-500/30">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-white">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{c.excerpt}</p>
                  <span className="mt-6 text-xs text-slate-600">客户案例</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resources / News */}
        <section id="resources" className="scroll-mt-20 border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">资源中心</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">资讯 · 实践 · 资料 · 帮助</h2>
                <p className="mt-3 text-sm text-slate-400">
                  为企业提供项目管理、数字化经营知识；下列入口名称与官网导航一致，便于你后续替换为真实链接。
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {resourceHub.map((r) => (
                    <li
                      key={r}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-8">
                <div className="mb-4 text-sm font-semibold text-white">资讯动态</div>
                <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-ink-900/40">
                  {news.map((n) => (
                    <li key={n.title} className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm text-slate-200">{n.title}</span>
                      <time className="shrink-0 text-xs text-slate-500">{n.date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-t border-white/5 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {bottomStats.map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-r from-brand-500/15 to-transparent p-6"
                >
                  <div className="text-3xl font-semibold text-white sm:text-4xl">
                    {b.value}
                    <span className="text-brand-300">{b.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / CTA */}
        <section id="cta" className="scroll-mt-20 border-t border-white/5 bg-ink-900/50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">了解蚂蚁分工</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {aboutPoints.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                  公开信息中的商务入口包括：预约咨询、预约演示、免费下载、扫码试用等，你可在此区块接入表单或企业微信。
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8 shadow-soft">
                <div className="text-sm font-semibold text-white">全国统一服务热线</div>
                <a
                  href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
                  className="mt-2 block text-3xl font-semibold tracking-tight text-brand-300 hover:text-brand-200"
                >
                  {siteMeta.phone}
                </a>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-xl bg-brand-500 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brand-400"
                  >
                    预约演示
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    预约咨询
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:col-span-2"
                  >
                    免费下载 / 扫码试用
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
