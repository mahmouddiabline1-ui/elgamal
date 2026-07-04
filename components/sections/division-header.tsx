"use client";

import { useI18n } from "@/lib/i18n";

// Lightweight divider that introduces one of the company's two business
// divisions. It intentionally reuses the exact same heading markup/classes
// already used by the other section headers (Featured Projects, Services,
// Completed Projects) so it introduces no new design language or motion.
export function DivisionHeader({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const { t } = useI18n();
  return (
    <section id={id} className="bg-background pt-20 md:pt-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            {t(eyebrow)}
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-4">
            {t(title)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(subtitle)}
          </p>
        </div>
      </div>
    </section>
  );
}
