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
  const mobileSectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (section) {
        const distance = section.offsetHeight - window.innerHeight;
        setProgress(Math.max(0, Math.min(1, -section.getBoundingClientRect().top / Math.max(distance, 1))));
      }
      const mobileSection = mobileSectionRef.current;
      if (mobileSection) {
        const distance = mobileSection.offsetHeight - window.innerHeight;
        setMobileProgress(Math.max(0, Math.min(1, -mobileSection.getBoundingClientRect().top / Math.max(distance, 1))));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const gridProgress = Math.max(0, Math.min(1, (progress - 0.12) / 0.72));
  const copyOpacity = Math.max(0, 1 - progress / 0.32);
  const copyLift = Math.min(46, progress * 150);
  const mobileSceneProgress = Math.min(1, mobileProgress / 0.72);
  const mobileDarkProgress = Math.max(0, Math.min(1, (mobileProgress - 0.42) / 0.42));
  const mobileMarkProgress = Math.max(0, Math.min(1, (mobileProgress - 0.62) / 0.28));

  return (
    <div id="hero" className="bg-[#241612]">
      <section ref={mobileSectionRef} className="relative h-[280svh] bg-black text-[#f2eadd] md:hidden">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
          <div
            className="absolute inset-x-0 top-0 h-[158svh] will-change-transform"
            style={{ transform: `translate3d(0, ${mobileSceneProgress * -58}svh, 0) scale(${1 + mobileSceneProgress * 0.035})` }}
          >
            <Image src="/brand/al-gamal-hero.webp" alt="Contemporary architecture by AL GAMAL" fill priority sizes="100vw" className="object-cover object-[64%_center]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,.03)_42%,rgba(0,0,0,.72))]" />

          <div
            className="absolute inset-x-0 top-[34svh] z-10 px-5 text-center will-change-transform"
            style={{ opacity: Math.max(0, 1 - mobileProgress / 0.38), transform: `translate3d(0, ${mobileSceneProgress * -28}svh, 0)` }}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.28em] text-[#e4c49c]">AL GAMAL · NEW DAMIETTA</p>
            <h1 className="font-display text-[4.75rem] font-semibold leading-[.78] tracking-[-.065em] text-[#fff8ec] drop-shadow-2xl">
              {lang === "ar" ? <>قوة<br />تدوم</> : <>Built to<br />endure.</>}
            </h1>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 bg-black will-change-[height]" style={{ height: `${mobileDarkProgress * 108}%` }}>
            <div className="absolute inset-x-0 top-0 h-32 -translate-y-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div
            className="absolute inset-0 z-30 grid place-items-center will-change-transform"
            style={{ opacity: mobileDarkProgress, transform: `translate3d(0, ${(1 - mobileDarkProgress) * 18}svh, 0)` }}
          >
            <div className="relative flex flex-col items-center gap-8">
              <Image
                src="/brand/al-gamal-icon-light.png"
                alt="AL GAMAL"
                width={196}
                height={196}
                className="h-40 w-40 object-contain"
                style={{ opacity: 0.1 + mobileMarkProgress * 0.9, filter: `drop-shadow(0 0 ${6 + mobileMarkProgress * 24}px rgba(242,234,221,${mobileMarkProgress * 0.35}))` }}
              />
              <p className="text-[10px] font-semibold uppercase tracking-[.38em] text-[#d7b68f]" style={{ opacity: mobileMarkProgress }}>REAL ESTATE · CONTRACTING</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[.3em] text-white/60" style={{ opacity: 1 - Math.min(1, mobileProgress * 3) }}>
            {t("Scroll to reveal")}
          </div>
          <div className="absolute inset-0 z-40 opacity-[.07] grain-overlay" />
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden h-[220svh] bg-[#241612] text-[#f2eadd] md:block">
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
    </div>
  );
}
