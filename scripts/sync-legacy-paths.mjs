#!/usr/bin/env node
/**
 * 从 antbim.com sitemap.xml 拉取全部 <loc>，生成 lib/migration/legacy-paths.ts。
 * 首页 `/` 由 Next 承接，不写入清单。若原站另有未进 sitemap 的入口，请在 EXTRA_PATHNAMES 中补全后重新运行。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "lib", "migration", "legacy-paths.ts");
const SITEMAP_URL = process.env.ANTBIM_SITEMAP_URL ?? "https://www.antbim.com/sitemap.xml";

/** @type {string[]} */
const EXTRA_PATHNAMES = ["/wxGetOpenId.jsp"];

async function main() {
  const res = await fetch(SITEMAP_URL, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  if (locs.length === 0) {
    throw new Error("No <loc> entries found in sitemap");
  }

  const paths = new Set();
  for (const u of locs) {
    let p;
    try {
      p = new URL(u).pathname || "/";
    } catch {
      continue;
    }
    if (p !== "/") {
      paths.add(p);
    }
  }
  for (const e of EXTRA_PATHNAMES) {
    paths.add(e);
  }

  const sorted = [...paths].sort();

  const lines = [
    "/**",
    " * 与 antbim.com `sitemap.xml` 同步的完整路径清单（用于 1:1 URL 迁移）。",
    " * 首页 `/` 由 Next 承接，不在此代理。",
    " * 生成：node scripts/sync-legacy-paths.mjs",
    " */",
    "",
    "export const LEGACY_PATHNAMES: readonly string[] = [",
    ...sorted.map((p) => `  ${JSON.stringify(p)},`),
    "] as const;",
    "",
    "export const LEGACY_PATHNAME_SET = new Set<string>(LEGACY_PATHNAMES as readonly string[]);",
    "",
    "export function isLegacyProxiedPath(pathname: string): boolean {",
    "  if (pathname === '/' || pathname === '') return false;",
    "  if (LEGACY_PATHNAME_SET.has(pathname)) return true;",
    "  if (LEGACY_PATHNAME_SET.has(pathname + '/')) return true;",
    "  if (pathname.endsWith('/') && LEGACY_PATHNAME_SET.has(pathname.replace(/\\/$/, ''))) return true;",
    "  return false;",
    "}",
    "",
  ];

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, lines.join("\n"), "utf8");
  console.log(`Wrote ${sorted.length} pathnames to ${path.relative(ROOT, OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
