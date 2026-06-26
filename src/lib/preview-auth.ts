/**
 * Lightweight preview-access gate (pre-Supabase).
 *
 * A single shared access code gates the private app areas (/explore,
 * /partner-portal) so the public only sees the landing page. Swap this for
 * real Supabase Auth (per-user member/partner/admin roles) before launch.
 *
 * Change the code via the PREVIEW_ACCESS_CODE env var:
 *   - local:      set it in .env.local
 *   - production: fly secrets set PREVIEW_ACCESS_CODE=your-code
 */
export const PREVIEW_COOKIE = "evoluteon_preview";

export const PREVIEW_CODE = process.env.PREVIEW_ACCESS_CODE || "evoluteon2026";
