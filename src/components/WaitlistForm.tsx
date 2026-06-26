"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WaitlistForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error === "not_configured"
            ? "The waitlist isn't connected yet. Please try again soon."
            : "Something went wrong. Please try again.",
        );
      }
      // Send them to the thank-you survey, carrying their email.
      router.push(`/welcome?e=${encodeURIComponent(email)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-6 py-4 rounded-full bg-white/70 backdrop-blur-sm text-sm text-stone-900 placeholder:text-stone-500 border border-stone-900/10 outline-none focus:ring-2 focus:ring-gold/30 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary !rounded-full whitespace-nowrap disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get Early Access"}
        </button>
      </form>
      {error && <p className="mt-3 text-xs text-stone-500 text-center">{error}</p>}
    </div>
  );
}
