"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "32px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        fontSize: 13,
        color: "var(--muted)",
        fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
      }}
    >
      <span>
        © 2026 Shohaib Mallick · Built with React, Next.js, and a lot of
        coffee.
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/shohaibmk/",
          },
          { label: "GitHub", href: "https://github.com/shohaibmk" },
          { label: "Email", href: "mailto:shohaibm99@gmail.com" },
          {
            label: "Résumé",
            href: "https://res.cloudinary.com/dbqwc4btc/image/upload/v1763652289/Shohaib_Mallick_Resume_sqq8og.pdf",
          },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
