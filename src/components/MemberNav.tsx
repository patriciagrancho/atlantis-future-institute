"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PreviewSwitch from "./PreviewSwitch";

const memberLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/dashboard", label: "Dashboard" },
];

// Shared top bar for the private preview areas (member + partner).
export default function MemberNav() {
  const pathname = usePathname();
  const isPartner = pathname.startsWith("/partner-portal");

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[93%] max-w-6xl z-50">
      <div className="glass-card rounded-full px-5 lg:px-7 shadow-lg shadow-stone-900/5">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/explore"
            className="text-sm font-normal tracking-[0.3em] uppercase text-stone-700 shrink-0"
          >
            Evoluteon
          </Link>

          {/* Member sub-nav — hidden in the partner area */}
          {!isPartner && (
            <div className="hidden md:flex items-center gap-6">
              {memberLinks.map((l) => {
                const active =
                  pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-[0.7rem] font-medium uppercase tracking-[0.15em] transition-colors ${
                      active
                        ? "text-stone-900"
                        : "text-stone-400 hover:text-stone-700"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          )}

          <PreviewSwitch />
        </div>
      </div>
    </nav>
  );
}
