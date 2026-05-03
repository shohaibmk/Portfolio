"use client";

import Image from "next/image";

export default function ProjectCard({ project, onClick }) {
  const { name, description, image, technologies, githubLink } = project;

  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--bg)",
        border: "1px solid var(--rule)",
        borderRadius: 20,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "pointer",
        height: "100%",
        transition: "border-color 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(212,160,101,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--rule)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image or hatch placeholder */}
      <div
        style={{
          height: 140,
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          border: "1px solid var(--rule)",
          background: image
            ? "transparent"
            : `repeating-linear-gradient(135deg, var(--rule) 0 1px, transparent 1px 14px)`,
          display: "grid",
          placeItems: "center",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-jetbrains-mono, monospace)",
              color: "var(--muted)",
              letterSpacing: "0.06em",
            }}
          >
            {name.toLowerCase().replace(/\s/g, "-")}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(18px, 1.6vw, 22px)",
          fontWeight: 500,
          letterSpacing: "-0.015em",
          margin: 0,
          lineHeight: 1.2,
          color: "var(--ink)",
          fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
        }}
      >
        {name}
      </h3>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--muted)",
            margin: 0,
            fontFamily: "var(--font-newsreader, Georgia, serif)",
            flex: 1,
          }}
        >
          {description}
        </p>
      )}

      {/* Tech pills */}
      {technologies && technologies.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(0,0,0,0.04)",
                color: "var(--ink)",
                padding: "4px 10px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
                border: "1px solid var(--rule)",
                fontFamily:
                  "var(--font-inter-tight, system-ui, sans-serif)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Footer link */}
      {githubLink && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 4,
            fontSize: 13,
            fontFamily: "var(--font-jetbrains-mono, monospace)",
          }}
        >
          <span style={{ color: "var(--muted)" }}>
            {githubLink.replace("https://", "")}
          </span>
          <span style={{ color: "var(--ink)", fontWeight: 500 }}>
            View code →
          </span>
        </div>
      )}
    </div>
  );
}
