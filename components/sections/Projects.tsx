"use client";

import { useTranslation } from "@/lib/i18n/context";
import { SectionTitle } from "./About";
import { FadeIn } from "@/components/FadeIn";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.projects.title} />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <ProjectCard project={project} t={t} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

function ProjectCard({
  project,
  t,
}: {
  project: ProjectItem;
  t: ReturnType<typeof useTranslation>["t"];
}) {
  return (
    <article
      className="flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.01]"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
      }}
    >
      {/* Número do projeto */}
      <span
        className="text-xs font-mono mb-4"
        style={{ color: "var(--accent)" }}
      >
        {String(getProjectIndex(project.title)).padStart(2, "0")}.
      </span>

      {/* Título */}
      <h3
        className="text-lg font-bold mb-3"
        style={{ color: "var(--fg)" }}
      >
        {project.title}
      </h3>

      {/* Descrição */}
      <p
        className="text-sm leading-relaxed flex-1 mb-6"
        style={{ color: "var(--muted)" }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border font-mono"
            style={{
              color: "var(--muted)",
              borderColor: "var(--border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: "var(--accent)" }}
        >
          <GithubIcon />
          {t.projects.view_code}
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--muted)" }}
          >
            <ExternalIcon />
            {t.projects.view_demo}
          </a>
        )}
      </div>
    </article>
  );
}

/* Gera o índice do projeto baseado na posição nas traduções */
function getProjectIndex(title: string) {
  const titles = ["Appointment Rebooking", "Task Management Dashboard"];
  return titles.indexOf(title) + 1;
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
