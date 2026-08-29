import { Eyebrow, SectionHeading } from "./Section";

const points = [
  {
    title: "Sourced Daily",
    desc: "Fish and produce arrive the morning of every event — nothing is held over.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M4 20c8 0 14-6 16-16C10 5 4 11 4 20Z" />
        <path d="M6 18c3-3 7-7 12-10" />
      </svg>
    ),
  },
  {
    title: "Chef-Attended",
    desc: "Our chefs work the counter or the pass at every event — never dropped and left.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M4 14c0 4 3.6 7 8 7s8-3 8-7" />
        <path d="M4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2" />
        <line x1="9" y1="4" x2="7" y2="12" />
        <line x1="15" y1="4" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    title: "Composed to Order",
    desc: "Every piece is finished at the moment it's served, not plated hours ahead.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <div id="philosophy" style={{ scrollMarginTop: 84, background: "var(--paper-shade)", width: "100%" }}>
      <div className="philosophy-grid" style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(24px,5vw,64px)" }}>
        <div>
          <Eyebrow>Our Philosophy</Eyebrow>
          <SectionHeading margin="0 0 22px">旬 — In season</SectionHeading>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--ink-soft)", margin: "0 0 20px", maxWidth: "46ch" }}>
            Hanami takes its name from the practice of gathering to view the cherry blossom — a
            beauty appreciated because it does not last.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--ink-soft)", margin: 0, maxWidth: "46ch" }}>
            We approach each menu the same way: built around what the season yields, sourced
            daily, and composed to be experienced once, precisely, at its best.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {points.map((point, i) => (
            <div
              key={point.title}
              style={{
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                padding: "22px 0",
                borderBottom: i < points.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              {point.icon}
              <div>
                <div className="font-serif-jp" style={{ fontSize: "1.05rem", marginBottom: 6, fontWeight: 600 }}>
                  {point.title}
                </div>
                <div style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--ink-muted)" }}>{point.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
