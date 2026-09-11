"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

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

  const desktopSceneProgress = Math.min(1, progress / 0.72);
  const desktopDarkProgress = Math.max(0, Math.min(1, (progress - 0.42) / 0.42));
  const desktopMarkProgress = Math.max(0, Math.min(1, (progress - 0.62) / 0.28));
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

      <section ref={sectionRef} className="relative hidden h-[280svh] bg-black text-[#f2eadd] md:block">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
          <div className="absolute inset-x-0 top-0 h-[152svh] will-change-transform" style={{ transform: `translate3d(0, ${desktopSceneProgress * -52}svh, 0) scale(${1 + desktopSceneProgress * 0.025})` }}>
            <Image src="/brand/al-gamal-hero.webp" alt="Contemporary architecture by AL GAMAL" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,9,7,.82)_0%,rgba(18,9,7,.3)_45%,rgba(0,0,0,.08)_75%)]" />

          <div className="absolute inset-x-0 top-[30svh] z-10 mx-auto max-w-7xl px-12 lg:px-20 will-change-transform" style={{ opacity: Math.max(0, 1 - progress / 0.38), transform: `translate3d(0, ${desktopSceneProgress * -30}svh, 0)` }}>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.34em] text-[#e4c49c]">AL GAMAL · NEW DAMIETTA</p>
            <h1 className="max-w-4xl font-display text-8xl font-semibold leading-[.78] tracking-[-.06em] text-[#fff8ec] drop-shadow-2xl lg:text-[9.5rem]">
              {lang === "ar" ? <>قوة<br />تدوم</> : <>Built to<br />endure.</>}
            </h1>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 bg-black will-change-[height]" style={{ height: `${desktopDarkProgress * 108}%` }}>
            <div className="absolute inset-x-0 top-0 h-48 -translate-y-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="absolute inset-0 z-30 grid place-items-center will-change-transform" style={{ opacity: desktopDarkProgress, transform: `translate3d(0, ${(1 - desktopDarkProgress) * 18}svh, 0)` }}>
            <div className="flex flex-col items-center gap-10">
              <Image src="/brand/al-gamal-icon-light.png" alt="AL GAMAL" width={260} height={260} className="h-56 w-56 object-contain" style={{ opacity: 0.1 + desktopMarkProgress * 0.9, filter: `drop-shadow(0 0 ${8 + desktopMarkProgress * 34}px rgba(242,234,221,${desktopMarkProgress * 0.38}))` }} />
              <p className="text-xs font-semibold uppercase tracking-[.48em] text-[#d7b68f]" style={{ opacity: desktopMarkProgress }}>REAL ESTATE · CONTRACTING</p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[.35em] text-white/60" style={{ opacity: 1 - Math.min(1, progress * 3) }}>
            {t("Scroll to reveal")}
          </div>
          <div className="absolute inset-0 z-40 opacity-[.07] grain-overlay" />
        </div>
      </section>
    </div>
  );
}
