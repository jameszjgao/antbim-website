import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { antbimAsset, caseCardImages } from "@/lib/antbim-assets";
import {
  aboutPoints,
  bottomStats,
  cases,
  erpSection,
  faqItems,
  featureBlocks,
  heroHighlights,
  heroPrimaryCopy,
  heroSecondaryCopy,
  heroSupportingLine,
  conversion,
  industryTags,
  legacyPublicPaths,
  midFunnelCta,
  news,
  officialBrandStory,
  productModules,
  scenarioTags,
  siteMeta,
  solutionCopy,
  stats,
  whyAntbim,
  resourceHubItems,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero — 与官网首屏结构：浅底、水印、单卡片主图、CTA 在图下 */}
        <section className="relative overflow-hidden bg-[#f5f6f8] dark:bg-ink-950">
          <p
            className="pointer-events-none absolute -left-4 top-10 select-none whitespace-nowrap font-bold leading-none tracking-tight text-slate-200/90 dark:text-white/[0.04] sm:top-16"
            style={{ fontSize: "clamp(4.5rem, 18vw, 11rem)" }}
            aria-hidden
          >
            数字化经营
          </p>
          <div
            className="pointer-events-none absolute -right-24 top-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-brand-400/25 to-transparent blur-3xl dark:from-brand-500/15"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:pb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-100">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-300" />
              多年领跑项目管理赛道
            </div>
            <h1 className="mt-5 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight dark:text-white">
              蚂蚁分工 · 助力管理体系流程落地的项目管理系统
            </h1>
            <p className="mt-2 text-sm font-medium text-brand-800 dark:text-brand-200">{heroSupportingLine}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {heroPrimaryCopy}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-[15px] dark:text-slate-400">
              {heroSecondaryCopy}
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_12px_48px_-16px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-ink-900/90 dark:shadow-none sm:p-5 lg:p-6">
              <Image
                src={antbimAsset.brandHeroIllustration}
                alt="蚂蚁分工项目 ERP — 订单、进度、成本、预算、质量、资源、知识库能力一览"
                width={4040}
                height={2404}
                className="mx-auto h-auto w-full max-w-[1100px] object-contain"
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={legacyPublicPaths.messageBoard}
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-sm transition hover:bg-brand-400 dark:shadow-glow"
              >
                扫码试用 / 预约演示
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={legacyPublicPaths.product}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                了解产品能力
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroHighlights.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/60 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-gradient-to-b dark:from-white/[0.07] dark:to-transparent dark:shadow-soft"
                >
                  <div className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Antbim — 中段信任与差异化 */}
        <section className="scroll-mt-20 border-t border-slate-200 bg-white py-14 dark:border-white/5 dark:bg-ink-950/40 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">为什么选择蚂蚁分工</p>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-slate-900 dark:text-white">
              易协云旗下项目管理系统，面向项目型业务经营与体系落地
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{officialBrandStory}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {whyAntbim.map((w) => (
                <article
                  key={w.title}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-ink-900/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-700 dark:text-brand-300">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{w.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product */}
        <section
          id="product"
          className="scroll-mt-20 border-t border-slate-200 bg-slate-100/70 py-16 dark:border-white/5 dark:bg-ink-900/40 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">产品</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
                覆盖项目经营全链路的能力矩阵
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                以下八大模块覆盖从订单到知识沉淀的全链路能力，可按企业阶段分步上线；预约演示可针对您的行业组合讲解。
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {productModules.map((m) => (
                <article
                  key={m.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-brand-400/40 hover:shadow-md dark:border-white/10 dark:bg-ink-950/40 dark:hover:border-brand-500/35 dark:hover:shadow-glow"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-700 ring-1 ring-brand-500/25 dark:text-brand-300">
                      <Layers3 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-100">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature blocks */}
        <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/5 dark:bg-transparent sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">能力纵深</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
                模板、规则、任务、组合应用与分析一体化
              </h2>
            </div>

            <div className="mt-12 space-y-12">
              {featureBlocks.map((block, idx) => (
                <div
                  key={block.id}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-950/40"
                >
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-100 pb-5 dark:border-white/5">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300/90">
                        {block.eyebrow}
                      </p>
                      <h3 className="mt-1.5 text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">{block.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                        {block.lead}
                      </p>
                      <p className="mt-3 border-l-2 border-brand-400/80 pl-3 text-sm font-medium text-slate-800 dark:border-brand-500/60 dark:text-brand-100">
                        {block.marketingOutcome}
                      </p>
                    </div>
                    <span className="text-5xl font-bold tabular-nums text-slate-100 dark:text-white/[0.06]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {block.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-800 dark:border-white/5 dark:bg-ink-900/50 dark:text-slate-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid funnel CTA */}
        <section className="border-t border-slate-200 bg-gradient-to-r from-brand-500/[0.14] via-amber-50 to-brand-500/[0.08] py-12 dark:border-white/5 dark:from-brand-500/10 dark:via-ink-900 dark:to-ink-950 sm:py-14">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{midFunnelCta.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{midFunnelCta.body}</p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:shrink-0">
              <a
                href={conversion.demo.href}
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-ink-950 shadow-sm transition hover:bg-brand-400"
              >
                预约演示
              </a>
              <a
                href={conversion.download.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-800/15 bg-white/90 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                免费下载
              </a>
            </div>
          </div>
        </section>

        {/* ERP */}
        <section className="border-t border-slate-200 bg-gradient-to-b from-brand-500/[0.12] via-slate-50 to-slate-50 py-16 dark:border-white/5 dark:from-brand-500/10 dark:via-ink-950 dark:to-ink-950 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <LineChart className="h-3.5 w-3.5 text-brand-600 dark:text-brand-300" />
                  业财融合 · 项目型 ERP
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">{erpSection.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">{erpSection.body}</p>
                <p className="mt-3 text-sm font-medium text-brand-800 dark:text-brand-200">{erpSection.marketingHook}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {erpSection.ctas.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-brand-400/60 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-brand-400/50 dark:hover:bg-white/10"
                    >
                      {c.label}
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
                      className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-ink-900/60"
                    >
                      <card.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                      <div className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{card.t}</div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{card.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section
          id="solutions"
          className="scroll-mt-20 border-t border-slate-200 bg-white py-16 dark:border-white/5 dark:bg-transparent sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">解决方案</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">行业 × 场景，双轴覆盖</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                与官网解决方案体系一致：先按行业锁定典型项目形态，再按场景配置流程、模板与看板，缩短从签约到上线的时间。
              </p>
            </div>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{solutionCopy.industryTitle}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{solutionCopy.industryLead}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industryTags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-ink-900/60 dark:text-slate-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{solutionCopy.scenarioTitle}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{solutionCopy.scenarioLead}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {scenarioTags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-amber-950 dark:text-brand-100"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section
          id="cases"
          className="scroll-mt-20 border-t border-slate-200 bg-slate-100/60 py-16 dark:border-white/5 dark:bg-ink-900/35 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">客户案例</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
                  超过 2000 家企业客户成功案例
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                  真实客户在不同行业与场景下的落地节选，用于评估与您企业的匹配度；完整案例库可在对接后获取。
                </p>
              </div>
              <a
                href={legacyPublicPaths.testimonials}
                className="text-sm font-medium text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
              >
                更多客户案例 →
              </a>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {cases.map((c, i) => (
                <article
                  key={c.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-ink-950/50"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-ink-900">
                    <Image
                      src={caseCardImages[i]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full bg-brand-500/15 px-2.5 py-0.5 text-[11px] font-medium text-brand-800 ring-1 ring-brand-500/35 dark:text-brand-200 dark:ring-brand-500/30">
                      {c.tag}
                    </span>
                    <h3 className="mt-4 text-base font-semibold leading-snug text-slate-900 dark:text-white">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.excerpt}</p>
                    <p className="mt-3 text-xs font-medium text-brand-800 dark:text-brand-200">成果聚焦：{c.outcome}</p>
                    <span className="mt-4 text-xs text-slate-400 dark:text-slate-600">客户案例</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50 py-14 dark:border-white/5 dark:bg-ink-900/30 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">常见问题</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">购买与落地前，客户最常问的几件事</h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-200 bg-white open:shadow-sm dark:border-white/10 dark:bg-ink-950/50"
                >
                  <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-slate-900 marker:content-none dark:text-white [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-2">
                      {item.q}
                      <span className="text-slate-400 transition group-open:rotate-180">▼</span>
                    </span>
                  </summary>
                  <p className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600 dark:border-white/5 dark:text-slate-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Resources / News — 保留 #resources 锚点便于旧版单页内链 */}
        <section
          id="resources"
          className="scroll-mt-20 border-t border-slate-200 bg-white py-16 dark:border-white/5 dark:bg-transparent sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">资源中心</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">资讯 · 实践 · 资料 · 帮助</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  与官网资源中心导航一致：持续输出方法论、实践案例与可下载资料，支撑企业项目管理与数字化经营能力建设。
                </p>
                <ul className="mt-6 space-y-2">
                  {resourceHubItems.map((r) => (
                    <li
                      key={r.name}
                      className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="font-medium text-slate-800 dark:text-slate-100">{r.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{r.hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-8">
                <div className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">资讯动态</div>
                <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:divide-white/10 dark:border-white/10 dark:bg-ink-900/40">
                  {news.map((n) => (
                    <li
                      key={n.title}
                      className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-sm text-slate-800 dark:text-slate-200">{n.title}</span>
                      <time className="shrink-0 text-xs text-slate-500">{n.date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-white/5 dark:bg-transparent">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {bottomStats.map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-slate-200/80 bg-gradient-to-r from-brand-500/20 to-transparent p-6 dark:border-white/10 dark:from-brand-500/15"
                >
                  <div className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                    {b.value}
                    <span className="text-brand-600 dark:text-brand-300">{b.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / CTA */}
        <section
          id="cta"
          className="scroll-mt-20 border-t border-slate-200 bg-slate-100/70 py-16 dark:border-white/5 dark:bg-ink-900/50 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">了解蚂蚁分工</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {aboutPoints.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                  提交预约或致电后，顾问将结合行业与项目形态安排演示或发送试用与资料包；支持私有化与集成评估。
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-md dark:border-white/10 dark:from-white/[0.08] dark:to-transparent dark:shadow-soft">
                <div className="flex items-center gap-2">
                  <Image src={antbimAsset.iconPhone} alt="" width={28} height={28} className="object-contain" />
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">全国统一服务热线</div>
                </div>
                <a
                  href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
                  className="mt-2 block text-3xl font-semibold tracking-tight text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                >
                  {siteMeta.phone}
                </a>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={conversion.demo.href}
                    className="rounded-xl bg-brand-500 py-3 text-center text-sm font-semibold text-ink-950 transition hover:bg-brand-400"
                  >
                    预约演示
                  </a>
                  <a
                    href={conversion.consult.href}
                    className="rounded-xl border border-slate-300 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                  >
                    预约咨询
                  </a>
                  <a
                    href={conversion.download.href}
                    className="rounded-xl border border-slate-300 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5 sm:col-span-2"
                  >
                    免费下载 / 扫码试用
                  </a>
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
