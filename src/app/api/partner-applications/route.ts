import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// POST — submit a partner application
export async function POST(request: Request) {
  const b = await request.json().catch(() => ({}));

  if (!b?.brandName || !b?.contactEmail) {
    return NextResponse.json(
      { ok: false, error: "Brand name and contact email are required." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("partner_applications").insert({
    brand_name: b.brandName ?? null,
    category: b.category ?? null,
    location: b.location ?? null,
    website: b.website ?? null,
    contact_name: b.contactName ?? null,
    contact_title: b.contactTitle ?? null,
    contact_phone: b.contactPhone ?? null,
    contact_email: b.contactEmail ?? null,
    concept: b.concept ?? null,
    exclusive_benefits: b.exclusiveBenefits ?? null,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
