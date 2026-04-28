const BOSTON_UNIVERSITY_URL =
  "https://www.linkedin.com/school/boston-university/about/";
const PUNE_UNIVERSITY_URL =
  "https://www.linkedin.com/school/university-of-pune/about/";
const LIBRARY_IMAGE_URL =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80";
// const LIBRARY_IMAGE_URL = "/IMG20240518184709.jpg";

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
    schoolUrl: BOSTON_UNIVERSITY_URL,
    degree: "M.S. Computer Science",
    dates: "Sept 2022 – May 2024 · Boston, MA",
    note: "Focus: Artificial Intelligence, Machine Learning, Cloud Computing, and Distributed Systems.",
  },
  {
    school: "Savitribai Phule Pune University",
    schoolUrl: PUNE_UNIVERSITY_URL,
    degree: "B.E. Computer Engineering",
    dates: "Aug 2017 – Jun 2021 · Pune, India",
    note: "Capstone: E-Health Patient Management System using voice recognition + ML to predict diseases from symptoms.",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div>
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
            <div className="grid grid-cols-1 gap-6">
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

          {/* Editorial image panel — desktop only */}
          <div
            className="hidden lg:block"
            style={{ position: "sticky", top: 250 }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--rule)",
                position: "relative",
              }}
            >
              <img
                src={LIBRARY_IMAGE_URL}
                alt="Library shelves — academic journey"
                style={{
                  width: "100%",
                  height: 460,
                  objectFit: "cover",
                  display: "block",
                  filter: "saturate(0.8) sepia(0.12)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "48px 24px 24px",
                  background:
                    "linear-gradient(to top, rgba(26,22,18,0.68) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-newsreader, Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: 15,
                    color: "rgba(250,246,239,0.92)",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  From Pune to Boston —
                  <br />
                  always learning.
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: 12,
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "var(--rule)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                TWO COUNTRIES · TWO DEGREES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
