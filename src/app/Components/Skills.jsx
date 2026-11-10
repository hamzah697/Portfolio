// ---------------------------------------------------------------------------
// EDIT THIS: set "since" (YYYY-MM) to the month you REALLY started each tool,
// and "level" to where you honestly are now: "strong" | "building" | "learning".
// The dates below are placeholders, not facts. The chart redraws from this list.
// ---------------------------------------------------------------------------
const END = "2026-11"; // the right edge of the chart ("now")

const tools = [
  { name: "HTML", since: "2024-01", level: "strong" },
  { name: "CSS", since: "2024-01", level: "strong" },
  { name: "JavaScript", since: "2024-09", level: "building" },
  { name: "React", since: "2025-06", level: "building" },
  { name: "Next.js", since: "2026-08", level: "building" },
  { name: "Node.js", since: "2026-09", level: "building" },
  { name: "Express.js", since: "2026-09", level: "building" },
  { name: "MySQL", since: "2026-10", level: "learning" },
];

// Top to bottom on the chart. Classes are written out in full for Tailwind.
const LEVELS = [
  { key: "strong", label: "Strong", line: "stroke-charcoal", fill: "fill-charcoal", bg: "bg-charcoal" },
  { key: "building", label: "Building with", line: "stroke-plum", fill: "fill-plum", bg: "bg-plum" },
  { key: "learning", label: "Learning", line: "stroke-[#A58C9D]", fill: "fill-[#A58C9D]", bg: "bg-[#A58C9D]" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// ---- Chart maths (pure calculation, no state or interaction) ----
const toMonth = (s) => {
  const [y, m] = s.split("-").map(Number);
  return y * 12 + (m - 1);
};
const fmt = (s) => {
  const [y, m] = s.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

const L = 130; // plot left (room for band labels)
const R = 830; // plot right (room for line labels)
const T = 20;
const B = 470;
const BAND = (B - T) / 3;

const minM = Math.min(...tools.map((t) => toMonth(t.since)));
const maxM = toMonth(END);
const xFor = (s) => Math.round(L + ((toMonth(s) - minM) / (maxM - minM)) * (R - L));

const lines = LEVELS.flatMap((lvl, li) => {
  const group = tools.filter((t) => t.level === lvl.key);
  const center = T + BAND * li + BAND / 2;
  return group.map((t, i) => {
    const x0 = xFor(t.since);
    const y1 = Math.round(center + (i - (group.length - 1) / 2) * 26);
    // Rises from the start point, then eases out flat at its level.
    const w = R - x0;
    const h = B - y1;
    const c1x = Math.round(x0 + w * 0.12);
    const c1y = Math.round(B - h * 0.6);
    const c2x = Math.round(x0 + w * 0.45);
    return {
      ...t,
      lvl,
      x0,
      y1,
      d: `M${x0} ${B} C${c1x} ${c1y} ${c2x} ${y1} ${R} ${y1}`,
    };
  });
});

const yearTicks = [];
for (let y = Math.floor(minM / 12); y <= Math.floor(maxM / 12); y++) {
  const m = y * 12;
  if (m >= minM && m <= maxM) {
    yearTicks.push({ year: y, x: Math.round(L + ((m - minM) / (maxM - minM)) * (R - L)) });
  }
}

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      className="mx-auto w-full max-w-[1440px] border-t border-charcoal/10 px-[6%] py-20 lg:py-28"
    >
      {/* Header */}
      <div className="grid items-end gap-6 lg:grid-cols-12">
        <h2 className="reveal-lines text-headline font-extrabold text-charcoal lg:col-span-8">
          <span className="mask-line">
            <span className="mask-line-inner">Growing with these,</span>
          </span>
          <span className="mask-line">
            <span className="mask-line-inner [--d:110ms]">
              <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-plum">
                month by month.
              </em>
            </span>
          </span>
        </h2>
        <p className="reveal max-w-[40ch] text-[17px] leading-[1.7] text-charcoal/75 [--d:200ms] lg:col-span-4 lg:justify-self-end">
          Each line starts when I first picked up a tool and rises to where I
          am with it today. No percentages, just an honest read.
        </p>
      </div>

      {/* Growth chart (large screens) */}
      <div className="reveal mt-14 hidden lg:mt-20 lg:block [--d:100ms]">
        <svg
          viewBox="0 0 1000 520"
          className="w-full"
          role="img"
          aria-label="Growth chart showing when I started each technology and where I am with it now. The same information is listed below."
        >
          {/* Band lines + labels */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={L}
              x2={R}
              y1={T + BAND * i}
              y2={T + BAND * i}
              className="stroke-charcoal/15"
              strokeWidth="1"
            />
          ))}
          {LEVELS.map((lvl, li) => (
            <text
              key={lvl.key}
              x="0"
              y={T + BAND * li + BAND / 2 + 4}
              fontSize="12"
              letterSpacing="1.5"
              className="fill-charcoal/70 font-mono"
            >
              {lvl.label.toUpperCase()}
            </text>
          ))}

          {/* Year ticks */}
          {yearTicks.map((tick) => (
            <g key={tick.year}>
              <line x1={tick.x} x2={tick.x} y1={B} y2={B + 6} className="stroke-charcoal/40" strokeWidth="1" />
              <text x={tick.x} y={B + 26} fontSize="12" textAnchor="middle" className="fill-charcoal/70 font-mono">
                {tick.year}
              </text>
            </g>
          ))}
          <text x={R} y={B + 26} fontSize="12" textAnchor="middle" letterSpacing="1.5" className="fill-charcoal/70 font-mono">
            NOW
          </text>

          {/* Growth lines */}
          {lines.map((line, index) => {
            const delay = 150 + index * 130;
            return (
              <g key={line.name}>
                <path
                  d={line.d}
                  pathLength="1"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={`chart-line ${line.lvl.line}`}
                  style={{ "--d": `${delay}ms` }}
                />
                <circle
                  cx={line.x0}
                  cy={B}
                  r="4"
                  strokeWidth="2"
                  className={`chart-end fill-ivory ${line.lvl.line}`}
                  style={{ "--d": `${delay}ms` }}
                />
                <circle
                  cx={R}
                  cy={line.y1}
                  r="5.5"
                  className={`chart-end ${line.lvl.fill}`}
                  style={{ "--d": `${delay + 1900}ms` }}
                />
                <text
                  x={R + 16}
                  y={line.y1 + 4}
                  fontSize="13"
                  className="chart-end fill-charcoal font-mono"
                  style={{ "--d": `${delay + 1900}ms` }}
                >
                  {line.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Text index (all screens; the only view on phones and tablets) */}
      <div className="mt-14 grid gap-10 md:grid-cols-3 lg:mt-12">
        {LEVELS.map((lvl, index) => (
          <div
            key={lvl.key}
            className="reveal border-t border-charcoal/20 pt-6"
            style={{ "--d": `${index * 120}ms` }}
          >
            <p className="label-mono flex items-center gap-3 text-charcoal/70">
              <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${lvl.bg}`} />
              {lvl.label}
            </p>
            <ul className="mt-5 space-y-3">
              {tools
                .filter((t) => t.level === lvl.key)
                .map((t) => (
                  <li
                    key={t.name}
                    className="flex items-baseline justify-between gap-4 border-b border-charcoal/10 pb-3"
                  >
                    <span className="text-[18px] font-bold tracking-[-0.01em] text-charcoal">
                      {t.name}
                    </span>
                    <span className="label-mono text-charcoal/60">since {fmt(t.since)}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="label-mono mt-10 text-charcoal/60">
        Levels are my own honest read, not test scores.
      </p>
    </section>
  );
}