"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Global Trusted Network",
    description:
      "Explore our curated collection of clinics, retreats and biohacking spaces. 95% noise filtered.",
  },
  {
    num: "02",
    title: "Biometric Intelligence",
    description:
      "We connect your health data into a personalized, science-backed longevity plan.",
  },
  {
    num: "03",
    title: "Executive Concierge",
    description:
      "Our team handles logistics, reservations and follow-ups, so you can focus on the work of living well.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        setProgress(p);
        setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goToStep = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.offsetTop + ((i + 0.5) / steps.length) * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="membership"
      className="relative"
      style={{ height: `${steps.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto max-w-6xl w-full px-6 lg:px-12">
          {/* Label + heading */}
          <div className="text-center mb-5 md:mb-7">
            <p className="label-luxury mb-3">what membership includes</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-stone-900">
              Everything you need to live longer.
            </h2>
          </div>

          {/* Mockup */}
          <div
            className="relative w-full max-w-3xl mx-auto rounded-[2.5rem] bg-cream-dark overflow-hidden shadow-2xl shadow-stone-900/10 border border-stone-200/50"
            style={{ height: "clamp(200px, 32vh, 360px)" }}
          >
            {/* Browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-cream/80 backdrop-blur-sm border-b border-stone-200/50 flex items-center px-4 gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <span className="ml-3 text-[0.6rem] tracking-wider text-stone-400 font-medium">
                evoluteon.com/explore
              </span>
            </div>
            {/* Screens */}
            <div className="absolute inset-0 top-10 p-6 md:p-8">
              <Mockup step={active} />
            </div>
          </div>

          {/* Progress line */}
          <div className="mt-6 h-0.5 bg-stone-900/10 rounded-full overflow-hidden max-w-3xl mx-auto">
            <div
              className="h-full bg-gold origin-left"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          {/* Pillars */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={step.num}
                  onClick={() => goToStep(i)}
                  className={`text-left rounded-2xl p-4 transition-all duration-500 ${
                    isActive
                      ? "glass-card shadow-lg shadow-stone-900/5"
                      : "bg-stone-900/[0.03] hover:bg-stone-900/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-serif text-base shrink-0 transition-colors duration-500 ${
                        isActive
                          ? "text-gold"
                          : isDone
                            ? "text-stone-400"
                            : "text-stone-300"
                      }`}
                    >
                      {step.num}
                    </span>
                    <h3
                      className={`font-serif text-xs md:text-sm leading-tight transition-colors duration-500 ${
                        isActive ? "text-stone-900" : "text-stone-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[0.68rem] text-stone-500 font-light leading-relaxed transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "opacity-100 max-h-32 mt-1"
                        : "opacity-0 max-h-0 md:opacity-50 md:max-h-32 md:mt-1"
                    }`}
                  >
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Per-pillar CSS mockups ─── */
function Mockup({ step }: { step: number }) {
  return (
    <div key={step} className="w-full h-full evo-fade">
      {step === 0 && <BrowseMock />}
      {step === 1 && <WearableMock />}
      {step === 2 && <ConfirmMock />}
    </div>
  );
}

function BrowseMock() {
  const cards = [
    { cat: "Clinic", img: "from-blue-100 to-stone-200" },
    { cat: "Hotel", img: "from-amber-100 to-stone-200" },
    { cat: "Retreat", img: "from-emerald-100 to-stone-200" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-2 mb-4 evo-fade-up" style={{ animationDelay: "0.05s" }}>
        <span className="px-3 py-1.5 rounded-full bg-stone-900 text-cream text-[0.55rem] uppercase tracking-wider">
          All
        </span>
        <span className="px-3 py-1.5 rounded-full bg-stone-900/5 text-stone-500 text-[0.55rem] uppercase tracking-wider">
          Clinic
        </span>
        <span className="px-3 py-1.5 rounded-full bg-stone-900/5 text-stone-500 text-[0.55rem] uppercase tracking-wider">
          Hotel
        </span>
        <span className="px-3 py-1.5 rounded-full bg-stone-900/5 text-stone-500 text-[0.55rem] uppercase tracking-wider">
          Retreat
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {cards.map((c, i) => (
          <div
            key={c.cat}
            className="flex flex-col evo-fade-up"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div
              className={`relative flex-1 rounded-2xl bg-gradient-to-br ${c.img} mb-2 min-h-[80px]`}
            >
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-cream/80 backdrop-blur text-[0.45rem] uppercase tracking-wider text-stone-600">
                {c.cat}
              </span>
            </div>
            <div className="h-2 w-3/4 bg-stone-300/60 rounded-full mb-1.5" />
            <div className="h-1.5 w-1/2 bg-stone-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WearableMock() {
  const rings = [
    { label: "Recovery", val: "82", pct: 82 },
    { label: "Sleep", val: "88", pct: 88 },
  ];
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        {rings.map((r, i) => (
          <div
            key={r.label}
            className="glass-card rounded-2xl p-3 flex items-center gap-3 evo-fade-up"
            style={{ animationDelay: `${0.05 + i * 0.08}s` }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: `conic-gradient(var(--color-gold) ${r.pct * 3.6}deg, rgba(0,0,0,0.07) 0deg)`,
              }}
            >
              <div className="w-7 h-7 rounded-full bg-cream" />
            </div>
            <div>
              <span className="block font-serif text-lg text-stone-900 leading-none">
                {r.val}
              </span>
              <span className="block text-[0.5rem] uppercase tracking-wider text-stone-400 mt-1">
                {r.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex-1 glass-card rounded-2xl p-4 flex flex-col justify-center evo-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <span className="block text-[0.5rem] uppercase tracking-[0.2em] text-stone-400 mb-2">
          Baseline · synthesized
        </span>
        <svg viewBox="0 0 300 44" preserveAspectRatio="none" className="w-full h-9">
          <path
            d="M0,36 C30,30 50,33 80,25 C110,17 130,27 160,19 C190,11 210,15 240,9 C270,5 290,7 300,6"
            fill="none"
            stroke="var(--color-stone-400)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

function ConfirmMock() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center evo-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-5">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-2xl text-stone-900 mb-3">Your concierge is on it</p>
        <div className="flex flex-col items-center gap-1.5">
          <span className="block h-1.5 w-44 bg-stone-300/70 rounded-full" />
          <span className="block h-1.5 w-36 bg-stone-200 rounded-full" />
          <span className="block h-1.5 w-40 bg-stone-200 rounded-full" />
        </div>
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[0.6rem] uppercase tracking-[0.15em] text-stone-500">
            Logistics handled for you
          </span>
        </div>
      </div>
    </div>
  );
}
