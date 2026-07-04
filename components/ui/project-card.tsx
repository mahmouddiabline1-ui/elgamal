"use client";

import { Project, ProjectStatus } from "@/lib/projects";
import { FadeImage } from "@/components/fade-image";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<ProjectStatus, string> = {
  Available: "bg-green-100 text-green-700 border-green-200",
  "Under Construction": "bg-amber-100 text-amber-700 border-amber-200",
  Ready: "bg-blue-100 text-blue-700 border-blue-200",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();
  return (
    <div className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <FadeImage
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${statusStyles[project.status]}`}
          >
            {t(project.status)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-foreground text-background">
            {t(project.category)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
            {t(project.name)}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t(project.location)}
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {t(project.description)}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="rounded-lg bg-secondary/50 p-2">
            <p className="text-xs text-muted-foreground">{t("Starting Price")}</p>
            <p className="font-medium text-foreground">{t(project.price)}</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-2">
            <p className="text-xs text-muted-foreground">{t("Area")}</p>
            <p className="font-medium text-foreground">{t(project.area)}</p>
          </div>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="block w-full text-center px-4 py-2.5 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
        >
          {t("View Project")}
        </Link>
      </div>
    </div>
  );
}
