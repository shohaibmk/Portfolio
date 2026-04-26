import Image from "next/image";
import { skills } from "../data/skills";

const PROFILE_SRC =
  "https://res.cloudinary.com/dbqwc4btc/image/upload/v1769524693/medoq.jpg";
const RESUME_URL =
  "https://res.cloudinary.com/dbqwc4btc/image/upload/v1763652289/Shohaib_Mallick_Resume_sqq8og.pdf";

export default function Landing() {
  return (
    <section
      style={{ background: "var(--bg)" }}
      className="pt-[120px] pb-16 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            {/* Status pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent-soft)",
                color: "var(--accent)",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--success)",
                  flexShrink: 0,
                }}
              />
              Open to Connect · 2026
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                lineHeight: 1.06,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                margin: "0 0 24px",
                color: "var(--ink)",
                fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              Hi, I'm Shohaib. I build{" "}
              <span
                style={{
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "var(--accent)",
                }}
              >
                scalable, reliable
              </span>{" "}
              systems for people, not just spec sheets.
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 20px)",
                lineHeight: 1.55,
                color: "var(--muted)",
                maxWidth: 560,
                margin: "0 0 36px",
                fontFamily: "var(--font-newsreader, Georgia, serif)",
              }}
            >
              Fullstack engineer with a Master's in CS from Boston University. I
              turn messy real-world problems into clean, working software across
              React, Node, Python, and AWS.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--accent)",
                  color: "#ffffff",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                View résumé (PDF)
              </a>
              <a
                href="https://www.linkedin.com/in/shohaibmk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid var(--rule)",
                  background: "transparent",
                  color: "var(--ink)",
                  padding: "14px 20px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/shohaibmk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid var(--rule)",
                  background: "transparent",
                  color: "var(--ink)",
                  padding: "14px 20px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="hidden lg:flex justify-center">
            <div
              style={{
                width: 300,
                height: 360,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid var(--rule)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={PROFILE_SRC}
                alt="Shohaib Mallick"
                fill
                sizes="(max-width: 1024px) 0px, 300px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Skills strip */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "var(--font-jetbrains-mono, monospace)",
            }}
          >
            Tools I reach for
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(0,0,0,0.04)",
                  color: "var(--ink)",
                  padding: "5px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 500,
                  border: "1px solid var(--rule)",
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
