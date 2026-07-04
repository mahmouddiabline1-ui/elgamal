"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#hero" className="text-lg font-medium tracking-tight transition-colors duration-300 text-foreground">
          elgamal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link href="#development" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
            {t("Development")}
          </Link>
          <Link
            href="#contracting"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            {t("Contracting")}
          </Link>
          <Link
            href="#services"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            {t("Services")}
          </Link>
          <Link
            href="#about"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
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
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-full text-muted-foreground hover:text-foreground"
          >
            <Globe size={16} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
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
            className="flex items-center gap-1 text-sm font-medium text-foreground"
          >
            <Globe size={18} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors text-foreground"
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
