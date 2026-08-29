import { SectionIntro } from "./Section";

const items = [
  {
    title: "Omakase Table",
    desc: "An intimate multi-course counter experience, chef-attended, for gatherings of 8–20.",
    tag: "8–20 GUESTS",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14c0 4 3.6 7 8 7s8-3 8-7" />
        <path d="M4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2" />
        <line x1="9" y1="4" x2="7" y2="12" />
        <line x1="15" y1="4" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    title: "Nigiri & Sashimi Stations",
    desc: "A curated selection plated to order, ideal for receptions and cocktail hours.",
    tag: "20–150 GUESTS",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="16" rx="8" ry="3" />
        <ellipse cx="8.5" cy="11" rx="3.2" ry="2" />
        <ellipse cx="15" cy="12.5" rx="3" ry="1.9" />
      </svg>
    ),
  },
  {
    title: "Bento Presentation",
    desc: "Individually boxed courses for seated corporate luncheons and boardroom dinners.",
    tag: "ANY GUEST COUNT",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="3.5" y1="12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Celebration Platters",
    desc: "Composed sharing platters for weddings and private residences, scaled to any guest count.",
    tag: "SCALES FREELY",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="13" rx="9" ry="5" />
        <circle cx="9" cy="12" r="1.4" />
        <circle cx="13" cy="10.5" r="1.4" />
        <circle cx="15.5" cy="13" r="1.4" />
      </svg>
    ),
  },
];

export default function Menu() {
  return (
    <div id="menu" style={{ scrollMarginTop: 84, maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,88px) clamp(24px,5vw,64px)" }}>
      <SectionIntro
        eyebrow="Signature Offerings"
        heading="Composed for every gathering"
        description={
          <>
            From an intimate chef&rsquo;s counter to a wedding reception of two hundred, each format
            is built to scale without losing its precision.
          </>
        }
      />
      <div className="menu-grid">
        {items.map((item) => (
          <div
            key={item.title}
            className="menu-card"
            style={{
              background: "var(--paper)",
              padding: "36px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              border: "1px solid transparent",
            }}
          >
            {item.icon}
            <h3 className="font-serif-jp" style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "var(--ink-muted)", margin: 0 }}>{item.desc}</p>
            <div style={{ fontSize: "0.78rem", letterSpacing: "0.06em", color: "var(--accent)", marginTop: "auto" }}>{item.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
