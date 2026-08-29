export default function Hero() {
  return (
    <div
      id="home"
      style={{
        scrollMarginTop: 84,
        maxWidth: 1220,
        margin: "0 auto",
        padding: "clamp(56px,8vw,104px) clamp(24px,5vw,64px) clamp(72px,9vw,128px)",
      }}
    >
      <div className="hero-grid">
        <div>
          <div
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
              marginBottom: 22,
            }}
          >
            Private &amp; Corporate Sushi Catering
          </div>
          <h1
            className="font-serif-jp"
            style={{
              fontSize: "clamp(2.3rem, 4vw + 1rem, 4rem)",
              lineHeight: 1.08,
              margin: "0 0 26px",
              textWrap: "pretty",
              fontWeight: 600,
            }}
          >
            Sushi, composed
            <br />
            for the occasion.
          </h1>
          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.75,
              color: "var(--ink-muted)",
              maxWidth: "40ch",
              margin: "0 0 38px",
            }}
          >
            Hanami House brings chef-attended omakase and refined sushi catering to weddings,
            private dinners, and corporate events — each menu composed around what the season
            offers.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "15px 30px",
                background: "var(--ink)",
                color: "var(--paper)",
                fontSize: "0.92rem",
                letterSpacing: "0.02em",
                border: "1px solid var(--ink)",
              }}
            >
              Inquire About Your Event
            </a>
            <a
              href="#menu"
              className="btn-secondary"
              style={{
                padding: "15px 30px",
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                fontSize: "0.92rem",
                letterSpacing: "0.02em",
              }}
            >
              View Sample Menus
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 360 520" width="100%" style={{ maxWidth: 340, color: "oklch(58% 0.03 75)" }}>
            <defs>
              <symbol id="blossom" viewBox="-16 -16 32 32">
                <g fill="none" stroke="currentColor" strokeWidth={1}>
                  <ellipse cx={0} cy={-7.6} rx={4} ry={6.6} transform="rotate(0)" />
                  <ellipse cx={0} cy={-7.6} rx={4} ry={6.6} transform="rotate(72)" />
                  <ellipse cx={0} cy={-7.6} rx={4} ry={6.6} transform="rotate(144)" />
                  <ellipse cx={0} cy={-7.6} rx={4} ry={6.6} transform="rotate(216)" />
                  <ellipse cx={0} cy={-7.6} rx={4} ry={6.6} transform="rotate(288)" />
                </g>
                <circle cx={0} cy={0} r={1.3} fill="currentColor" stroke="none" />
              </symbol>
            </defs>
            <path
              d="M40,500 C60,420 30,360 70,300 C110,240 60,200 100,140 C130,95 110,60 150,20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
            />
            <path d="M70,300 C40,290 20,270 10,250" fill="none" stroke="currentColor" strokeWidth={1.1} />
            <path d="M100,140 C140,150 165,135 190,150" fill="none" stroke="currentColor" strokeWidth={1.1} />
            <use href="#blossom" x={70} y={300} width={46} height={46} style={{ color: "var(--accent)" }} />
            <use href="#blossom" x={150} y={20} width={52} height={52} style={{ color: "var(--accent)" }} />
            <use href="#blossom" x={10} y={250} width={32} height={32} />
            <use href="#blossom" x={190} y={150} width={38} height={38} style={{ color: "var(--accent)" }} />
            <use href="#blossom" x={55} y={380} width={26} height={26} />
            <use href="#blossom" x={120} y={90} width={30} height={30} />
            <circle cx={35} cy={440} r={2.4} fill="var(--accent)" stroke="none" />
            <circle cx={115} cy={180} r={2.2} fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
