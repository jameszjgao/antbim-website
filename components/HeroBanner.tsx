"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { antbimAsset } from "@/lib/antbim-assets";

const slides = antbimAsset.banners;

export function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-50/82 via-slate-50/72 to-slate-50 dark:from-ink-950/90 dark:via-ink-950/82 dark:to-ink-950"
        aria-hidden
      />
      <div className="pointer-events-auto absolute bottom-5 left-1/2 z-[1] flex -translate-x-1/2 gap-1.5 sm:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-brand-500" : "w-1.5 bg-slate-400/70 dark:bg-white/40"
            }`}
            aria-label={`轮播第 ${i + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
