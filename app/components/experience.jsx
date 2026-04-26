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

const experienceData = [
  {
    company: "Aaum AI",
    companyUrl: null,
    role: "Fullstack Software Engineer",
    dates: "Sept 2025 – Mar 2026",
    location: "Pune, India",
    outcome: "Cut API response time by ~35% with Postgres + Redis caching",
    bullets: [
      "Developed and integrated scalable APIs in Node.js (TypeScript), implementing Razorpay payment processor with webhooks for a subscription-based model — recurring billing went from \"sometimes works\" to reliable.",
      "Built an agentic RAG service (Python · FastAPI · LanceDB · Agno) so the product can actually read the web and remember what it learned.",
      "Integrated multiple LLM providers (OpenAI, Perplexity, and Grok) for dynamic chat completions, enhancing response diversity and reliability.",
      "Built responsive front-end interfaces with React (TypeScript) and Tailwind CSS, leveraging Zustand for efficient state management.",
      "Deployed services using Docker on AWS EC2, ensuring scalable, fault-tolerant infrastructure.",
    ],
  },
  {
    company: "Find Me LLC",
    companyUrl: "https://www.linkedin.com/company/findmeee/about/",
    role: "Fullstack Developer Intern",
    dates: "Dec 2024 – Jul 2025",
    location: "Remote · NC, USA",
    outcome: "Typo-tolerant search lifted discovery and cut bounce rate",
    bullets: [
      "Designed REST + GraphQL endpoints for a microservices backend aligned with platform reliability goals.",
      "Stitched Postgres, MongoDB, and Redis together with proper failovers — integrated fault-tolerant data layers.",
      "Set up real-time monitoring with OpenTelemetry + Grafana Loki — outages stopped being a guessing game.",
      "Shipped OAuth2 / JWT auth and a GitLab CI/CD pipeline the team actually trusts.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <SectionLabel n="03">Experience</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(28px, 3.8vw, 48px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 56px",
            lineHeight: 1.05,
            color: "var(--ink)",
            fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
          }}
        >
          Real work,{" "}
          <span
            style={{
              fontFamily: "var(--font-newsreader, Georgia, serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            real outcomes.
          </span>
        </h2>

        <div style={{ display: "grid", gap: 0 }}>
          {experienceData.map((x, i) => (
            <div
              key={x.company}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: 36,
                paddingBottom: 36,
                borderBottom:
                  i === experienceData.length - 1
                    ? "1px solid var(--rule)"
                    : "none",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
                {/* Left: company info */}
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      fontFamily: "var(--font-jetbrains-mono, monospace)",
                      letterSpacing: "0.06em",
                      marginBottom: 12,
                    }}
                  >
                    {x.dates}
                  </div>
                  {x.companyUrl ? (
                    <a
                      href={x.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <h3
                        style={{
                          fontSize: "clamp(18px, 1.8vw, 24px)",
                          fontWeight: 500,
                          letterSpacing: "-0.015em",
                          margin: "0 0 6px",
                          color: "var(--ink)",
                          fontFamily:
                            "var(--font-inter-tight, system-ui, sans-serif)",
                        }}
                      >
                        {x.company}
                      </h3>
                    </a>
                  ) : (
                    <h3
                      style={{
                        fontSize: "clamp(18px, 1.8vw, 24px)",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        margin: "0 0 6px",
                        color: "var(--ink)",
                        fontFamily:
                          "var(--font-inter-tight, system-ui, sans-serif)",
                      }}
                    >
                      {x.company}
                    </h3>
                  )}
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--accent)",
                      fontFamily: "var(--font-newsreader, Georgia, serif)",
                      fontStyle: "italic",
                      marginBottom: 6,
                    }}
                  >
                    {x.role}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      fontFamily:
                        "var(--font-inter-tight, system-ui, sans-serif)",
                    }}
                  >
                    {x.location}
                  </div>
                </div>

                {/* Right: outcome + bullets */}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      padding: "8px 14px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 24,
                      fontFamily:
                        "var(--font-inter-tight, system-ui, sans-serif)",
                    }}
                  >
                    ↗ {x.outcome}
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: 14,
                    }}
                  >
                    {x.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "16px 1fr",
                          gap: 12,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "var(--ink)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 600,
                            marginTop: 1,
                          }}
                        >
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
