"use client";

import { useState } from "react";

const METRICS = {
  Sleep: {
    label: "Sleep Quality",
    data: [62, 68, 65, 74, 80, 88],
    current: "88",
    delta: "+26 since January",
  },
  Recovery: {
    label: "Recovery · HRV",
    data: [55, 60, 58, 67, 74, 82],
    current: "82",
    delta: "+27 since January",
  },
  Vitality: {
    label: "Vitality Index",
    data: [70, 73, 76, 79, 84, 91],
    current: "91",
    delta: "+21 since January",
  },
} as const;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
type MetricKey = keyof typeof METRICS;

const W = 760;
const H = 240;
const PAD = { l: 16, r: 16, t: 20, b: 34 };

function buildPath(data: readonly number[]) {
  const n = data.length;
  const plotW = W - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;
  const pts = data.map((v, i) => ({
    x: PAD.l + (i / (n - 1)) * plotW,
    y: PAD.t + (1 - v / 100) * plotH,
  }));
  let d = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return { d, pts };
}

export default function WellbeingChart() {
  const [metric, setMetric] = useState<MetricKey>("Sleep");
  const { data, label, current, delta } = METRICS[metric];
  const { d, pts } = buildPath(data);
  const last = pts[pts.length - 1];
  const areaD = `${d} L ${last.x.toFixed(1)},${H - PAD.b} L ${pts[0].x.toFixed(1)},${H - PAD.b} Z`;

  const drawStyle = {
    "--evo-dash": "1",
    strokeDasharray: 1,
    strokeDashoffset: 1,
    animation: "evo-draw 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
  } as React.CSSProperties;

  return (
    <div>
      {/* Header — current value + metric toggle */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-stone-400 mb-2">
            {label}
          </p>
          <p className="font-serif text-4xl font-light text-stone-900">
            {current}
            <span className="text-base text-stone-400 ml-1">/100</span>
          </p>
          <p className="mt-1 text-xs text-stone-500 font-light">{delta}</p>
        </div>
        <div className="flex gap-1 p-1 rounded-full bg-stone-900/[0.04]">
          {(Object.keys(METRICS) as MetricKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setMetric(k)}
              className={`px-4 py-1.5 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.12em] transition-all ${
                metric === k
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Chart — thin single-pixel grey line, no grid */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`${label} over the last six months`}
      >
        <defs>
          <linearGradient id="evo-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-stone-400)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-stone-400)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Whisper-soft area fill */}
        <path key={`a-${metric}`} d={areaD} fill="url(#evo-area)" className="evo-fade" />

        {/* The line */}
        <path
          key={`l-${metric}`}
          d={d}
          fill="none"
          stroke="var(--color-stone-400)"
          strokeWidth={1}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          style={drawStyle}
        />

        {/* Current point */}
        <circle
          key={`p-${metric}`}
          cx={last.x}
          cy={last.y}
          r={2.5}
          fill="var(--color-stone-700)"
          className="evo-fade"
          style={{ animationDelay: "1.3s" }}
        />

        {/* Month labels */}
        {MONTHS.map((m, i) => {
          const x = PAD.l + (i / (MONTHS.length - 1)) * (W - PAD.l - PAD.r);
          return (
            <text
              key={m}
              x={x}
              y={H - 10}
              textAnchor="middle"
              fill="var(--color-stone-300)"
              style={{ fontSize: 10, letterSpacing: 2 }}
            >
              {m.toUpperCase()}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
