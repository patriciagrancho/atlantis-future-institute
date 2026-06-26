import { NextResponse } from "next/server";
import { PREVIEW_COOKIE, PREVIEW_CODE } from "@/lib/preview-auth";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

// POST — verify the access code and set the preview cookie (login)
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const code = typeof body?.code === "string" ? body.code.trim() : "";

  if (code && code === PREVIEW_CODE) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(PREVIEW_COOKIE, PREVIEW_CODE, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: THIRTY_DAYS,
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}

// DELETE — clear the preview cookie (logout)
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(PREVIEW_COOKIE, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}
