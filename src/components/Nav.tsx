"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[93%] max-w-6xl z-50">
      <div className="glass-card rounded-full px-6 lg:px-8 shadow-lg shadow-stone-900/5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-sm font-normal tracking-[0.3em] uppercase text-stone-700">
              Evoluteon
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#waitlist" className="btn-primary !py-2.5 !px-6 !text-[0.6rem]">
              Become a Member
            </Link>
            <Link href="/become-a-partner" className="btn-ghost !py-2.5 !px-6 !text-[0.6rem]">
              Become a Partner
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-stone-900 transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-stone-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-stone-900 transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 glass-card rounded-3xl overflow-hidden">
          <div className="px-6 py-8 flex flex-col gap-4">
            <Link
              href="/#waitlist"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center"
            >
              Become a Member
            </Link>
            <Link
              href="/become-a-partner"
              onClick={() => setMenuOpen(false)}
              className="btn-ghost text-center"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
