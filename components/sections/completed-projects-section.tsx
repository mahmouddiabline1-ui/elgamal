"use client";

import { FadeImage } from "@/components/fade-image";
import { completedProjects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

export function CompletedProjectsSection() {
  const { t } = useI18n();
  return (
    <section id="portfolio" className="bg-secondary/30 py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-4">
              {t("Completed Projects")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("A showcase of our successfully delivered residential, commercial, and administrative projects that stand as testament to our commitment to excellence.")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-border bg-background"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <FadeImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm mb-2">
                      {t(project.category)}
                    </span>
                    <h3 className="text-xl font-medium text-white">{t(project.name)}</h3>
                    <p className="text-sm text-white/80 mt-1">{t("Completed in")} {project.year}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">
                    {t("Successfully delivered with premium quality specifications and modern design principles.")}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground bg-secondary px-3 py-1 rounded-full">
                      {t(project.category)}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
