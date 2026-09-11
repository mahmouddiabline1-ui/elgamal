"use client";

import { SectionHeading } from "@/components/ui/section-heading";

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
  return (
    <section id={id} className="bg-background pb-12 pt-24 md:pb-16 md:pt-32">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionHeading eyebrow={eyebrow} title={title} description={subtitle} className="max-w-5xl" />
      </div>
    </section>
  );
}
