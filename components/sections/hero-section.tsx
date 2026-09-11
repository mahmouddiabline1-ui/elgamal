"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t, lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const mobileSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const applyProgress = (section: HTMLElement, value: number) => {
      const scene = Math.min(1, value / 0.72);
      const dark = Math.max(0, Math.min(1, (value - 0.42) / 0.42));
      const mark = Math.max(0, Math.min(1, (value - 0.62) / 0.28));
      section.style.setProperty("--scene", String(scene));
      section.style.setProperty("--dark", String(dark));
      section.style.setProperty("--mark", String(mark));
      section.style.setProperty("--copy", String(Math.max(0, 1 - value / 0.38)));
      section.style.setProperty("--hint", String(1 - Math.min(1, value * 3)));
    };
    const update = () => {
      frame = 0;
      const section = window.innerWidth >= 768 ? sectionRef.current : mobileSectionRef.current;
      if (section && section.offsetHeight) {
        const distance = section.offsetHeight - window.innerHeight;
        const value = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / Math.max(distance, 1)));
        applyProgress(section, value);
      }
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="hero" className="bg-[#241612]">
      <section ref={mobileSectionRef} className="relative h-[280svh] bg-black text-[#f2eadd] md:hidden">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
          <div
            className="absolute inset-x-0 top-0 h-[158svh] will-change-transform"
            style={{ transform: "translate3d(0, calc(var(--scene, 0) * -58svh), 0) scale(calc(1 + var(--scene, 0) * .035))" }}
          >
            <Image src="/brand/al-gamal-hero.webp" alt="Contemporary architecture by AL GAMAL" fill priority sizes="100vw" className="object-cover object-[64%_center]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,.03)_42%,rgba(0,0,0,.72))]" />

          <div
            className="absolute inset-x-0 top-[34svh] z-10 px-5 text-center will-change-transform"
            style={{ opacity: "var(--copy, 1)", transform: "translate3d(0, calc(var(--scene, 0) * -28svh), 0)" }}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.28em] text-[#e4c49c]">AL GAMAL · NEW DAMIETTA</p>
            <h1 className="font-display text-[4.75rem] font-semibold leading-[.78] tracking-[-.065em] text-[#fff8ec] drop-shadow-2xl">
              {lang === "ar" ? <>قوة<br />تدوم</> : <>Built to<br />endure.</>}
            </h1>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 bg-black" style={{ height: "calc(var(--dark, 0) * 108%)" }}>
            <div className="absolute inset-x-0 top-0 h-32 -translate-y-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div
            className="absolute inset-0 z-30 grid place-items-center will-change-transform"
            style={{ opacity: "var(--dark, 0)", transform: "translate3d(0, calc((1 - var(--dark, 0)) * 18svh), 0)" }}
          >
            <div className="relative flex flex-col items-center gap-8">
              <Image
                src="/brand/al-gamal-icon-light.png"
                alt="AL GAMAL"
                width={196}
                height={196}
                className="h-40 w-40 object-contain"
                style={{ opacity: "calc(.1 + var(--mark, 0) * .9)", filter: "drop-shadow(0 0 18px rgba(242,234,221,.22))" }}
              />
              <p className="text-[10px] font-semibold uppercase tracking-[.38em] text-[#d7b68f]" style={{ opacity: "var(--mark, 0)" }}>REAL ESTATE · CONTRACTING</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[.3em] text-white/60" style={{ opacity: "var(--hint, 1)" }}>
            {t("Scroll to reveal")}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden h-[280svh] bg-black text-[#f2eadd] md:block">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
          <div className="absolute inset-x-0 top-0 h-[152svh] will-change-transform" style={{ transform: "translate3d(0, calc(var(--scene, 0) * -52svh), 0) scale(calc(1 + var(--scene, 0) * .025))" }}>
            <Image src="/brand/al-gamal-hero.webp" alt="Contemporary architecture by AL GAMAL" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,9,7,.82)_0%,rgba(18,9,7,.3)_45%,rgba(0,0,0,.08)_75%)]" />

          <div className="absolute inset-x-0 top-[30svh] z-10 mx-auto max-w-7xl px-12 lg:px-20 will-change-transform" style={{ opacity: "var(--copy, 1)", transform: "translate3d(0, calc(var(--scene, 0) * -30svh), 0)" }}>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.34em] text-[#e4c49c]">AL GAMAL · NEW DAMIETTA</p>
            <h1 className="max-w-4xl font-display text-8xl font-semibold leading-[.78] tracking-[-.06em] text-[#fff8ec] drop-shadow-2xl lg:text-[9.5rem]">
              {lang === "ar" ? <>قوة<br />تدوم</> : <>Built to<br />endure.</>}
            </h1>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 bg-black" style={{ height: "calc(var(--dark, 0) * 108%)" }}>
            <div className="absolute inset-x-0 top-0 h-48 -translate-y-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="absolute inset-0 z-30 grid place-items-center will-change-transform" style={{ opacity: "var(--dark, 0)", transform: "translate3d(0, calc((1 - var(--dark, 0)) * 18svh), 0)" }}>
            <div className="flex flex-col items-center gap-10">
              <Image src="/brand/al-gamal-icon-light.png" alt="AL GAMAL" width={260} height={260} className="h-56 w-56 object-contain" style={{ opacity: "calc(.1 + var(--mark, 0) * .9)", filter: "drop-shadow(0 0 24px rgba(242,234,221,.24))" }} />
              <p className="text-xs font-semibold uppercase tracking-[.48em] text-[#d7b68f]" style={{ opacity: "var(--mark, 0)" }}>REAL ESTATE · CONTRACTING</p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[.35em] text-white/60" style={{ opacity: "var(--hint, 1)" }}>
            {t("Scroll to reveal")}
          </div>
        </div>
      </section>
    </div>
  );
}
