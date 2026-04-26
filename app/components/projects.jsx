"use client";

import ProjectCard from "./projectCard.jsx";
import { projects } from "../data/projects.js";

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

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-24">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <SectionLabel n="05">Projects</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(28px, 3.8vw, 48px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                margin: 0,
                lineHeight: 1.05,
                color: "var(--ink)",
                fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              Things I built{" "}
              <span
                style={{
                  fontFamily: "var(--font-newsreader, Georgia, serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                because I wanted to.
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/shohaibmk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: "var(--muted)",
              textDecoration: "none",
              borderBottom: "1px solid var(--ink)",
              color: "var(--ink)",
              paddingBottom: 2,
              fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
            }}
          >
            See all on GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() =>
                window.open(
                  project.githubLink || "https://github.com/shohaibmk",
                  "_blank"
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
