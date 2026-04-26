"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 3,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 48px",
        background: scrolled ? "rgba(250,246,239,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "none",
        transition: "background 0.25s ease, border-color 0.25s ease",
        fontFamily: "var(--font-inter-tight, system-ui, sans-serif)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--accent)",
            color: "#13110e",
            display: "grid",
            placeItems: "center",
            fontSize: 13,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          S
        </div>
        <strong style={{ fontSize: 15, color: "var(--ink)" }}>
          Shohaib Mallick
        </strong>
        <span
          style={{ fontSize: 13, color: "var(--muted)", marginLeft: 4 }}
          className="hidden lg:inline"
        >
          · Fullstack Software Engineer
        </span>
      </div>

      <div
        className="hidden md:flex"
        style={{ alignItems: "center", gap: 28, fontSize: 14 }}
      >
        {["about", "experience", "projects", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a
          href="https://res.cloudinary.com/dbqwc4btc/image/upload/v1763652289/Shohaib_Mallick_Resume_sqq8og.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--ink)",
            color: "var(--bg)",
            padding: "10px 18px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Download résumé →
        </a>
      </div>
    </nav>
  );
}
