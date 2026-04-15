"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { useTheme } from "@/lib/theme/context";

export function Header() {
  const { t, language, toggleLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled ? "border-b" : ""
      }`}
      style={{
        backgroundColor: "var(--bg)",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl tracking-wider transition-colors duration-200"
          style={{ color: "var(--accent)" }}
        >
          .ys
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-base tracking-wider transition-colors duration-200 hover:opacity-100 opacity-70"
                style={{ color: "var(--fg)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block w-px h-4" style={{ backgroundColor: "var(--border)" }} />

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:opacity-100 opacity-60"
              style={{
                color: "#ffffff",
                borderColor: "var(--accent)",
                backgroundColor: "var(--accent)",
              }}
              aria-label="Toggle language"
            >
              {language === "en" ? "PT" : "EN"}
            </button>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 hover:opacity-100 opacity-60"
              style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent)", color: "#ffffff" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
