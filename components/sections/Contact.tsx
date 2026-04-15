"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { SectionTitle } from "./About";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-15 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.contact.title} />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col justify-start gap-6">
            <p className="text-base" style={{ color: "var(--muted)" }}>
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              <ContactLink
                href="https://github.com/yasminsuellen"
                label="GitHub"
                sublabel="@yasminsuellen"
              >
                <GithubIcon />
              </ContactLink>

              <ContactLink
                href="https://www.linkedin.com/in/yasminsuellen/"
                label="LinkedIn"
                sublabel="in/yasminsuellen"
              >
                <LinkedinIcon />
              </ContactLink>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-base mb-2"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.name_label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.name_placeholder}
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm outline-none transition-all duration-200 focus:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  backgroundColor: "var(--surface)",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base mb-2"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.email_label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.email_placeholder}
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm outline-none transition-all duration-200 focus:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  backgroundColor: "var(--surface)",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base mb-2"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.message_label}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.message_placeholder}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm outline-none resize-none transition-all duration-200 focus:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  backgroundColor: "var(--surface)",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "var(--accent)",
                color: "#FFFFFF",
              }}
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>

            {status === "success" && (
              <p className="text-sm text-center" style={{ color: "#22c55e" }}>
                {t.contact.success}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-center" style={{ color: "#ef4444" }}>
                {t.contact.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  sublabel,
  children,
}: {
  href: string;
  label: string;
  sublabel: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 p-4 rounded-xl border"
      style={{
        borderColor: hovered ? "var(--accent)" : "var(--border)",
        backgroundColor: "var(--surface)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "border-color 0.2s ease, transform 0.2s ease",
      }}
    >
      <span style={{ color: "var(--accent)" }}>{children}</span>
      <div>
        <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
          {label}
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
          {sublabel}
        </p>
      </div>
    </a>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
