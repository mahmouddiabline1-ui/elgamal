"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const panels = [
  { src: "/projects/liver-mall-2/04.webp", alt: "LIVER MALL 2 architectural render", side: "outer" },
  { src: "/projects/plot-162-a/03.webp", alt: "AL GAMAL completed residential project", side: "inner" },
  { src: "/brand/al-gamal-hero.webp", alt: "Contemporary architecture at golden hour", side: "center" },
  { src: "/projects/plot-138/03.webp", alt: "AL GAMAL warm-toned residential design", side: "inner" },
  { src: "/projects/plot-52-j/03.webp", alt: "AL GAMAL residential façade", side: "outer" },
];

export function HeroSection() {
  const { t, lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const distance = section.offsetHeight - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, -section.getBoundingClientRect().top / Math.max(distance, 1))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const gridProgress = Math.max(0, Math.min(1, (progress - 0.12) / 0.72));
  const copyOpacity = Math.max(0, 1 - progress / 0.32);
  const copyLift = Math.min(46, progress * 150);

  return (
    <section id="hero" ref={sectionRef} className="relative h-[220svh] bg-[#241612] text-[#f2eadd]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 flex gap-1.5 bg-[#241612] p-1.5 md:gap-2 md:p-2">
          {panels.map((panel, index) => {
            const isCenter = panel.side === "center";
            const isOuter = panel.side === "outer";
            const collapsedWidth = isCenter ? 100 : 0;
            const expandedWidth = isCenter ? 36 : isOuter ? 14 : 18;
            const width = collapsedWidth + (expandedWidth - collapsedWidth) * gridProgress;
            const direction = index < 2 ? -1 : index > 2 ? 1 : 0;
            return (
              <div
                key={panel.src}
                className={`${isOuter ? "hidden md:block" : "block"} relative h-full min-w-0 overflow-hidden motion-reduce:!translate-x-0`}
                style={{
                  width: `${width}%`,
                  opacity: isCenter ? 1 : gridProgress,
                  transform: `translateX(${direction * (1 - gridProgress) * 42}px)`,
                  transition: "width 80ms linear, opacity 120ms linear",
                }}
              >
                <Image src={panel.src} alt={panel.alt} fill priority={isCenter} sizes={isCenter ? "100vw" : "22vw"} className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241612]/75 via-transparent to-[#241612]/15" />
                {!isCenter && <span className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.28em] text-white/70 [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb]">0{index + 1} · AL GAMAL</span>}
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(28,15,12,.94)_0%,rgba(38,22,18,.72)_38%,rgba(38,22,18,.06)_78%)]" style={{ opacity: 1 - gridProgress * .9 }} />
        <div className="absolute inset-0 opacity-[.07] grain-overlay" />

        <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-12 pt-32 md:px-12 md:pb-16 lg:px-20">
          <div className="max-w-3xl" style={{ opacity: copyOpacity, transform: `translateY(-${copyLift}px)` }}>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[.34em] text-[#d7b68f]">{t("Real Estate Development & Contracting")}</p>
            <h1 className="text-balance font-display text-6xl font-semibold leading-[.86] tracking-[-.05em] text-[#fff8ec] drop-shadow-2xl md:text-8xl lg:text-[8rem]">
              {lang === "ar" ? "قوة تدوم" : "Strength that lasts."}
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-[#fff8ec]/85 md:text-lg">{t("Rooted in craft. Built with purpose. Creating enduring places across New Damietta.")}</p>
            <div className="pointer-events-auto mt-9 flex flex-wrap gap-3">
              <Link href="#project-showcase" className="inline-flex items-center gap-3 rounded-full bg-[#f2eadd] px-6 py-3 text-sm font-bold text-[#35231f] transition hover:bg-white">{t("Explore Our Projects")}<ArrowDownLeft size={17} /></Link>
              <Link href="#contact" className="rounded-full border border-[#f2eadd]/45 bg-[#35231f]/20 px-6 py-3 text-sm font-bold text-[#f2eadd] backdrop-blur transition hover:bg-[#f2eadd]/10">{t("Start a Conversation")}</Link>
            </div>
          </div>
          <div className="mt-10 flex justify-between border-t border-[#f2eadd]/25 pt-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#f2eadd]/65" style={{ opacity: copyOpacity }}>
            <span>New Damietta · Egypt</span><span className="hidden sm:block">{t("Scroll to reveal")}</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center transition-opacity" style={{ opacity: gridProgress > .7 ? 1 : 0 }}>
          <Image src="/brand/al-gamal-logo-light.png" alt="AL GAMAL" width={210} height={70} className="h-auto w-40 drop-shadow-xl md:w-52" />
        </div>
      </div>
    </section>
  );
}
