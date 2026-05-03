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

const publications = [
  {
    title: "An E-Health Patient Management System.",
    venue:
      "Grenze Int'l Journal of Engineering & Technology (GIJET) · 2021 · Vol 7 · Issue 2",
    summary:
      "Patients describe symptoms by voice; the system transcribes them, extracts medical terms with NLP, and predicts disease with a Random Forest model at 93.55% accuracy across 41 diseases.",
    citationLink:
      "https://openurl.ebsco.com/EPDB%3Agcd%3A13%3A34765981/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A152542807&crl=c&link_origin=scholar.google.com",
    paperLink:
      "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=934&id=8",
  },
  {
    title: "Proposed Model of Speech Recognition using MFCC and DNN",
    venue:
      "Int'l Journal of Engineering Research & Technology (IJERT) · May 2020",
    summary:
      "A speech-to-text pipeline combining MFCC feature extraction with deep neural networks built for noisy, large-scale datasets where SVMs start to fall apart.",
    citationLink:
      "https://www.ijert.org/proposed-model-of-speech-recognition-using-mfcc-and-dnn",
    paperLink:
      "https://www.ijert.org/research/proposed-model-of-speech-recognition-using-mfcc-and-dnn-IJERTV9IS050421.pdf",
  },
];

export default function Research() {
  return (
    <section id="research" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <SectionLabel n="04">Research &amp; Publications</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(28px, 3.2vw, 44px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 48px",
            lineHeight: 1.08,
            color: "var(--ink)",
            fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
          }}
        >
          Two papers I'm{" "}
          <span
            style={{
              fontFamily: "var(--font-newsreader, Georgia, serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            still proud of.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((r) => (
            <div
              key={r.title}
              style={{
                background: "var(--card)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  letterSpacing: "0.06em",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                Peer-reviewed
              </div>
              <a
                href={r.citationLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 22px)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    fontFamily:
                      "var(--font-inter-tight, system-ui, sans-serif)",
                  }}
                >
                  {r.title}
                </h3>
              </a>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  marginBottom: 16,
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  lineHeight: 1.5,
                }}
              >
                {r.venue}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  margin: "0 0 20px",
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  flex: 1,
                }}
              >
                {r.summary}
              </p>
              <a
                href={r.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
                }}
              >
                Read paper →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
