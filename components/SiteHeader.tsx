"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { clsx } from "clsx";
import { conversion, navPrimary, siteMeta } from "@/lib/site-content";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandLogo } from "@/components/BrandLogo";
import { antbimAsset } from "@/lib/antbim-assets";

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
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors",
        "border-slate-200/80 bg-white/90 dark:border-white/5 dark:bg-ink-950/70",
        scrolled && "bg-white/95 shadow-sm dark:bg-ink-950/90 dark:shadow-none",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <BrandLogo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navPrimary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 transition hover:border-brand-400/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-500/40 dark:hover:text-white"
          >
            <Image
              src={antbimAsset.iconPhone}
              alt=""
              width={20}
              height={20}
              className="h-3.5 w-3.5 object-contain opacity-90 dark:opacity-100"
            />
            {siteMeta.phone}
          </a>
          <a
            href={conversion.demo.href}
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-sm transition hover:bg-brand-400 dark:shadow-glow"
          >
            预约演示
          </a>
          <Link
            href={conversion.login.href}
            className="px-2 py-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            注册 / 登录
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/5 dark:bg-ink-950/95 lg:hidden">
          <div className="flex flex-col gap-1">
            {navPrimary.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`tel:${siteMeta.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2 text-sm dark:border-white/10"
            >
              <Image src={antbimAsset.iconPhone} alt="" width={18} height={18} className="object-contain" />
              {siteMeta.phone}
            </a>
            <a
              href={conversion.demo.href}
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
