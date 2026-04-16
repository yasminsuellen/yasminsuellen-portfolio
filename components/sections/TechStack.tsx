"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { SectionTitle } from "./About";
import { FadeIn } from "@/components/FadeIn";

const row1 = ["TypeScript", "JavaScript", "Next.js", "React", "HTML5", "CSS3"];
const row2 = ["Tailwind CSS", "Node.js", "PostgreSQL", "REST APIs", "Express.js", "Git", "GitHub", "Figma"];
const row3 = ["VS Code", "Linux", "Docker", "Python", "CI/CD"];

function TagChip({ tag }: { tag: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-sm px-4 py-2 rounded-full border font-bold cursor-default"
      style={{
        backgroundColor: hovered ? "var(--accent)" : "var(--surface)",
        borderColor:     hovered ? "var(--accent)" : "var(--border)",
        color:           hovered ? "#ffffff"        : "var(--chip-color)",
        transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
      }}
    >
      {tag}
    </span>
  );
}

function TagRow({ tags, delay = 0 }: { tags: string[]; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <TagChip key={tag} tag={tag} />
        ))}
      </div>
    </FadeIn>
  );
}

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.stack.title} />

        <div className="mt-12 flex flex-col gap-4">
          <TagRow tags={row1} delay={0.1} />
          <TagRow tags={row2} delay={0.2} />
          <TagRow tags={row3} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
