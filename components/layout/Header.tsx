"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { useTheme } from "@/lib/theme/context";

/*
 * Header fixo com efeito glassmorphism ao rolar a página.
 * Contém: nome/logo | links de navegação | toggle idioma | toggle tema
 */
export function Header() {
  const { t, language, toggleLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para aplicar o glassmorphism
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : ""
      }`}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 80%, transparent)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <a
          href="#"
          className="font-bold text-lg tracking-tight transition-colors duration-200"
          style={{ color: "var(--accent)" }}
        >
          ys.
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100 opacity-70"
              style={{ color: "var(--fg)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controles: idioma + tema */}
        <div className="flex items-center gap-3">
          {/* Toggle de idioma */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:opacity-100 opacity-60"
            style={{
              color: "var(--fg)",
              borderColor: "var(--border)",
            }}
            aria-label="Toggle language"
          >
            {language === "en" ? "PT" : "EN"}
          </button>

          {/* Toggle de tema */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 hover:opacity-100 opacity-60"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              // Ícone Sol (light mode)
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
              // Ícone Lua (dark mode)
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Botão hamburguer mobile */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--fg)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "var(--fg)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--fg)" }}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "var(--fg)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
