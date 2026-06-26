import { notFound } from "next/navigation";
import Link from "next/link";
import MemberNav from "@/components/MemberNav";
import BookingRequest from "@/components/BookingRequest";
import { getExperience, experiences } from "@/lib/experiences";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return { title: "Experience · Evoluteon" };
  return {
    title: `${exp.title} · Evoluteon`,
    description: exp.shortDescription,
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = getExperience(slug);

  if (!exp) notFound();

  return (
    <>
      <MemberNav />

      <main className="pt-28 pb-24">
        {/* Back link */}
        <div className="mx-auto max-w-6xl px-6 lg:px-12 mb-6">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone-400 hover:text-stone-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Collection
          </Link>
        </div>

        {/* Hero */}
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden bg-stone-100 mb-10">
            <img
              src={exp.heroImage}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-3 py-1.5 rounded-full glass-card text-[0.6rem] font-medium uppercase tracking-[0.15em] text-stone-700 mb-4">
                {exp.category}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-cream tracking-tight">
                {exp.title}
              </h1>
              <p className="mt-2 text-cream/80 text-sm uppercase tracking-[0.15em]">
                {exp.location}, {exp.country}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <p className="label-luxury mb-4">the experience</p>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {exp.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl overflow-hidden bg-stone-100"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Treatments */}
              <div>
                <p className="label-luxury mb-5">treatments & offerings</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.treatments.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 glass-card rounded-2xl px-5 py-4"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm text-stone-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust: credentials + science */}
              <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-10">
                <p className="label-luxury !text-gold-light mb-6">
                  scientific authority
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-cream font-medium text-sm mb-1">
                        Medical Credentials
                      </h3>
                      <p className="text-stone-400 text-sm font-light leading-relaxed">
                        {exp.credentials}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-cream font-medium text-sm mb-1">
                        Scientific Backing
                      </h3>
                      <p className="text-stone-400 text-sm font-light leading-relaxed">
                        {exp.scientificBacking}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar — booking */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-[2.5rem] p-8 sticky top-28">
                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.15em] text-stone-400 mb-1">
                      Investment
                    </p>
                    <p className="font-serif text-2xl text-stone-900">
                      {exp.priceRange}
                    </p>
                  </div>
                  <div className="h-px bg-stone-200" />
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.15em] text-stone-400 mb-1">
                      Duration
                    </p>
                    <p className="text-stone-700">{exp.duration}</p>
                  </div>
                  <div className="h-px bg-stone-200" />
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.15em] text-stone-400 mb-2">
                      Highlights
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-stone-600"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <BookingRequest experienceTitle={exp.title} />
                <p className="mt-4 text-center text-[0.7rem] text-stone-400 leading-relaxed">
                  Your concierge will respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
