"use client";

import Image from "next/image";
import {
  Blocks, Building2, Gem, HardHat, KeyRound,
  Landmark, Layers3, Map, Palette, Store, Wrench,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";

const developmentIcons: LucideIcon[] = [Map, Building2, Store, Landmark, Blocks];
const contractingIcons: LucideIcon[] = [HardHat, Layers3, Wrench, Palette, Gem, KeyRound];

function GlassServiceGroup({
  title,
  items,
  icons,
  indexOffset = 0,
}: {
  title: string;
  items: typeof services;
  icons: LucideIcon[];
  indexOffset?: number;
}) {
  const { t } = useI18n();

  return (
    <div className="relative border-t border-white/15 py-10 md:py-14">
      <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
        <h3 className="font-display text-3xl font-semibold text-white md:text-5xl">{t(title)}</h3>
        <span className="hidden text-[10px] font-bold uppercase tracking-[.28em] text-white/45 sm:block">{String(indexOffset + 1).padStart(2, "0")} — {String(indexOffset + items.length).padStart(2, "0")}</span>
      </div>

      <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
        {items.map((service, index) => {
          const Icon = icons[index];
          return (
            <article key={service.name} className="group relative min-h-64 w-[78vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-[28px] border border-white/20 bg-white/[.09] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_24px_70px_rgba(0,0,0,.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/40 hover:bg-white/[.14] md:w-auto md:max-w-none md:p-8">
              <div className="pointer-events-none absolute -end-12 -top-12 h-36 w-36 rounded-full bg-[#d7b68f]/15 blur-3xl transition duration-500 group-hover:bg-[#d7b68f]/30" />
              <div className="relative flex h-full flex-col">
                <div className="mb-10 grid h-14 w-14 place-items-center rounded-[18px] border border-white/25 bg-white/[.14] text-[#f2eadd] shadow-[inset_0_1px_0_rgba(255,255,255,.35)] backdrop-blur-2xl md:h-16 md:w-16">
                  <Icon size={27} strokeWidth={1.45} />
                </div>
                <span className="mb-3 text-[9px] font-bold tracking-[.28em] text-[#d7b68f]">{String(indexOffset + index + 1).padStart(2, "0")}</span>
                <h4 className="text-xl font-semibold leading-snug text-white md:text-2xl">{t(service.name)}</h4>
                <p className="mt-3 text-sm leading-7 text-white/60">{t(service.description)}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const realEstateServices = services.slice(0, 5);
  const contractingServices = services.slice(5);

  return (
    <section id="services" className="relative overflow-hidden bg-[#1e1210] py-20 text-[#f2eadd] md:py-28">
      <Image src="/projects/plot-162-a/03.webp" alt="" fill sizes="100vw" className="object-cover object-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,12,10,.98)_5%,rgba(53,35,31,.83)_52%,rgba(23,13,11,.97)_100%)]" />
      <div className="absolute inset-0 opacity-[.08] grain-overlay" />
      <div className="pointer-events-none absolute -start-24 top-1/4 h-80 w-80 rounded-full bg-[#a66c3d]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -end-20 bottom-1/4 h-72 w-72 rounded-full bg-[#d7b68f]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-12 lg:px-20">
        <SectionHeading eyebrow="What we do" title="Our Services" description="Two integrated divisions under one roof — real estate development, and contracting & finishing — delivered to the highest standards of quality and innovation." className="mb-16 max-w-5xl [&_h2]:text-[#f2eadd] [&_p]:text-white/60" />
        <GlassServiceGroup title="Real Estate Development" items={realEstateServices} icons={developmentIcons} />
        <GlassServiceGroup title="Contracting & Finishing" items={contractingServices} icons={contractingIcons} indexOffset={5} />
      </div>
    </section>
  );
}
