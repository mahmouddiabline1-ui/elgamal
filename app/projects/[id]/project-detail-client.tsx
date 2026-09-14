"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Project, projects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

export function ProjectDetailPageClient({ project }: { project: Project }) {
  const { lang, t } = useI18n();
  const name = lang === "ar" ? project.nameAr : project.name;
  const location = lang === "ar" ? project.locationAr : project.location;
  const description = lang === "ar" ? project.descriptionAr : project.description;
  const related = projects.filter((item) => item.purpose === project.purpose && item.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-[76svh] overflow-hidden bg-[#35231f]">
        <Image src={project.image} alt={name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21130f] via-[#2b1914]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-14 md:px-12 lg:px-20">
          <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft size={16} />{t("Back to projects")}</Link>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[#f2eadd]">
            <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur">{t(project.purpose)}</span>
            <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur">{t(project.status)}</span>
            <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur">{project.code}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-none text-[#f2eadd] md:text-7xl">{name}</h1>
          <p className="mt-5 flex items-center gap-2 text-[#f2eadd]/75"><MapPin size={17} />{location}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-12 lg:grid-cols-[1.7fr_1fr] lg:px-20 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.3em] text-accent">{t("Project Overview")}</p>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-foreground/85">{description}</p>

          {project.highlights?.length ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => <div key={item} className="flex items-center gap-3 border-b border-border py-4 text-sm"><Check size={17} className="text-accent" />{item}</div>)}
            </div>
          ) : null}

          <div className="mt-16">
            <h2 className="font-display text-4xl font-medium">{t("Gallery")}</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div key={image} className={`relative overflow-hidden bg-secondary ${index === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"}`}>
                  <Image src={image} alt={`${name} ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-24 border border-border bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">{t("Project Information")}</p>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="border-b border-border pb-4"><dt className="text-muted-foreground">{t("Category")}</dt><dd className="mt-1 font-semibold">{t(project.category)}</dd></div>
              <div className="border-b border-border pb-4"><dt className="text-muted-foreground">{t("Division")}</dt><dd className="mt-1 font-semibold">{t(project.division)}</dd></div>
              {project.area ? <div className="border-b border-border pb-4"><dt className="text-muted-foreground">{t("Area")}</dt><dd className="mt-1 font-semibold">{project.area}</dd></div> : null}
              {project.partner ? <div className="border-b border-border pb-4"><dt className="text-muted-foreground">{t("Partner")}</dt><dd className="mt-1 font-semibold">{project.partner}</dd></div> : null}
            </dl>

            {project.availableUnits?.length ? (
              <div className="mt-8">
                <h3 className="font-display text-2xl">{t("Available Units")}</h3>
                <div className="mt-4 space-y-3">
                  {project.availableUnits.map((unit, index) => <div key={`${unit.type}-${index}`} className="bg-secondary/60 p-4 text-sm"><strong>{unit.area}</strong><p className="mt-1 text-muted-foreground">{unit.type}{unit.floor ? ` · ${unit.floor}` : ""}</p></div>)}
                </div>
              </div>
            ) : null}

            <Link href={project.purpose === "For Sale" ? `/campaigns/${project.slug}/#campaign-lead` : "/#contact"} className="mt-8 block rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold text-background hover:bg-accent hover:text-white">{t("Request Project Details")}</Link>
          </div>
        </aside>
      </section>

      {related.length ? <section className="border-t border-border px-6 py-20 md:px-12 lg:px-20"><div className="mx-auto max-w-7xl"><h2 className="font-display text-4xl">{t("Related Projects")}</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.id} href={`/projects/${item.id}`} className="group"><div className="relative aspect-[4/3] overflow-hidden"><Image src={item.image} alt={lang === "ar" ? item.nameAr : item.name} fill className="object-cover transition duration-700 group-hover:scale-105" /></div><p className="mt-4 font-semibold">{lang === "ar" ? item.nameAr : item.name}</p></Link>)}</div></div></section> : null}
    </main>
  );
}
