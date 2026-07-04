"use client";

import { FadeImage } from "@/components/fade-image";
import { useI18n } from "@/lib/i18n";

const accessories = [
  {
    id: 1,
    name: "Modern Package",
    description: "Sleek lines, open spaces, and contemporary finishes. Perfect for urban living with smart home integration.",
    price: "From $15,000",
    image: "/apartments/apt-15.jpg",
  },
  {
    id: 2,
    name: "Luxury Package",
    description: "Premium marble, custom joinery, and statement lighting. Designed for those who expect the extraordinary.",
    price: "From $35,000",
    image: "/apartments/apt-16.jpg",
  },
  {
    id: 3,
    name: "Classic Package",
    description: "Timeless elegance with ornate details, rich wood tones, and traditional craftsmanship.",
    price: "From $20,000",
    image: "/apartments/apt-17.jpg",
  },
  {
    id: 4,
    name: "Minimal Package",
    description: "Less is more. Clean surfaces, neutral palettes, and functional beauty for serene spaces.",
    price: "From $12,000",
    image: "/apartments/apt-18.jpg",
  },
  {
    id: 5,
    name: "VIP Package",
    description: "Bespoke design consultation, exclusive materials, and dedicated project management from concept to handover.",
    price: "From $50,000",
    image: "/apartments/apt-19.jpg",
  },
];

export function CollectionSection() {
  const { t } = useI18n();
  return (
    <section id="packages" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {t("Finishing Packages")}
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {t(accessory.name)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t(accessory.description)}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {t(accessory.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {t(accessory.name)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t(accessory.description)}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {t(accessory.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
