"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";

const orderedProjects = [...projects].sort((a, b) => {
  const priority = { "For Sale": 0, Portfolio: 1, Contracting: 2 };
  return priority[a.purpose] - priority[b.purpose];
});

export function ProjectShowcaseSlider() {
  const { t, lang, dir } = useI18n();
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * .78, behavior: "smooth" });
  };

  const updateActive = () => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.children) as HTMLElement[];
    const railStart = rail.getBoundingClientRect().left;
    const closest = cards.reduce((best, card, index) => Math.abs(card.getBoundingClientRect().left - railStart) < best.distance ? { index, distance: Math.abs(card.getBoundingClientRect().left - railStart) } : best, { index: 0, distance: Infinity });
    setActive(closest.index);
  };

  return (
    <section id="project-showcase" className="overflow-hidden bg-[#35231f] py-24 text-[#f2eadd] md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div>
          <SectionHeading align="start" eyebrow="Selected work" title="Places with a story" description="Swipe through current opportunities and selected work shaped by AL GAMAL." className="[&_h2]:text-[#f2eadd] [&_p]:text-[#f2eadd]/65" />
        </div>

        <div className="relative mt-14">
          <div ref={railRef} onScroll={updateActive} className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
            {orderedProjects.map((project, index) => {
              const name = lang === "ar" ? project.nameAr : project.name;
              const location = lang === "ar" ? project.locationAr : project.location;
              return (
                <Link key={project.id} href={`/projects/${project.id}/`} className="group relative aspect-[4/5] w-[84vw] max-w-[570px] shrink-0 snap-start overflow-hidden bg-[#241612] sm:w-[62vw] lg:w-[43vw]">
                  <Image src={project.image} alt={name} fill sizes="(max-width: 640px) 84vw, (max-width: 1024px) 62vw, 43vw" className="object-cover transition duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f110e] via-[#2b1813]/10 to-transparent" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-7">
                    <span className="rounded-full bg-[#f2eadd] px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#35231f]">{t(project.purpose)}</span>
                    <span className="font-display text-4xl text-white/55">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                    <p className="mb-3 flex items-center gap-2 text-xs text-white/65"><MapPin size={14} />{location}</p>
                    <h3 className="max-w-lg font-display text-4xl font-semibold leading-none text-white md:text-5xl">{name}</h3>
                    <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-semibold uppercase tracking-[.16em] text-white/65"><span>{t(project.category)}</span><span>{t("View project")} →</span></div>
                  </div>
                </Link>
              );
            })}
          </div>

          <button type="button" onClick={() => move(dir === "rtl" ? 1 : -1)} aria-label={t("Previous project")} className="absolute start-1 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-[#241612]/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-[#f2eadd] hover:text-[#35231f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:start-3 md:h-14 md:w-14">
            <ArrowLeft size={20} />
          </button>
          <button type="button" onClick={() => move(dir === "rtl" ? -1 : 1)} aria-label={t("Next project")} className="absolute end-1 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-[#241612]/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-[#f2eadd] hover:text-[#35231f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:end-3 md:h-14 md:w-14">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-5 flex items-center gap-4 text-xs font-bold tracking-[.2em] text-[#f2eadd]/55">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="h-px flex-1 bg-[#f2eadd]/15"><div className="h-px bg-[#f2eadd] transition-all duration-300" style={{ width: `${((active + 1) / orderedProjects.length) * 100}%` }} /></div>
          <span>{String(orderedProjects.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
