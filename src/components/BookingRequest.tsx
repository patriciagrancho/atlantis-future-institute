"use client";

import { useState } from "react";

export default function BookingRequest({
  experienceTitle,
}: {
  experienceTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    startDate: "",
    guests: "2",
    duration: "",
    notes: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to Supabase booking_requests table
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  const close = () => {
    setOpen(false);
    // Reset after close animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary w-full sm:w-auto">
        Request This Experience
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <div className="relative glass-card rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-900/5 flex items-center justify-center text-stone-500 hover:bg-stone-900/10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <p className="label-luxury mb-3">concierge request</p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-2">
                  {experienceTitle}
                </h2>
                <p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
                  Share your preferences and your dedicated concierge will craft
                  a tailored proposal, typically within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">
                        Preferred Start
                      </label>
                      <input
                        type="date"
                        required
                        value={form.startDate}
                        onChange={(e) => update("startDate", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-900/5 text-sm text-stone-900 border-0 outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">
                        Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => update("guests", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-900/5 text-sm text-stone-900 border-0 outline-none focus:ring-2 focus:ring-gold/30"
                      >
                        {["1", "2", "3", "4", "5+"].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">
                      Preferred Length of Stay
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 7 nights"
                      value={form.duration}
                      onChange={(e) => update("duration", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-900/5 text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">
                      Notes for Your Concierge
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Health goals, dietary needs, special occasions, or anything we should know..."
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-900/5 text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full !rounded-full disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit Request"}
                  </button>
                  <p className="text-center text-[0.7rem] text-stone-400">
                    No payment required. This is a no-obligation inquiry.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-stone-900 mb-3">
                  Request Received
                </h2>
                <p className="text-sm text-stone-500 font-light leading-relaxed max-w-sm mx-auto mb-8">
                  Your concierge is reviewing your preferences for{" "}
                  <span className="text-stone-700">{experienceTitle}</span> and
                  will reach out within 24 hours with a tailored proposal.
                </p>
                <button onClick={close} className="btn-outline !rounded-full">
                  Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
