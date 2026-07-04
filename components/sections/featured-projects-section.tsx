"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { projects, type Project } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

export function FeaturedProjectsSection() {
  const { t } = useI18n();
  const featuredProjects = projects.slice(0, 8);

  return (
    <section id="projects" className="bg-background py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-4">
              {t("Featured Projects")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("Explore our portfolio of premium real estate developments across residential, commercial, administrative, and mixed-use categories.")}
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Residential", "Commercial", "Administrative", "Mixed Use"].map((category) => (
              <button
                key={category}
                className="px-5 py-2 text-sm font-medium rounded-full border border-border bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {t(category)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#all-projects"
              className="inline-block px-8 py-3 text-sm font-medium transition-all rounded-full border border-border bg-background text-foreground hover:bg-foreground hover:text-background"
            >
              {t("View All Projects")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
