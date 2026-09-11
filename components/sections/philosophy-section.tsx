"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const principles = [
  { number: "01", title: "Building Better Communities.", text: "Places designed around the people who live, work, and grow within them." },
  { number: "02", title: "Engineering Excellence.", text: "Every detail is planned, executed, and reviewed to endure for generations." },
  { number: "03", title: "Redefining Living Spaces.", text: "Architecture where purposeful design meets a distinctly modern way of life." },
];

export function PhilosophySection() {
  const { t, lang } = useI18n();

  return (
    <section id="overview" className="overflow-hidden bg-[#f2eadd] text-[#35231f]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-[#a66c3d]">
              <span className="h-px w-12 bg-[#a66c3d]" />
              {lang === "ar" ? "رؤيتنا" : "Our philosophy"}
            </div>
            <h2 className="max-w-3xl text-balance font-display text-[3.4rem] font-semibold leading-[.92] tracking-[-.045em] md:text-7xl lg:text-[6.25rem]">
              {t("Building Better Communities.")}
            </h2>
          </div>

          <div className="border-s border-[#a66c3d]/35 ps-6 md:ps-8">
            <p className="max-w-xl text-base font-medium leading-8 text-[#755f55] md:text-lg md:leading-9">
              {t("A leading real estate development and interior design firm delivering premium residential, commercial, and administrative projects across the region. With over 18 years of experience, we combine innovation, quality craftsmanship, and sustainable practices to create spaces that inspire.")}
            </p>
            <Link href="#development" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#35231f] pb-2 text-sm font-bold transition-colors hover:border-[#a66c3d] hover:text-[#a66c3d] focus-visible:outline-2 focus-visible:outline-offset-4">
              {lang === "ar" ? "اكتشف مشروعاتنا" : "Discover our work"}
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-3 md:mt-20 md:gap-5">
          <div className="relative col-span-8 aspect-[4/5] overflow-hidden md:col-span-7 md:aspect-[16/11]">
            <Image src="/projects/liver-mall-2/04.webp" alt="AL GAMAL mixed-use architecture" fill sizes="(max-width: 768px) 67vw, 58vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241612]/55 via-transparent to-transparent" />
            <p className="absolute bottom-4 start-4 text-[9px] font-bold uppercase tracking-[.24em] text-white md:bottom-6 md:start-6">LIVER MALL 2 · NEW DAMIETTA</p>
          </div>
          <div className="col-span-4 flex flex-col gap-3 md:col-span-5 md:gap-5">
            <div className="relative flex-1 overflow-hidden">
              <Image src="/projects/plot-138/03.webp" alt="AL GAMAL residential architecture" fill sizes="(max-width: 768px) 33vw, 42vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
            </div>
            <div className="flex min-h-32 flex-col justify-between bg-[#35231f] p-4 text-[#f2eadd] md:min-h-48 md:p-8">
              <span className="font-display text-4xl font-semibold md:text-6xl">+18</span>
              <span className="text-[9px] font-bold uppercase leading-4 tracking-[.2em] text-[#d7b68f] md:text-[11px]">{lang === "ar" ? "عامًا من الخبرة" : "Years of experience"}</span>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#35231f]/20 md:mt-20">
          {principles.map((principle) => (
            <article key={principle.number} className="grid gap-4 border-b border-[#35231f]/20 py-7 md:grid-cols-[80px_1fr_1fr] md:items-center md:gap-8 md:py-9">
              <span className="text-[10px] font-bold tracking-[.25em] text-[#a66c3d]">{principle.number}</span>
              <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{t(principle.title)}</h3>
              <p className="max-w-md text-sm leading-7 text-[#755f55] md:text-base">{t(principle.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
