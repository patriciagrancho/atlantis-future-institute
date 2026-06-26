"use client";

import { useState } from "react";
import Link from "next/link";
import { experiences, CATEGORIES, type Category } from "@/lib/experiences";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

export default function Marketplace() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? experiences
      : experiences.filter((e) => e.category === filter);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-full text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-all ${
              filter === f
                ? "bg-stone-900 text-cream"
                : "bg-stone-900/5 text-stone-500 hover:bg-stone-900/10"
            }`}
          >
            {f}
            {f !== "All" && (
              <span className="ml-1.5 opacity-50">
                {experiences.filter((e) => e.category === f).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp) => (
          <Link
            key={exp.slug}
            href={`/explore/${exp.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100 mb-4">
              <img
                src={exp.heroImage}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-card text-[0.6rem] font-medium uppercase tracking-[0.15em] text-stone-700">
                {exp.category}
              </span>
            </div>
            <div className="px-1">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="font-serif text-xl text-stone-900 group-hover:text-gold-dark transition-colors">
                  {exp.title}
                </h3>
              </div>
              <p className="text-[0.7rem] uppercase tracking-[0.12em] text-stone-400 mb-3">
                {exp.location}, {exp.country}
              </p>
              <p className="text-sm text-stone-500 font-light leading-relaxed mb-3">
                {exp.shortDescription}
              </p>
              <p className="text-xs text-stone-600 font-medium">{exp.priceRange}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
