"use client";

import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    quote: "elgamal delivered our dream home ahead of schedule. The quality of workmanship and attention to detail exceeded our expectations.",
    name: "Ahmed Hassan",
    role: "Palm Valley Towers, Residential Client",
  },
  {
    quote: "The luxury finishing package transformed our office into a world-class workspace. Professional, creative, and reliable.",
    name: "Sarah Mitchell",
    role: "Executive Tower, Commercial Client",
  },
  {
    quote: "From concept to completion, elgamal managed every detail of our compound development. Truly a partner you can trust.",
    name: "Omar Farouk",
    role: "Green Hills Compound, Developer",
  },
  {
    quote: "The interior design team understood our vision perfectly. The VIP package was worth every penny.",
    name: "Layla Khoury",
    role: "Marina View Residences, Private Client",
  },
  {
    quote: "Exceptional project management. Our administrative building was delivered on time and within budget.",
    name: "Maj. Khalid Ibrahim",
    role: "Government Services Complex, Client",
  },
  {
    quote: "The team at elgamal turned our mixed-use development into a landmark. Residents and tenants love the spaces.",
    name: "Diana Nour",
    role: "ElGamal City Center, Developer",
  },
  {
    quote: "We chose elgamal for their reputation, and they delivered excellence. The minimal package was stylish and affordable.",
    name: "Tariq Mansour",
    role: "The Boulevard, Residential Client",
  },
  {
    quote: "Engineering consultancy, interior finishing, and project management all under one roof. Seamless experience.",
    name: "Eng. Rania Sleiman",
    role: "Tech Park Hub, Corporate Client",
  },
];

export function TestimonialsSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl text-center">
          {t("What Our Clients Say")}
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-border bg-card"
            >
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                &ldquo;{t(testimonial.quote)}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {t(testimonial.name)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t(testimonial.role)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
