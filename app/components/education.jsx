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

const educationData = [
  {
    school: "Boston University",
    schoolUrl: "https://www.linkedin.com/school/boston-university/about/",
    degree: "M.S. Computer Science",
    dates: "Sept 2022 – May 2024 · Boston, MA",
    note: "Focus: Artificial Intelligence, Machine Learning, Cloud Computing, and Distributed Systems.",
  },
  {
    school: "Savitribai Phule Pune University",
    schoolUrl: "https://www.linkedin.com/school/university-of-pune/about/",
    degree: "B.E. Computer Engineering",
    dates: "Aug 2017 – Jun 2021 · Pune, India",
    note: "Capstone: E-Health Patient Management System using voice recognition + ML to predict diseases from symptoms.",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <SectionLabel n="02">Education</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 48px",
            lineHeight: 1.08,
            color: "var(--ink)",
            fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
          }}
        >
          Two schools,{" "}
          <span
            style={{
              fontFamily: "var(--font-newsreader, Georgia, serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            two continents.
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((e) => (
            <div
              key={e.school}
              style={{
                background: "var(--card)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                padding: 32,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  letterSpacing: "0.06em",
                  marginBottom: 14,
                }}
              >
                {e.dates}
              </div>
              <a
                href={e.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    margin: "0 0 6px",
                    lineHeight: 1.2,
                    color: "var(--ink)",
                    fontFamily:
                      "var(--font-inter-tight, system-ui, sans-serif)",
                  }}
                >
                  {e.school}
                </h3>
              </a>
              <div
                style={{
                  fontSize: 16,
                  color: "var(--accent)",
                  marginBottom: 14,
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  fontStyle: "italic",
                }}
              >
                {e.degree}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                {e.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
