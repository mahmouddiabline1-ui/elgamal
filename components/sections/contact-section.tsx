"use client";

import { useI18n } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useI18n();
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
                  {t("elgamal Tower, 45 Al Rehab Street, New Cairo, Cairo, Egypt")}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Phone")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  +20 2 2345 6789
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Email")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  info@elgamal.com
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Working Hours")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("Sunday - Thursday: 9:00 AM - 6:00 PM")}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t("Location")}
                </h3>
                <div className="aspect-video rounded-lg border border-border bg-secondary overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    {t("Google Maps Placeholder")}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Full Name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t("Your full name")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Phone")}
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+20 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {t("Message")}
                  </label>
                  <textarea
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
