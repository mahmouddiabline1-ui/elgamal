"use client";

import { useI18n } from "@/lib/i18n";

export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const { t } = useI18n();
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : "text-start"} ${className}`}>
      {eyebrow ? <p className="mb-4 text-[11px] font-bold uppercase tracking-[.32em] text-accent">{t(eyebrow)}</p> : null}
      <h2 className="text-balance font-display text-5xl font-semibold leading-[.95] tracking-[-.035em] text-foreground md:text-7xl">{t(title)}</h2>
      {description ? <p className={`mt-6 text-base font-medium leading-8 text-foreground/70 md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>{t(description)}</p> : null}
    </div>
  );
}
