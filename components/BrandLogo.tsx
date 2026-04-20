import Link from "next/link";
import { clsx } from "clsx";

type BrandLogoProps = {
  className?: string;
  /** 页脚略放大图标格 */
  size?: "default" | "footer";
};

/**
 * 与官网首屏一致的识别：左侧橙色圆角标 +「蚂蚁分工」+「项目管理系统」。
 */
export function BrandLogo({ className, size = "default" }: BrandLogoProps) {
  const mark = size === "footer" ? "h-11 w-11 text-lg" : "h-10 w-10 text-base";

  return (
    <Link
      href="/"
      className={clsx("flex min-w-0 items-center gap-2.5 outline-none ring-brand-500/40 focus-visible:ring-2", className)}
    >
      <span
        className={clsx(
          "grid shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#ff9a1a] to-[#e86800] font-bold text-white shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10",
          mark,
        )}
        aria-hidden
      >
        蚂
      </span>
      <div className="min-w-0 leading-tight">
        <div className="text-[15px] font-semibold tracking-wide text-slate-900 dark:text-white">
          蚂蚁分工
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400">项目管理系统</div>
      </div>
    </Link>
  );
}
