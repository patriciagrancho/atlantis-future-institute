/**
 * Admin gate for the founder-only dashboard (/admin).
 *
 * Separate from the tester preview code (PREVIEW_ACCESS_CODE) so people you
 * share the preview with can't see submission data.
 *
 * Change the code via the ADMIN_ACCESS_CODE env var.
 */
export const ADMIN_COOKIE = "evoluteon_admin";

export const ADMIN_CODE = process.env.ADMIN_ACCESS_CODE || "evoluteon-admin-2026";
