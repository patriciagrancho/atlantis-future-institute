import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PREVIEW_COOKIE, PREVIEW_CODE } from "@/lib/preview-auth";

// Next.js 16: the `middleware` convention was renamed to `proxy`.
// Gates the private app areas behind the preview access code.
export function proxy(request: NextRequest) {
  const token = request.cookies.get(PREVIEW_COOKIE)?.value;

  if (token === PREVIEW_CODE) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/explore",
    "/explore/:path*",
    "/dashboard",
    "/dashboard/:path*",
    "/partner-portal",
    "/partner-portal/:path*",
  ],
};
