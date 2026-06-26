import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// POST — attach quick-survey answers to a waitlist member (by email)
export async function POST(request: Request) {
  const b = await request.json().catch(() => ({}));
  const email =
    typeof b?.email === "string" ? b.email.trim().toLowerCase() : "";

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  // No email to attach to — accept silently so the UX still completes.
  if (!email) return NextResponse.json({ ok: true });

  const { error } = await supabase
    .from("waitlist")
    .update({
      issue: b.issue || null,
      monthly_invest: b.monthlyInvest || null,
      skip_waitlist: b.skipWaitlist || null,
      skip_amount: b.skipAmount || null,
    })
    .eq("email", email);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
