"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { clsx } from "clsx";
import { navPrimary, siteMeta } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-colors",
        scrolled ? "bg-ink-950/90" : "bg-ink-950/70",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-ink-950 shadow-glow">
            蚂
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">蚂蚁分工</div>
            <div className="text-[11px] text-slate-400">项目管理系统</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navPrimary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-brand-500/40 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-brand-400" aria-hidden />
            {siteMeta.phone}
          </a>
          <a
            href="#cta"
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-brand-400"
          >
            预约演示
          </a>
          <button
            type="button"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/5"
          >
            注册 / 登录
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-ink-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navPrimary.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-sm"
            >
              <Phone className="h-4 w-4 text-brand-400" />
              {siteMeta.phone}
            </a>
            <a
              href="#cta"
              className="rounded-xl bg-brand-500 py-2 text-center text-sm font-semibold text-ink-950"
              onClick={() => setOpen(false)}
            >
              预约演示
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
