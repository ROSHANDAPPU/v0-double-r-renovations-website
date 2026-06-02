/**
 * Base path prefix for raw <img> src and CSS background-image urls.
 *
 * Next.js <Image> component handles basePath automatically,
 * but raw HTML <img> tags and inline CSS background-image need this.
 *
 * In local dev: "" (empty)
 * On GH Pages: "/v0-double-r-renovations-website"
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
