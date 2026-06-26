import MemberNav from "@/components/MemberNav";
import { getExperience } from "@/lib/experiences";

export const metadata = {
  title: "Partner Portal · Evoluteon",
};

const stats = [
  { label: "Profile views (30d)", value: "1,284" },
  { label: "Open requests", value: "3" },
  { label: "Avg. response time", value: "6h" },
];

const requests = [
  {
    initials: "S.A.",
    title: "Longevity Program — full assessment",
    dates: "15–25 Feb 2027",
    guests: 2,
    status: "New",
  },
  {
    initials: "M.K.",
    title: "HBOT + recovery week",
    dates: "3–8 Mar 2027",
    guests: 1,
    status: "In review",
  },
  {
    initials: "L.D.",
    title: "Metabolic reset",
    dates: "12–19 Apr 2027",
    guests: 2,
    status: "Confirmed",
  },
];

const statusStyles: Record<string, string> = {
  New: "bg-gold/15 text-gold-dark",
  "In review": "bg-stone-900/5 text-stone-500",
  Confirmed: "bg-emerald-500/10 text-emerald-700",
};

export default function PartnerPortalPage() {
  const listing = getExperience("healthy-horizon-longevity-club");

  return (
    <>
      <MemberNav />

      <main className="pt-36 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="label-luxury mb-3">partner portal</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-900">
                Healthy Horizon Longevity Club
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-stone-400">
                Lisbon, Portugal · Clinic
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 text-[0.7rem] font-medium uppercase tracking-[0.12em]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Approved · Live
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-[2rem] p-7">
                <p className="font-serif text-3xl text-stone-900">{s.value}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Incoming requests */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <p className="label-luxury">incoming requests</p>
                <span className="text-[0.7rem] uppercase tracking-[0.12em] text-stone-400">
                  {requests.length} total
                </span>
              </div>
              <div className="space-y-3">
                {requests.map((r) => (
                  <div
                    key={r.initials + r.title}
                    className="glass-card rounded-[1.75rem] p-5 flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-full bg-stone-900 text-cream flex items-center justify-center text-xs font-medium shrink-0">
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-stone-900 truncate">{r.title}</p>
                      <p className="text-xs text-stone-400 mt-0.5">
                        {r.dates} · {r.guests} {r.guests === 1 ? "guest" : "guests"}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1.5 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.12em] shrink-0 ${statusStyles[r.status]}`}
                    >
                      {r.status}
                    </span>
                    <button className="hidden sm:inline-flex px-4 py-2 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.12em] border border-stone-900/10 text-stone-600 hover:border-stone-900/30 transition-all shrink-0">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Your listing */}
            <div className="lg:col-span-1">
              <p className="label-luxury mb-5">your listing</p>
              <div className="glass-card rounded-[2rem] overflow-hidden">
                {listing && (
                  <div className="aspect-[16/10] bg-stone-100">
                    <img
                      src={listing.heroImage}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="font-serif text-lg text-stone-900 mb-1">
                    {listing?.title}
                  </p>
                  <p className="text-xs text-stone-400 mb-4">
                    {listing?.priceRange}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2.5 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.12em] bg-stone-900 text-cream transition-all hover:bg-stone-700">
                      Edit listing
                    </button>
                    <button className="px-4 py-2.5 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.12em] border border-stone-900/10 text-stone-600 hover:border-stone-900/30 transition-all">
                      Preview
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-6 mt-4">
                <p className="text-[0.7rem] uppercase tracking-[0.15em] text-stone-400 mb-2">
                  Exclusive member benefit
                </p>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Priority booking, complimentary baseline panel, and 15%
                  preferred rates for verified Evoluteon members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
