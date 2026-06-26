"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ISSUES = [
  "Sleep & recovery",
  "Energy & focus",
  "Stress & burnout",
  "Healthspan & prevention",
  "Where to even start",
  "Other",
];
const INVEST = [
  "€0 — Just the free map",
  "€30 – €50",
  "€50 – €100",
  "€100+ — Premium Access",
];
const SKIP = ["No, I'll wait on the free list", "Yes, I'd pay for priority"];
const SKIP_AMOUNT = ["€30 – €50", "€50 – €100", "€100+"];

function Card({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-2xl px-5 py-4 border transition-all duration-200 ${
        active
          ? "bg-stone-900 text-cream border-stone-900 shadow-lg shadow-stone-900/10"
          : "bg-white/60 text-stone-700 border-stone-900/10 hover:border-stone-900/30 hover:-translate-y-0.5"
      }`}
    >
      <span className="text-sm font-medium">{children}</span>
    </button>
  );
}

export default function WelcomeSurvey() {
  const params = useSearchParams();
  const email = params.get("e") || "";

  const [issue, setIssue] = useState("");
  const [invest, setInvest] = useState("");
  const [skip, setSkip] = useState("");
  const [skipAmount, setSkipAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const wantsPriority = skip === "Yes, I'd pay for priority";

  const submit = async () => {
    setLoading(true);
    await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        issue,
        monthlyInvest: invest,
        skipWaitlist: skip,
        skipAmount: wantsPriority ? skipAmount : "",
      }),
    }).catch(() => {});
    setDone(true);
    setLoading(false);
  };

  if (done) {
    return (
      <div className="glass-card rounded-[2.5rem] p-10 md:p-14 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl text-stone-900 mb-3">Thank you.</h1>
        <p className="text-sm text-stone-500 font-light leading-relaxed max-w-sm mx-auto mb-8">
          Your answers help us build Evoluteon around what you actually need.
          We&apos;ll be in touch as we onboard the first members.
        </p>
        <Link href="/" className="btn-outline !rounded-full">
          Back to Evoluteon
        </Link>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900">
          Quick questions
        </h1>
        <p className="mt-3 text-sm text-stone-500 font-light">
          15 seconds to shape your experience.
        </p>
      </div>

      <div className="space-y-10">
        {/* Q1 */}
        <div>
          <p className="text-sm text-stone-800 font-medium mb-4">
            What is the biggest issue in your longevity journey right now?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ISSUES.map((o) => (
              <Card key={o} active={issue === o} onClick={() => setIssue(o)}>
                {o}
              </Card>
            ))}
          </div>
        </div>

        {/* Q2 */}
        <div>
          <p className="text-sm text-stone-800 font-medium mb-4">
            How much would you invest monthly in a fully personalized longevity
            concierge?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INVEST.map((o) => (
              <Card key={o} active={invest === o} onClick={() => setInvest(o)}>
                {o}
              </Card>
            ))}
          </div>
        </div>

        {/* Q3 */}
        <div>
          <p className="text-sm text-stone-800 font-medium mb-1">
            We onboard members in small batches.
          </p>
          <p className="text-sm text-stone-500 font-light mb-4">
            Would you pay a small monthly fee to skip the waitlist and get
            premium concierge access?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKIP.map((o) => (
              <Card key={o} active={skip === o} onClick={() => setSkip(o)}>
                {o}
              </Card>
            ))}
          </div>

          {wantsPriority && (
            <div className="mt-5 evo-fade-up">
              <p className="text-sm text-stone-500 font-light mb-3">
                If so, how much?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {SKIP_AMOUNT.map((o) => (
                  <Card
                    key={o}
                    active={skipAmount === o}
                    onClick={() => setSkipAmount(o)}
                  >
                    {o}
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={submit}
          disabled={loading}
          className="btn-primary !rounded-full disabled:opacity-50"
        >
          {loading ? "Saving..." : "Complete"}
        </button>
      </div>
    </div>
  );
}
