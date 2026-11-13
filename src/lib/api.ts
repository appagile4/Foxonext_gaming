/**
 * Global API Client Configuration
 * Strictly resolves API endpoints from process.env.NEXT_PUBLIC_API_URL.
 * No hardcoded localhost or port 5000 fallbacks.
 */

const rawEnv = (process.env.NEXT_PUBLIC_API_URL || "").trim().replace(/\/+$/, "");

// Normalize API base to always point to the /api endpoint root
export const API_BASE_URL: string = rawEnv
  ? rawEnv.endsWith("/api")
    ? rawEnv
    : `${rawEnv}/api`
  : "https://api.foxonext.com/api";

/**
 * Returns a complete URL for any API endpoint.
 *
 * In browser on localhost/127.0.0.1:
 * Routes through Next.js rewrite proxy (/api/...) to prevent browser CORS blocks
 * because live API server only permits production origins (https://foxonext.com).
 *
 * In production or server-side SSR:
 * Directly targets the configured API_BASE_URL from process.env.NEXT_PUBLIC_API_URL.
 */
export function getApiUrl(path: string): string {
  const cleanPath = path.trim().replace(/^\/+/, "");
  const finalPath = cleanPath.startsWith("api/") ? cleanPath.slice(4) : cleanPath;

  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ) {
    return `/api/${finalPath}`;
  }

  return `${API_BASE_URL}/${finalPath}`;
}

export default getApiUrl;
