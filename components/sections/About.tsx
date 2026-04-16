"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-0 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.about.title} />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <FadeIn delay={0.1} direction="left">
            <div className="space-y-8">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg)" }}
              >
                {t.about.bio}
              </p>

              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {t.about.background_title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--fg)" }}
                >
                  {t.about.background}
                </p>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--fg)" }}
                >
                  {t.about.background_closing}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right" className="h-full">
            <div className="flex flex-col h-full">
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                {t.about.currently_title}
              </h3>
              <div className="flex flex-col flex-1 gap-3">
                {t.about.currently.map((item, i) => (
                  <CurrentlyCard key={i} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CurrentlyCard({ item }: { item: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-1 items-center px-4 py-3 rounded-xl border text-sm leading-relaxed"
      style={{
        borderColor: hovered ? "var(--accent)" : "var(--border)",
        backgroundColor: "var(--surface)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "border-color 0.2s ease, transform 0.2s ease",
      }}
    >
      <span style={{ color: "var(--fg)" }}>{item}</span>
    </div>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-end gap-4">
      <h2
        className="font-display text-3xl md:text-4xl tracking-wider"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px mb-1"
        style={{ backgroundColor: "var(--border)" }}
      />
    </div>
  );
}
