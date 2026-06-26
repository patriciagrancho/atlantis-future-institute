"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function PreviewSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const isPartner = pathname.startsWith("/partner-portal");

  const logout = async () => {
    await fetch("/api/preview-auth", { method: "DELETE" });
    router.push("/login");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Member / Partner preview switch */}
      <div className="flex items-center gap-1 p-1 rounded-full bg-stone-900/5">
        <Link
          href="/explore"
          className={`px-3 sm:px-4 py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.12em] transition-all ${
            !isPartner
              ? "bg-stone-900 text-cream"
              : "text-stone-500 hover:text-stone-800"
          }`}
        >
          Member
        </Link>
        <Link
          href="/partner-portal"
          className={`px-3 sm:px-4 py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.12em] transition-all ${
            isPartner
              ? "bg-stone-900 text-cream"
              : "text-stone-500 hover:text-stone-800"
          }`}
        >
          Partner
        </Link>
      </div>

      <button
        onClick={logout}
        className="px-3 sm:px-4 py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.12em] text-stone-500 hover:text-stone-900 border border-stone-900/10 hover:border-stone-900/30 transition-all"
      >
        Log out
      </button>
    </div>
  );
}
