import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { DivisionHeader } from "@/components/sections/division-header";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CompletedProjectsSection } from "@/components/sections/completed-projects-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Brand intro */}
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />

      {/* ── DIVISION 1: Real Estate Development ── */}
      <DivisionHeader
        id="development"
        eyebrow="Division 01"
        title="Real Estate Development"
        subtitle="Master-planned residential, commercial, administrative, and mixed-use developments — from land acquisition to final delivery."
      />
      <FeaturedProjectsSection />
      <CompletedProjectsSection />
      <GallerySection />

      {/* ── DIVISION 2: Contracting & Finishing ── */}
      <DivisionHeader
        id="contracting"
        eyebrow="Division 02"
        title="Contracting & Finishing"
        subtitle="Full-scope construction, structural works, and premium interior finishing — turnkey execution to the highest standards."
      />
      <TechnologySection />
      <CollectionSection />

      {/* Company-wide */}
      <EditorialSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
