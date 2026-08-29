import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.78rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent)",
        fontWeight: 500,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  margin = "0 0 16px",
  color,
}: {
  children: ReactNode;
  margin?: string | number;
  color?: string;
}) {
  return (
    <h2
      className="font-serif-jp"
      style={{ fontSize: "clamp(1.8rem, 2.2vw + 1rem, 2.5rem)", margin, fontWeight: 600, color }}
    >
      {children}
    </h2>
  );
}

export function SectionIntro({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div style={{ maxWidth: 620, margin: "0 0 48px" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionHeading margin={description ? "0 0 16px" : 0}>{heading}</SectionHeading>
      {description && (
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--ink-muted)", margin: 0 }}>
          {description}
        </p>
      )}
    </div>
  );
}
