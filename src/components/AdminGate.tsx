"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGate() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (res.ok) {
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-card rounded-[2.5rem] p-10 md:p-12 w-full max-w-md text-center">
        <p className="label-luxury mb-4">founder access</p>
        <h1 className="font-serif text-3xl text-stone-900 mb-2">Admin</h1>
        <p className="text-sm text-stone-500 font-light mb-8">
          Enter your admin code to view submissions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Admin code"
            required
            className="w-full px-6 py-4 rounded-full bg-stone-900/5 text-sm text-center text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full !rounded-full disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Enter"}
          </button>
          {error && (
            <p className="text-xs text-stone-500 pt-1">
              Incorrect code. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
