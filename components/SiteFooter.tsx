import { Phone } from "lucide-react";
import { footerLinks, siteMeta } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-white/5 bg-ink-900/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-base font-bold text-ink-950">
                蚂
              </span>
              <div>
                <div className="text-lg font-semibold text-white">蚂蚁分工</div>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                  灵巧便捷，协作高效。帮企业经营好源源不断的项目。
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition hover:ring-brand-500/40"
              >
                <Phone className="h-4 w-4 text-brand-400" />
                全国统一服务热线 · {siteMeta.phone}
              </a>
            </div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.group}>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.group}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="cursor-default hover:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Copyright © {siteMeta.company} 版权所有 · {siteMeta.icp}
          </span>
          <span className="text-slate-600">本页为设计重制演示站点，非官方托管。</span>
        </div>
      </div>
    </footer>
  );
}
