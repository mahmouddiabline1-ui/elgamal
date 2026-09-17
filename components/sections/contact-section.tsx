"use client";

import { FormEvent } from "react";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useI18n();
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website enquiry");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nMessage: ${data.get("message")}`);
    window.location.href = `mailto:Elgamal7784@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="bg-background py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl text-center mb-16">
            {t("Get In Touch")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Office Address")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("District Five, Neighborhood 28, above the veterinary clinic, New Damietta")}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Phone")}
                </h3>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground"><a href="tel:+201278110924" className="hover:text-foreground">01278110924</a><a href="tel:+201111313246" className="hover:text-foreground">01111313246</a></div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Email")}
                </h3>
                <a href="mailto:Elgamal7784@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">Elgamal7784@gmail.com</a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Location")}
                </h3>
                <a href="https://maps.app.goo.gl/qPGM8kGaL97hBE6z8" target="_blank" rel="noreferrer" className="group flex aspect-video items-end overflow-hidden rounded-lg border border-border bg-[radial-gradient(circle_at_65%_35%,rgba(168,112,66,.3),transparent_28%),linear-gradient(135deg,#e9dece,#d4c2ad)] p-6 text-foreground"><span className="flex items-center gap-2 text-sm font-semibold">{t("Open in Google Maps")}<ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6" onSubmit={sendMessage}>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Full Name")}
                  </label>
                  <input
                    name="name" type="text" required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t("Your full name")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Email")}
                  </label>
                  <input
                    name="email" type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Phone")}
                  </label>
                  <input
                    name="phone" type="tel" required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+20 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Message")}
                  </label>
                  <textarea name="message" required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t("Tell us about your project...")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
                >
                  {t("Send Message")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
