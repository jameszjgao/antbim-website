"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { antbimAsset } from "@/lib/antbim-assets";
import { siteMeta } from "@/lib/site-content";

type BrandLogoProps = {
  className?: string;
  /** 页脚略放大 */
  size?: "default" | "footer";
  /** 首屏顶栏建议开启以优化 LCP */
  priority?: boolean;
};

/**
 * 原站横版标识：图标 +「蚂蚁分工」字标（`public/assets/antbim/logo-wordmark.png`）。
 */
export function BrandLogo({ className, size = "default", priority = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteMeta.productName} — 返回首页`}
      className={clsx(
        "flex min-w-0 shrink-0 items-center outline-none ring-brand-500/40 focus-visible:ring-2",
        className,
      )}
    >
      <Image
        src={antbimAsset.logoWordmark}
        alt="蚂蚁分工 Logo"
        width={264}
        height={64}
        priority={priority}
        className={clsx(
          "w-auto object-contain object-left",
          size === "footer" ? "h-10 sm:h-11" : "h-8 sm:h-9",
        )}
      />
    </Link>
  );
}
