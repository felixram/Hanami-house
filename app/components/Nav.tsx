export default function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px clamp(24px,5vw,64px)",
        background: "color-mix(in oklch, var(--paper) 90%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className="font-serif-jp" style={{ fontSize: "1.5rem", color: "var(--ink)", letterSpacing: "0.02em" }}>
          花見
        </span>
        <span style={{ width: 1, height: 22, background: "oklch(80% 0.012 80)" }} />
        <span
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink)",
            fontWeight: 500,
          }}
        >
          Hanami House
        </span>
      </a>
      <div className="nav-links">
        <a href="#menu" className="nav-link" style={{ fontSize: "0.86rem", letterSpacing: "0.03em" }}>
          Menu
        </a>
        <a href="#philosophy" className="nav-link" style={{ fontSize: "0.86rem", letterSpacing: "0.03em" }}>
          Philosophy
        </a>
        <a href="#gallery" className="nav-link" style={{ fontSize: "0.86rem", letterSpacing: "0.03em" }}>
          Gallery
        </a>
      </div>
      <a
        href="#contact"
        className="btn-primary"
        style={{
          fontSize: "0.82rem",
          letterSpacing: "0.05em",
          padding: "11px 22px",
        }}
      >
        Inquire
      </a>
    </div>
  );
}
