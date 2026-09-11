"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t, lang } = useI18n();

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-[#35231f] text-[#f2eadd]">
      <Image
        src="/brand/al-gamal-hero.webp"
        alt="Contemporary architecture at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,18,14,.94)_0%,rgba(44,27,22,.72)_38%,rgba(44,27,22,.16)_72%,rgba(44,27,22,.24)_100%)]" />
      <div className="absolute inset-0 opacity-[.08] grain-overlay" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:px-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[.35em] text-[#d7b68f]">
            {t("Real Estate Development & Contracting")}
          </p>
          <h1 className="text-balance font-display text-6xl font-medium leading-[.88] tracking-[-.045em] md:text-8xl lg:text-[7.8rem]">
            {lang === "ar" ? "قوة تدوم" : "Strength that lasts."}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#f2eadd]/78 md:text-lg">
            {t("Rooted in craft. Built with purpose. Creating enduring places across New Damietta.")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#f2eadd] px-6 py-3 text-sm font-semibold text-[#35231f] transition hover:bg-white">
              {t("Explore Our Projects")}
              <ArrowDownLeft size={17} />
            </Link>
            <Link href="#contact" className="rounded-full border border-[#f2eadd]/35 px-6 py-3 text-sm font-semibold text-[#f2eadd] transition hover:bg-[#f2eadd]/10">
              {t("Start a Conversation")}
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-[#f2eadd]/20 pt-5 text-xs uppercase tracking-[.18em] text-[#f2eadd]/60">
          <span>New Damietta · Egypt</span>
          <span className="hidden md:block">Development · Contracting · Finishing</span>
        </div>
      </div>
    </section>
  );
}
