import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLegacyProxiedPath } from "@/lib/migration/legacy-paths";

/**
 * 迁移期：将 sitemap 收录的遗留 path 回源到旧站 HTML（由环境变量指定），保证 1:1 URL 可访问。
 * 生产域名已指向本仓库时，切勿将 LEGACY_UPSTREAM_ORIGIN 设为同源，否则会自指循环。
 */
export function middleware(request: NextRequest) {
  const flag = process.env.LEGACY_PROXY_ENABLED;
  const enabled = flag === "1" || flag === "true";
  const raw = process.env.LEGACY_UPSTREAM_ORIGIN?.trim();
  const upstream = raw?.replace(/\/$/, "") ?? "";

  if (!enabled || !upstream) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  if (!isLegacyProxiedPath(pathname)) {
    return NextResponse.next();
  }

  const dest = `${upstream}${pathname}${request.nextUrl.search}`;
  return NextResponse.rewrite(new URL(dest));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets/).*)"],
};
