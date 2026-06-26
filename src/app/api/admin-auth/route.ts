import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_CODE } from "@/lib/admin-auth";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

// POST — verify the admin code and set the admin cookie
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const code = typeof body?.code === "string" ? body.code.trim() : "";

  if (code && code === ADMIN_CODE) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE, ADMIN_CODE, {
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

// DELETE — clear the admin cookie (logout)
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}
