"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, type ProjectPurpose } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

type Filter = "All" | ProjectPurpose;

export function FeaturedProjectsSection() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.purpose === filter);

  return (
    <section id="projects" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-14 grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.3em] text-accent">{t("Built by AL GAMAL")}</p>
            <h2 className="font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl">{t("Our Projects")}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              {t("Explore projects offered for sale, selected portfolio work, and contracting assignments — each presented with its verified status.")}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", "For Sale", "Portfolio", "Contracting"] as Filter[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${filter === item ? "border-foreground bg-foreground text-background" : "border-border text-foreground hover:border-foreground"}`}
              >
                {t(item)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
