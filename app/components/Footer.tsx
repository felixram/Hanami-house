export default function Footer() {
  return (
    <div style={{ background: "var(--dark)", borderTop: "1px solid var(--dark-line)", width: "100%" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "36px clamp(24px,5vw,64px)" }}>
        <div className="footer-row">
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="font-serif-jp" style={{ fontSize: "1.2rem", color: "var(--on-dark)" }}>
              花見
            </span>
            <span style={{ fontSize: "0.76rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--on-dark)" }}>
              Hanami House
            </span>
          </a>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a href="#menu" style={{ fontSize: "0.82rem", color: "var(--on-dark-muted)" }}>Menu</a>
            <a href="#philosophy" style={{ fontSize: "0.82rem", color: "var(--on-dark-muted)" }}>Philosophy</a>
            <a href="#gallery" style={{ fontSize: "0.82rem", color: "var(--on-dark-muted)" }}>Gallery</a>
            <a href="#contact" style={{ fontSize: "0.82rem", color: "var(--on-dark-muted)" }}>Contact</a>
          </div>
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--on-dark-soft)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="0.8" fill="var(--on-dark-soft)" stroke="none" />
            </svg>
          </a>
        </div>
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid oklch(96% 0.01 85 / 0.1)", fontSize: "0.78rem", color: "oklch(60% 0.015 80)", textAlign: "center" }}>
          © 2026 Hanami House. All rights reserved.
        </div>
      </div>
    </div>
  );
}
