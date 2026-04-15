"use client";

import { useTranslation } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Título da seção */}
        <SectionTitle title={t.about.title} />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Coluna esquerda: Bio + Background */}
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
                  style={{ color: "var(--muted)" }}
                >
                  {t.about.background}
                </p>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: "var(--muted)" }}
                >
                  {t.about.background_closing}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Coluna direita: Currently */}
          <FadeIn delay={0.2} direction="right">
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--accent)" }}
              >
                {t.about.currently_title}
              </h3>
              <ul className="space-y-4">
                {t.about.currently.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span style={{ color: "var(--accent)" }} className="mt-1 flex-shrink-0">
                      →
                    </span>
                    <span style={{ color: "var(--muted)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* Componente reutilizável de título de seção */
export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2
        className="text-2xl md:text-3xl font-bold"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px max-w-xs"
        style={{ backgroundColor: "var(--border)" }}
      />
    </div>
  );
}
