"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/explore";

  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/preview-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    setLoading(false);
    if (res.ok) {
      router.push(next);
      router.refresh();
    } else {
      setError(true);
    }
  };

  return (
    <div className="glass-card rounded-[3rem] w-full max-w-md p-10 md:p-12 text-center">
      <p className="label-luxury mb-4">private preview</p>
      <h1 className="font-serif text-4xl text-stone-900 tracking-tight mb-3">
        Evoluteon
      </h1>
      <p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
        This area is reserved. Enter your access code to preview the member and
        partner experience.
      </p>

      <form onSubmit={submit} className="space-y-4">
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access code"
          autoFocus
          className="w-full px-6 py-4 rounded-full bg-stone-900/5 text-center text-sm text-stone-900 placeholder:text-stone-400 border-0 outline-none focus:ring-2 focus:ring-gold/30 transition-all"
        />
        {error && (
          <p className="text-xs text-red-500/80">Incorrect access code.</p>
        )}
        <button
          type="submit"
          disabled={loading || !code}
          className="btn-primary w-full !rounded-full disabled:opacity-40"
        >
          {loading ? "Verifying..." : "Enter"}
        </button>
      </form>

      <p className="mt-8 text-[0.7rem] text-stone-400">
        Not a member yet?{" "}
        <a href="/#waitlist" className="text-stone-700 underline underline-offset-4">
          Request access
        </a>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-cream/85" />
      </div>
      <div className="relative z-10 w-full flex justify-center">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
