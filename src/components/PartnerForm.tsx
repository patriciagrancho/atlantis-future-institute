"use client";

import { useState } from "react";

const STEPS = ["Eligibility", "Brand Identity", "Contact", "Concept"];

const ELIGIBILITY_CONDITIONS = [
  "The business operates in the premium or luxury wellness/longevity segment.",
  "Listing on Evoluteon implies offering an exclusive benefit, special rate, or privileged access to verified members.",
  "Partner approval is at the sole discretion of Evoluteon.",
];

export default function PartnerForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checks, setChecks] = useState<boolean[]>([false, false, false]);
  const [form, setForm] = useState({
    brandName: "",
    category: "",
    location: "",
    website: "",
    contactName: "",
    contactTitle: "",
    contactPhone: "",
    contactEmail: "",
    concept: "",
    exclusiveBenefits: "",
  });

  const allChecked = checks.every(Boolean);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/partner-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error === "not_configured"
            ? "Applications aren't connected yet. Please try again soon."
            : "Something went wrong. Please try again.",
        );
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-2xl text-stone-900">Application Received</p>
        <p className="mt-3 text-sm text-stone-400 max-w-md mx-auto">
          Our curation team will review your application within 5 business days. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                i <= step
                  ? "bg-stone-900 text-cream"
                  : "bg-stone-900/5 text-stone-400"
              }`}
            >
              {i + 1}
            </div>
            <span className={`hidden sm:block text-xs tracking-wide ${i <= step ? "text-stone-900" : "text-stone-300"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`w-6 lg:w-12 h-px ${i < step ? "bg-stone-900" : "bg-stone-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Eligibility */}
      {step === 0 && (
        <div className="space-y-5">
          <p className="text-sm text-stone-500 mb-6">
            Please confirm the following before proceeding.
          </p>
          {ELIGIBILITY_CONDITIONS.map((cond, i) => (
            <label
              key={i}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div
                className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                  checks[i]
                    ? "bg-stone-900 border-stone-900"
                    : "border-stone-300 group-hover:border-stone-400"
                }`}
                onClick={() => {
                  const next = [...checks];
                  next[i] = !next[i];
                  setChecks(next);
                }}
              >
                {checks[i] && (
                  <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-stone-600 leading-relaxed">{cond}</span>
            </label>
          ))}
          <button
            onClick={() => setStep(1)}
            disabled={!allChecked}
            className="btn-primary mt-6 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Begin Application
          </button>
        </div>
      )}

      {/* Step 1: Brand Identity */}
      {step === 1 && (
        <div className="space-y-4">
          <Input label="Brand Name" value={form.brandName} onChange={(v) => update("brandName", v)} />
          <div>
            <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Category</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-stone-900/5 text-sm text-stone-900 border-0 outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option value="">Select category...</option>
              <option value="Hotels">Hotels</option>
              <option value="Clinics">Clinics</option>
              <option value="Residences">Residences</option>
              <option value="Retreats">Retreats</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Input label="Location" value={form.location} onChange={(v) => update("location", v)} />
          <Input label="Official Website" value={form.website} onChange={(v) => update("website", v)} />
          <div className="flex gap-3 pt-4">
            <button onClick={() => setStep(0)} className="btn-ghost">Back</button>
            <button onClick={() => setStep(2)} className="btn-primary">Continue</button>
          </div>
        </div>
      )}

      {/* Step 2: Contact */}
      {step === 2 && (
        <div className="space-y-4">
          <Input label="Full Name" value={form.contactName} onChange={(v) => update("contactName", v)} />
          <Input label="Role / Title" value={form.contactTitle} onChange={(v) => update("contactTitle", v)} />
          <Input label="Phone / WhatsApp" value={form.contactPhone} onChange={(v) => update("contactPhone", v)} />
          <Input label="Email Address" type="email" value={form.contactEmail} onChange={(v) => update("contactEmail", v)} />
          <div className="flex gap-3 pt-4">
            <button onClick={() => setStep(1)} className="btn-ghost">Back</button>
            <button onClick={() => setStep(3)} className="btn-primary">Continue</button>
          </div>
        </div>
      )}

      {/* Step 3: Concept */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Brief Concept</label>
            <textarea
              value={form.concept}
              onChange={(e) => update("concept", e.target.value)}
              rows={4}
              placeholder="Describe your offering and what makes it unique..."
              className="w-full px-5 py-4 rounded-2xl bg-stone-900/5 text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30 resize-none"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Exclusive Benefits for Members</label>
            <textarea
              value={form.exclusiveBenefits}
              onChange={(e) => update("exclusiveBenefits", e.target.value)}
              rows={3}
              placeholder="What exclusive access, rates, or perks would you offer Evoluteon members?"
              className="w-full px-5 py-4 rounded-2xl bg-stone-900/5 text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30 resize-none"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button onClick={() => setStep(2)} className="btn-ghost">Back</button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Application"}
            </button>
          </div>
          {error && <p className="text-xs text-stone-500 pt-1">{error}</p>}
        </div>
      )}
    </div>
  );
}

/* ─── Reusable Input ─── */
function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-4 rounded-2xl bg-stone-900/5 text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30 transition-all"
      />
    </div>
  );
}
