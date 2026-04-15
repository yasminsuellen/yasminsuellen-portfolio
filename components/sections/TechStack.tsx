"use client";

import { useTranslation } from "@/lib/i18n/context";
import { SectionTitle } from "./About";
import { FadeIn } from "@/components/FadeIn";

/*
 * Usamos skillicons.dev para gerar os ícones de tecnologia automaticamente.
 * É uma API pública que retorna um SVG com os ícones por nome.
 * Não precisamos baixar nenhum ícone manualmente.
 */

const primaryStack = ["ts", "js", "nextjs", "react", "tailwind", "nodejs"];
const toolsStack = ["git", "github", "figma", "linux", "vscode"];
const learningStack = ["docker", "postgres", "python"];

interface StackGroupProps {
  label: string;
  icons: string[];
}

function StackGroup({ label, icons }: StackGroupProps) {
  const iconParam = icons.join(",");

  return (
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://skillicons.dev/icons?i=${iconParam}&theme=dark`}
        alt={`${label} icons`}
        className="h-10"
      />
    </div>
  );
}

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.stack.title} />

        <div className="mt-12 space-y-10">
          <FadeIn delay={0.1}><StackGroup label={t.stack.primary} icons={primaryStack} /></FadeIn>
          <FadeIn delay={0.2}><StackGroup label={t.stack.tools} icons={toolsStack} /></FadeIn>
          <FadeIn delay={0.3}><StackGroup label={t.stack.learning} icons={learningStack} /></FadeIn>
        </div>
      </div>
    </section>
  );
}
