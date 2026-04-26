import { ABOUT_PARAGRAPHS } from "../data/about";

const SectionLabel = ({ n, children }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}
  >
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

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          {/* Left: headline */}
          <div>
            <SectionLabel n="01">About</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 44px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                margin: 0,
                lineHeight: 1.08,
                color: "var(--ink)",
                fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              Software that{" "}
              <span
                style={{
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                actually
              </span>{" "}
              helps the people using it.
            </h2>
          </div>

          {/* Right: paragraphs */}
          <div>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--ink)",
                margin: "0 0 20px",
                fontFamily: "var(--font-newsreader, Georgia, serif)",
              }}
            >
              {ABOUT_PARAGRAPHS[0]}
            </p>
            {/* <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--muted)",
                margin: "0 0 20px",
                fontFamily: "var(--font-newsreader, Georgia, serif)",
              }}
            >
              {ABOUT_PARAGRAPHS[1]}
            </p> */}
            <div
              style={{
                marginTop: 28,
                padding: 20,
                borderRadius: 14,
                background: "var(--accent-soft)",
                border: "1px solid var(--rule)",
                fontSize: 14,
                lineHeight: 1.65,
                color: "var(--ink)",
                fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              {/* <strong>Looking for:</strong> Fullstack / backend roles at small,
              opinionated teams. Open to remote, hybrid, and relocation.
              Available 2026. */}
              {ABOUT_PARAGRAPHS[1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
