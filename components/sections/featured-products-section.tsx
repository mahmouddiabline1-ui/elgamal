"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    image: "/images/4312e1bb-e030-4528-b6df-8a6ea69fe384.png",
    alt: "Palm Valley Towers - Residential",
    span: "col-span-2 row-span-2",
  },
  {
    image: "/images/b2401fa5-4eac-465f-b1f9-014aadc182ee.png",
    alt: "Downtown Business Plaza - Commercial",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/dd1b32a8-3722-4ea2-8808-10d53532809d.png",
    alt: "Green Hills Compound - Residential",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/61af06cc-84d0-4031-a0ed-76fc43b1c1e1.png",
    alt: "Government Services Complex - Administrative",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/249083d2-c49c-4c06-a125-376284d90c42.png",
    alt: "Tech Park Hub - Commercial",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/7638f650-8586-4403-8c13-141921a04f9d.png",
    alt: "ElGamal City Center - Mixed Use",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/5b3bdb95-fac7-4d22-aa97-98b5d547b2db.png",
    alt: "Executive Tower - Commercial",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/634f7bae-77a5-49d0-a0ab-5271a6194e66.png",
    alt: "Court & Justice Building - Administrative",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/09ffa8fd-cdd1-453f-9aa2-d6c702a1f4b5.png",
    alt: "Sunrise Gardens - Residential",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/040e36b1-d16f-474b-a712-a9979e6ab479.png",
    alt: "Marina View Residences - Residential",
    span: "col-span-1 row-span-1",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="projects" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg border border-gray-200 ${feature.span}`}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt || "Project"}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
