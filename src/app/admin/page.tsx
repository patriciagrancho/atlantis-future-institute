import { cookies } from "next/headers";
import { ADMIN_COOKIE, ADMIN_CODE } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase";
import AdminGate from "@/components/AdminGate";

export const metadata = { title: "Admin · Evoluteon" };
export const dynamic = "force-dynamic";

type WaitlistRow = {
  id: string;
  email: string;
  created_at: string;
  status: string;
  issue: string | null;
  monthly_invest: string | null;
  skip_waitlist: string | null;
  skip_amount: string | null;
};
type PartnerRow = {
  id: string;
  brand_name: string | null;
  category: string | null;
  location: string | null;
  website: string | null;
  contact_name: string | null;
  contact_title: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  concept: string | null;
  exclusive_benefits: string | null;
  created_at: string;
  status: string;
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function normalizeUrl(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function Field({
  label,
  value,
  href,
  highlight,
}: {
  label: string;
  value: string | null;
  href?: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <dt className="text-[0.55rem] uppercase tracking-[0.15em] text-stone-400 mb-1">
        {label}
      </dt>
      <dd
        className={`text-sm break-words ${
          value
            ? highlight
              ? "text-gold-dark font-medium"
              : "text-stone-700"
            : "text-stone-300"
        }`}
      >
        {value ? (
          href ? (
            <a
              href={href}
              className="underline decoration-stone-300 hover:decoration-stone-700"
            >
              {value}
            </a>
          ) : (
            value
          )
        ) : (
          "—"
        )}
      </dd>
    </div>
  );
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get(ADMIN_COOKIE)?.value === ADMIN_CODE;
  if (!authed) return <AdminGate />;

  const supabase = getSupabaseAdmin();

  let waitlist: WaitlistRow[] = [];
  let partners: PartnerRow[] = [];
  let dbError: string | null = null;

  if (supabase) {
    const [w, p] = await Promise.all([
      supabase.from("waitlist").select("*").order("created_at", { ascending: false }),
      supabase
        .from("partner_applications")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);
    if (w.error || p.error) {
      dbError = w.error?.message || p.error?.message || "Unknown error";
    }
    waitlist = (w.data as WaitlistRow[]) || [];
    partners = (p.data as PartnerRow[]) || [];
  }

  // Signups in the last 7 days (momentum metric for investors)
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const recentWaitlist = waitlist.filter(
    (r) => new Date(r.created_at).getTime() >= weekAgo,
  ).length;

  // Demand signals (validation for investors)
  const surveyed = waitlist.filter(
    (r) => r.issue || r.monthly_invest || r.skip_waitlist,
  ).length;
  const wouldPayPriority = waitlist.filter(
    (r) => r.skip_waitlist === "Yes, I'd pay for priority",
  ).length;
  const wouldPayAny = waitlist.filter(
    (r) => r.monthly_invest && !r.monthly_invest.startsWith("€0"),
  ).length;

  return (
    <main className="min-h-screen pt-16 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-12">
          <div>
            <p className="label-luxury mb-4">founder dashboard</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Interest, at a glance.
            </h1>
          </div>
          <form action="/api/admin-auth" method="post">
            <a
              href="/"
              className="text-[0.65rem] uppercase tracking-[0.15em] text-stone-400 hover:text-stone-700 transition-colors"
            >
              View site
            </a>
          </form>
        </div>

        {!supabase && (
          <div className="glass-card rounded-[2rem] p-8 mb-8">
            <p className="font-serif text-xl text-stone-900 mb-2">
              Connect Supabase to see submissions
            </p>
            <p className="text-sm text-stone-500 font-light leading-relaxed">
              Add <code className="text-stone-700">SUPABASE_URL</code> and{" "}
              <code className="text-stone-700">SUPABASE_SERVICE_ROLE_KEY</code> to
              your environment, then run the schema. Counts and lists will appear
              here automatically.
            </p>
          </div>
        )}

        {dbError && (
          <div className="glass-card rounded-[2rem] p-6 mb-8">
            <p className="text-sm text-stone-600">
              Database error: {dbError}. Did you run the schema SQL?
            </p>
          </div>
        )}

        {/* Counts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-400 mb-5">
              Waitlist Signups
            </p>
            <p className="font-serif text-5xl font-light text-stone-900 leading-none">
              {waitlist.length}
            </p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-400 mb-5">
              Partner Applications
            </p>
            <p className="font-serif text-5xl font-light text-stone-900 leading-none">
              {partners.length}
            </p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-400 mb-5">
              New This Week
            </p>
            <p className="font-serif text-5xl font-light text-stone-900 leading-none">
              {recentWaitlist}
            </p>
          </div>
        </div>

        {/* Demand signals (validation) */}
        {surveyed > 0 && (
          <div className="glass-card rounded-[2rem] p-8 mb-12">
            <p className="label-luxury mb-6">
              demand signals · {surveyed} surveyed
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-4xl font-light text-stone-900">
                  {wouldPayPriority}
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  would pay to skip the waitlist (priority access)
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-stone-900">
                  {wouldPayAny}
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  would pay €30+/mo for the concierge
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Waitlist */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-stone-900 mb-5">
            Waitlist <span className="text-stone-300">· {waitlist.length}</span>
          </h2>
          <div className="glass-card rounded-[2rem] overflow-hidden">
            {waitlist.length === 0 ? (
              <p className="p-8 text-sm text-stone-400 font-light">
                No signups yet.
              </p>
            ) : (
              <div className="divide-y divide-stone-900/[0.06]">
                {waitlist.map((r) => {
                  const hasSurvey = r.issue || r.monthly_invest || r.skip_waitlist;
                  const priority = r.skip_waitlist === "Yes, I'd pay for priority";
                  return (
                    <div key={r.id} className="px-6 py-5">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <a
                          href={`mailto:${r.email}`}
                          className="text-sm font-medium text-stone-900 truncate hover:text-gold-dark transition-colors"
                        >
                          {r.email}
                        </a>
                        <span className="text-xs text-stone-400 shrink-0">
                          {fmtDate(r.created_at)}
                        </span>
                      </div>
                      {hasSurvey ? (
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3">
                          <Field label="Biggest issue" value={r.issue} />
                          <Field label="Would invest / mo" value={r.monthly_invest} />
                          <Field
                            label="Skip the waitlist"
                            value={
                              priority
                                ? `Yes — priority${r.skip_amount ? ` · ${r.skip_amount}` : ""}`
                                : r.skip_waitlist
                            }
                            highlight={priority}
                          />
                        </dl>
                      ) : (
                        <p className="text-xs text-stone-400 font-light italic">
                          Email only — survey not completed.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Partner applications */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 mb-5">
            Partner Applications{" "}
            <span className="text-stone-300">· {partners.length}</span>
          </h2>
          <div className="glass-card rounded-[2rem] overflow-hidden">
            {partners.length === 0 ? (
              <p className="p-8 text-sm text-stone-400 font-light">
                No applications yet.
              </p>
            ) : (
              <div className="divide-y divide-stone-900/[0.06]">
                {partners.map((r) => (
                  <div key={r.id} className="px-6 py-6">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="font-serif text-xl text-stone-900">
                        {r.brand_name || "—"}
                      </span>
                      <span className="text-xs text-stone-400 shrink-0">
                        {fmtDate(r.created_at)}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mb-5">
                      {[r.category, r.location].filter(Boolean).join(" · ")}
                      {r.website && (
                        <>
                          {(r.category || r.location) && " · "}
                          <a
                            href={normalizeUrl(r.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-stone-300 hover:decoration-stone-700"
                          >
                            {r.website}
                          </a>
                        </>
                      )}
                    </p>
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
                      <Field
                        label="Contact"
                        value={
                          [r.contact_name, r.contact_title]
                            .filter(Boolean)
                            .join(" · ") || null
                        }
                      />
                      <Field
                        label="Email"
                        value={r.contact_email}
                        href={r.contact_email ? `mailto:${r.contact_email}` : undefined}
                      />
                      <Field label="Phone" value={r.contact_phone} />
                    </dl>
                    {r.concept && (
                      <div className="mt-5">
                        <p className="text-[0.55rem] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
                          Concept
                        </p>
                        <p className="text-sm text-stone-700 font-light leading-relaxed whitespace-pre-wrap">
                          {r.concept}
                        </p>
                      </div>
                    )}
                    {r.exclusive_benefits && (
                      <div className="mt-4">
                        <p className="text-[0.55rem] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
                          Exclusive benefits for members
                        </p>
                        <p className="text-sm text-stone-700 font-light leading-relaxed whitespace-pre-wrap">
                          {r.exclusive_benefits}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
