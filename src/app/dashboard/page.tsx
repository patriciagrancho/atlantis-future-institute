import Link from "next/link";
import MemberNav from "@/components/MemberNav";
import WellbeingChart from "@/components/WellbeingChart";
import { experiences } from "@/lib/experiences";

export const metadata = {
  title: "Dashboard · Evoluteon",
  description: "Your well-being overview.",
};

const stats = [
  { label: "Biological Age", value: "38.2", unit: "yrs", note: "4.1 years below chronological" },
  { label: "Sleep Score", value: "88", unit: "/100", note: "+12 this quarter" },
  { label: "Recovery", value: "82", unit: "/100", note: "Within optimal range" },
  { label: "Active Protocols", value: "3", unit: "", note: "2 clinics · 1 retreat" },
];

export default function DashboardPage() {
  const journeys = experiences.slice(0, 3);

  return (
    <>
      <MemberNav />

      <main className="pt-36 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Greeting */}
          <div className="mb-14">
            <p className="label-luxury mb-4">your well-being</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-stone-900">
              Welcome back, Sofia.
            </h1>
            <p className="mt-4 text-stone-500 font-light leading-relaxed max-w-xl">
              A quiet overview of your longevity journey — measured, considered,
              and curated with care.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-[2rem] p-7">
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-400 mb-5">
                  {s.label}
                </p>
                <p className="font-serif text-4xl font-light text-stone-900 leading-none">
                  {s.value}
                  {s.unit && (
                    <span className="text-base text-stone-400 ml-1">{s.unit}</span>
                  )}
                </p>
                <p className="mt-4 text-xs text-stone-500 font-light leading-relaxed">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          {/* Well-being chart */}
          <div className="glass-card rounded-[2.5rem] p-8 md:p-10 mb-6">
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="font-serif text-2xl text-stone-900">
                Well-being, trending
              </h2>
              <p className="label-luxury">last 6 months</p>
            </div>
            <WellbeingChart />
          </div>

          {/* Journeys + Concierge */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-7">
                <h2 className="font-serif text-2xl text-stone-900">Your journeys</h2>
                <Link
                  href="/explore"
                  className="text-[0.65rem] uppercase tracking-[0.15em] text-stone-400 hover:text-stone-700 transition-colors"
                >
                  Explore all
                </Link>
              </div>
              <div className="space-y-2">
                {journeys.map((j, i) => (
                  <Link
                    key={j.slug}
                    href={`/explore/${j.slug}`}
                    className="flex items-center gap-4 rounded-2xl p-3 -mx-3 hover:bg-stone-900/[0.03] transition-colors"
                  >
                    <img
                      src={j.heroImage}
                      alt={j.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg text-stone-900 truncate">
                        {j.title}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-[0.12em] text-stone-400 mt-0.5">
                        {j.location}, {j.country}
                      </p>
                    </div>
                    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-stone-400 shrink-0">
                      {i === 0 ? "Confirmed" : i === 1 ? "In review" : "Requested"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col">
              <p className="label-luxury mb-5">your concierge</p>
              <div className="w-14 h-14 rounded-full bg-stone-900 text-cream flex items-center justify-center text-sm font-medium mb-5">
                AL
              </div>
              <h2 className="font-serif text-2xl text-stone-900 mb-2">
                Aria Lindqvist
              </h2>
              <p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
                Your dedicated longevity concierge — here to craft your next
                journey, whenever you&apos;re ready.
              </p>
              <button className="btn-outline w-full mt-auto">Message Aria</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
