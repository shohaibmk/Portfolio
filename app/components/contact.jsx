"use client";
import { useState } from "react";

const SectionLabel = ({ n, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
    <span
      style={{
        fontFamily: "var(--font-jetbrains-mono, monospace)",
        fontSize: 12,
        color: "var(--muted)",
        letterSpacing: "0.1em",
      }}
    >
      § {n}
    </span>
    <span
      style={{ flex: 1, height: 1, background: "var(--rule)", maxWidth: 60 }}
    />
    <span
      style={{
        fontSize: 13,
        color: "var(--accent)",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
      }}
    >
      {children}
    </span>
  </div>
);

const inputStyle = {
  width: "100%",
  border: "1px solid var(--rule)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 15,
  color: "var(--ink)",
  background: "var(--bg)",
  outline: "none",
  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
  boxSizing: "border-box",
};

const contactInfo = [
  { label: "Email", value: "shohaibm99@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/shohaibmk" },
  { label: "GitHub", value: "github.com/shohaibmk" },
  { label: "Reply time", value: "Usually within 24 hours" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shohaibm99@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: info */}
          <div>
            <SectionLabel n="06">Contact</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                margin: "0 0 24px",
                lineHeight: 1.04,
                color: "var(--ink)",
                fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              Hiring?{" "}
              <span
                style={{
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}
              >
                Let's talk.
              </span>
            </h2>
            <p
              style={{
                fontSize: 19,
                color: "var(--muted)",
                lineHeight: 1.6,
                fontFamily: "var(--font-newsreader, Georgia, serif)",
                margin: "0 0 32px",
              }}
            >
              The fastest way to know if I'm a fit is a quick email or a
              15-minute call. No prep, no slides — just a chat.
            </p>
            <div style={{ display: "grid", gap: 0, fontSize: 15 }}>
              {contactInfo.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--rule)",
                    fontFamily:
                      "var(--font-inter-tight, system-ui, sans-serif)",
                  }}
                >
                  <span style={{ color: "var(--muted)" }}>{label}</span>
                  <span style={{ color: "var(--ink)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--rule)",
              borderRadius: 20,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-jetbrains-mono, monospace)",
                marginBottom: 4,
              }}
            >
              Send a message
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginBottom: 6,
                    fontFamily:
                      "var(--font-inter-tight, system-ui, sans-serif)",
                  }}
                >
                  Subject
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Senior fullstack role at —"
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--rule)")
                  }
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginBottom: 6,
                    fontFamily:
                      "var(--font-inter-tight, system-ui, sans-serif)",
                  }}
                >
                  Message
                </div>
                <textarea
                  name="message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={`Hi Shohaib — we're hiring a fullstack engineer at <company>. The team is small, the codebase is React + Node + Postgres, and we'd love to chat about…`}
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: 160 }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--rule)")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  border: "none",
                  background: "var(--accent)",
                  color: "#ffffff",
                  padding: "16px 24px",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                  marginTop: 4,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.88")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                Send message →
              </button>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  textAlign: "center",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                Opens your default email client.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
