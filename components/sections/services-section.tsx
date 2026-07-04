"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { services } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

// Scroll-triggered "build up" reveal: each brick rises and settles into place
// as it enters the viewport, evoking a wall being laid course by course.
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(48px) scale(0.97)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

// A neat wall of equal-size service "bricks". Two columns on phones (odd last
// brick spans full width so no gap), three then five on larger screens.
function ServiceWall({
  items,
  lgCols,
  renderIcon,
}: {
  items: typeof services;
  lgCols: string;
  renderIcon: (index: number) => ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 ${lgCols} max-w-5xl mx-auto`}>
      {items.map((service, index) => {
        const isDanglingLast = index === items.length - 1 && items.length % 2 === 1;
        return (
          <Reveal
            key={index}
            delay={index * 70}
            className={`h-full ${isDanglingLast ? "col-span-2 md:col-span-1" : ""}`}
          >
            <div className="group relative flex h-full min-h-[150px] flex-col p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-card hover:border-foreground/20 transition-colors duration-300">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                {renderIcon(index)}
              </div>
              <h4 className="text-base md:text-lg font-medium leading-snug text-foreground mb-1.5 md:mb-2">
                {t(service.name)}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {t(service.description)}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

const PaletteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette">
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export function ServicesSection() {
  const { t } = useI18n();
  const realEstateServices = services.slice(0, 5);
  const interiorServices = services.slice(5);

  return (
    <section id="services" className="bg-background py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-4">
              {t("Our Services")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("Two integrated divisions under one roof — real estate development, and contracting & finishing — delivered to the highest standards of quality and innovation.")}
            </p>
          </div>

          {/* Real Estate Development Services - PRIMARY */}
          <div className="mb-16">
            <Reveal>
              <h3 className="text-2xl font-medium tracking-tight text-foreground mb-8 text-center">
                {t("Real Estate Development")}
              </h3>
            </Reveal>
            <ServiceWall
              items={realEstateServices}
              lgCols="lg:grid-cols-5"
              renderIcon={(i) => <span className="text-lg font-bold">{i + 1}</span>}
            />
          </div>

          {/* Contracting & Finishing - SECONDARY */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-medium tracking-tight text-foreground mb-8 text-center">
                {t("Contracting & Finishing")}
              </h3>
            </Reveal>
            <ServiceWall
              items={interiorServices}
              lgCols="lg:grid-cols-3"
              renderIcon={() => PaletteIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
