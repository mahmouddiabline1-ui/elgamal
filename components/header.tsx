"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, toggle } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md rounded-full border border-border" : "bg-[#35231f]/35 backdrop-blur-sm rounded-full border border-white/15"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#hero" className="relative block h-10 w-32 shrink-0">
          <Image src={isScrolled ? "/brand/al-gamal-logo-dark.png" : "/brand/al-gamal-logo-light.png"} alt="AL GAMAL الجمل" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link href="#development" className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}>
            {t("Development")}
          </Link>
          <Link
            href="#contracting"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            {t("Contracting")}
          </Link>
          <Link
            href="#services"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            {t("Services")}
          </Link>
          <Link
            href="#about"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            {t("About")}
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-full ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            <Globe size={16} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-medium transition-all rounded-full bg-[#f2eadd] text-[#35231f] hover:bg-white"
          >
            {t("Contact Us")}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className={`flex items-center gap-1 text-sm font-medium ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            <Globe size={18} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
              <Link
                href="#development"
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Development")}
              </Link>
              <Link
                href="#contracting"
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Contracting")}
              </Link>
              <Link
                href="#services"
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Services")}
              </Link>
              <Link
                href="#about"
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("About")}
              </Link>
              <Link
                href="#contact"
                className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Contact Us")}
              </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
