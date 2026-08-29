"use client";

import { useState, type FormEvent } from "react";
import { Eyebrow, SectionHeading } from "./Section";

const fieldStyle: React.CSSProperties = {
  border: "1px solid oklch(96% 0.01 85 / 0.25)",
  padding: "14px 16px",
  background: "transparent",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--on-dark-muted)",
  marginBottom: 6,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "0.94rem",
  color: "var(--on-dark)",
  fontFamily: "inherit",
  padding: 0,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="contact" style={{ scrollMarginTop: 84, background: "var(--dark)", width: "100%" }}>
      <div className="contact-grid" style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(24px,5vw,64px)" }}>
        <div>
          <Eyebrow>Get in Touch</Eyebrow>
          <SectionHeading margin="0 0 32px" color="var(--on-dark)">
            Plan your event
          </SectionHeading>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="field-box" style={fieldStyle}>
                <label style={labelStyle} htmlFor="name">Name</label>
                <input style={inputStyle} id="name" name="name" type="text" placeholder="Jane Suzuki" required />
              </div>
              <div className="field-box" style={fieldStyle}>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input style={inputStyle} id="email" name="email" type="email" placeholder="jane@email.com" required />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="field-box" style={fieldStyle}>
                <label style={labelStyle} htmlFor="eventDate">Event Date</label>
                <input style={inputStyle} id="eventDate" name="eventDate" type="date" />
              </div>
              <div className="field-box" style={fieldStyle}>
                <label style={labelStyle} htmlFor="guestCount">Guest Count</label>
                <input style={inputStyle} id="guestCount" name="guestCount" type="number" min={1} placeholder="e.g. 40" />
              </div>
            </div>
            <div className="field-box" style={fieldStyle}>
              <label style={labelStyle} htmlFor="eventType">Event Type</label>
              <input style={inputStyle} id="eventType" name="eventType" type="text" placeholder="Wedding, corporate, private dinner…" />
            </div>
            <div className="field-box" style={{ ...fieldStyle, minHeight: 88 }}>
              <label style={labelStyle} htmlFor="message">Message</label>
              <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 56 }} id="message" name="message" placeholder="Tell us about your event…" />
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "submitting"}
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                padding: "15px 32px",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                color: "var(--dark)",
                fontSize: "0.92rem",
                letterSpacing: "0.02em",
                fontWeight: 500,
                cursor: status === "submitting" ? "default" : "pointer",
                opacity: status === "submitting" ? 0.7 : 1,
              }}
            >
              {status === "submitting" ? "Sending…" : "Send Inquiry"}
            </button>
            {status === "success" && (
              <p style={{ fontSize: "0.88rem", color: "var(--on-dark-soft)", margin: 0 }}>
                Thank you — we&rsquo;ll be in touch within one business day.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: "0.88rem", color: "oklch(75% 0.12 30)", margin: 0 }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 8 }}>
          <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "var(--on-dark-soft)", margin: 0 }}>
            We typically respond within one business day with availability and a sample menu
            tailored to your event.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.3" />
            </svg>
            <div style={{ fontSize: "0.94rem", color: "var(--on-dark-soft)", lineHeight: 1.6 }}>Serving the New York area</div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M6 3h3l2 5-2.5 1.8a12 12 0 0 0 5.7 5.7L15 13l5 2v3c0 1.1-.9 2-2 2C10.5 20 4 13.5 4 6c0-1.1.9-2 2-2Z" />
            </svg>
            <a href="tel:+18333847339" style={{ fontSize: "0.94rem", color: "var(--on-dark-soft)", lineHeight: 1.6 }}>(833) 384-7339</a>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <rect x="3" y="5" width="18" height="14" rx="1.5" />
              <path d="M3.5 6.5 12 13l8.5-6.5" />
            </svg>
            <a href="mailto:hello@hanamihouse.com" style={{ fontSize: "0.94rem", color: "var(--on-dark-soft)", lineHeight: 1.6 }}>hello@hanamihouse.com</a>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            <div style={{ fontSize: "0.94rem", color: "var(--on-dark-soft)", lineHeight: 1.6 }}>By appointment, Tuesday–Sunday</div>
          </div>
        </div>
      </div>
    </div>
  );
}
