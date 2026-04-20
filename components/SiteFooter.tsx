import Image from "next/image";
import { Phone } from "lucide-react";
import { footerLinks, siteMeta } from "@/lib/site-content";
import { antbimAsset } from "@/lib/antbim-assets";

export function SiteFooter() {
  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-slate-100/80 dark:border-white/5 dark:bg-ink-900/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={antbimAsset.logoHeader}
                alt="蚂蚁分工"
                width={100}
                height={86}
                className="h-11 w-auto object-contain object-left"
              />
              <div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">蚂蚁分工</div>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  灵巧便捷，协作高效。帮企业经营好源源不断的项目。
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-800 ring-1 ring-slate-200 transition hover:ring-brand-400/50 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:ring-brand-500/40"
              >
                <Phone className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                全国统一服务热线 · {siteMeta.phone}
              </a>
            </div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.group}>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.group}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="cursor-default hover:text-slate-900 dark:hover:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Copyright © {siteMeta.company} 版权所有 · {siteMeta.icp}
          </span>
          <span className="max-w-md text-slate-400 dark:text-slate-600">
            本页为重设计演示；配图与 Logo 来自蚂蚁分工官网公开 CDN，已镜像至本地仅供展示，正式商用请取得授权并替换素材。
          </span>
        </div>
      </div>
    </footer>
  );
}
