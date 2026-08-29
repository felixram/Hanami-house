import { SectionIntro } from "./Section";

const quotes = [
  { quote: "[Add a client testimonial about their experience with Hanami House.]", attribution: "[Client Name, Wedding]" },
  { quote: "[Add a client testimonial about their experience with Hanami House.]", attribution: "[Client Name, Corporate Event]" },
  { quote: "[Add a client testimonial about their experience with Hanami House.]", attribution: "[Client Name, Private Dinner]" },
];

export default function Testimonials() {
  return (
    <div id="testimonials" style={{ scrollMarginTop: 84, background: "var(--paper-shade)", width: "100%" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(24px,5vw,64px)" }}>
        <SectionIntro eyebrow="Kind Words" heading="What our clients say" />
        <div className="testimonial-grid">
          {quotes.map((t, i) => (
            <div key={i} style={{ background: "var(--paper-shade)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 22 }}>
              <div className="font-serif-jp" style={{ fontSize: "2.4rem", color: "var(--accent)", lineHeight: 1 }}>
                &ldquo;
              </div>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "var(--ink-soft)", fontStyle: "italic", margin: 0, minHeight: "4.8em" }}>
                {t.quote}
              </p>
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.04em", color: "var(--ink-muted)", borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                — {t.attribution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
