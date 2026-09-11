export type ProjectStatus = "Available" | "Under Construction" | "Completed" | "Portfolio";
export type ProjectPurpose = "For Sale" | "Portfolio" | "Contracting";

export interface ProjectUnit { type: string; area: string; floor?: string; }

export interface Project {
  id: number;
  slug: string;
  name: string;
  nameAr: string;
  code: string;
  category: "Residential" | "Commercial" | "Administrative" | "Mixed Use";
  location: string;
  locationAr: string;
  division: "Real Estate Development" | "Contracting & Finishing";
  purpose: ProjectPurpose;
  status: ProjectStatus;
  description: string;
  descriptionAr: string;
  image: string;
  gallery: string[];
  area?: string;
  partner?: string;
  series?: string;
  availableUnits?: ProjectUnit[];
  highlights?: string[];
}

const gallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/projects/${slug}/${String(index + 1).padStart(2, "0")}.webp`);

export const projects: Project[] = [
  {
    id: 1, slug: "liver-mall-1", name: "LIVER MALL 1", nameAr: "ليفر مول 1", code: "Plot 13",
    category: "Mixed Use", location: "Opposite Future Club, New Damietta", locationAr: "أمام نادي المستقبل، دمياط الجديدة",
    division: "Real Estate Development", purpose: "For Sale", status: "Under Construction",
    description: "A commercial, administrative and residential destination in the Second District service center, designed as the first chapter of the LIVER MALL series.",
    descriptionAr: "مشروع تجاري وإداري وسكني في مركز خدمات الحي الثاني، وأول مشروعات سلسلة ليفر مول.",
    image: "/projects/liver-mall-1/01.webp", gallery: gallery("liver-mall-1", 4), series: "LIVER MALL SERIES",
    highlights: ["10 ground-floor retail units", "11 mezzanine retail units", "14 administrative offices", "3 residential units"],
    availableUnits: [
      { type: "Residential unit", area: "145 m²", floor: "Third floor" },
      { type: "Residential unit", area: "130 m²", floor: "Third floor" },
      { type: "Residential unit", area: "150 m²", floor: "Third floor" },
    ],
  },
  {
    id: 2, slug: "liver-mall-2", name: "LIVER MALL 2", nameAr: "ليفر مول 2", code: "Plot 27/2",
    category: "Commercial", location: "New Damietta", locationAr: "دمياط الجديدة",
    division: "Real Estate Development", purpose: "For Sale", status: "Under Construction",
    description: "The second development in the LIVER MALL series, presented by AL GAMAL with SPT as the owning partner.",
    descriptionAr: "ثاني مشروعات سلسلة ليفر مول، تقدمه الجمل بالشراكة مع الشركة المالكة SPT.",
    image: "/projects/liver-mall-2/04.webp", gallery: gallery("liver-mall-2", 6), partner: "SPT", series: "LIVER MALL SERIES",
  },
  {
    id: 3, slug: "plot-52-j", name: "Smart Village Residence", nameAr: "القطعة 52J القرية الذكية", code: "52J",
    category: "Residential", location: "Smart Village, New Damietta", locationAr: "القرية الذكية، دمياط الجديدة",
    division: "Real Estate Development", purpose: "For Sale", status: "Available",
    description: "A contemporary residential building with a refined classical façade and a limited collection of spacious homes.",
    descriptionAr: "مبنى سكني معاصر بواجهة كلاسيكية راقية ومجموعة محدودة من الوحدات الواسعة.",
    image: "/projects/plot-52-j/03.webp", gallery: gallery("plot-52-j", 5), area: "150 m²",
    availableUnits: [{ type: "Apartment", area: "150 m²", floor: "First floor" }, { type: "Apartment", area: "150 m²", floor: "Second floor" }],
  },
  {
    id: 4, slug: "plot-162-a", name: "Horus North Residence", nameAr: "القطعة 162 أ شمال حورس", code: "162 A",
    category: "Residential", location: "North Horus, Salah Salem", locationAr: "شمال حورس، صلاح سالم",
    division: "Real Estate Development", purpose: "For Sale", status: "Available",
    description: "A distinguished residential project with completed façade character and two large units currently presented for inquiry.",
    descriptionAr: "مشروع سكني مميز بواجهة مكتملة الطابع ووحدتين كبيرتين متاحتين للاستعلام.",
    image: "/projects/plot-162-a/03.webp", gallery: gallery("plot-162-a", 8), area: "220 m²",
    availableUnits: [{ type: "Apartment", area: "220 m²", floor: "Ground floor" }, { type: "Basement unit", area: "220 m²", floor: "Basement" }],
  },
  {
    id: 5, slug: "plot-76", name: "District Four Center", nameAr: "القطعة 76 مركز الحي الرابع", code: "76",
    category: "Mixed Use", location: "Beside Traffic Department, District Four Center", locationAr: "بجوار المرور، مركز الحي الرابع",
    division: "Real Estate Development", purpose: "For Sale", status: "Available",
    description: "A mixed-use project with commercial opportunities in a connected district-center location.",
    descriptionAr: "مشروع متعدد الاستخدامات يضم فرصًا تجارية في موقع متصل بمركز الحي.",
    image: "/projects/plot-76/01.webp", gallery: gallery("plot-76", 3),
    availableUnits: [{ type: "Retail unit", area: "40 m²" }, { type: "Half-basement", area: "125 m²", floor: "Basement" }],
  },
  {
    id: 6, slug: "plot-4-bb", name: "International Garden Residence", nameAr: "القطعة 4BB الحديقة الدولية", code: "4BB",
    category: "Residential", location: "International Garden, New Damietta", locationAr: "الحديقة الدولية، دمياط الجديدة",
    division: "Real Estate Development", purpose: "Portfolio", status: "Portfolio",
    description: "A residential construction project documented as part of AL GAMAL's built portfolio. No units are currently offered for sale.",
    descriptionAr: "مشروع سكني ضمن سابقة أعمال الجمل، ولا توجد به وحدات مطروحة للبيع حاليًا.",
    image: "/projects/plot-4-bb/01.webp", gallery: gallery("plot-4-bb", 4),
  },
  {
    id: 7, slug: "plot-114-bb", name: "Plot 114 BB", nameAr: "القطعة 114 BB", code: "114 BB",
    category: "Residential", location: "New Damietta", locationAr: "دمياط الجديدة",
    division: "Real Estate Development", purpose: "Portfolio", status: "Under Construction",
    description: "An active residential construction project showing AL GAMAL's structural execution and façade craftsmanship.",
    descriptionAr: "مشروع سكني تحت التنفيذ يعرض خبرة الجمل في الأعمال الإنشائية وتفاصيل الواجهات.",
    image: "/projects/plot-114-bb/06.webp", gallery: gallery("plot-114-bb", 10),
  },
  {
    id: 8, slug: "plot-100", name: "Plot 100 International Garden", nameAr: "القطعة 100 الأكثر تميز الحديقة الدولية", code: "100",
    category: "Residential", location: "International Garden, New Damietta", locationAr: "الحديقة الدولية، دمياط الجديدة",
    division: "Real Estate Development", purpose: "Portfolio", status: "Under Construction",
    description: "A residential project documented from foundations through architectural development.",
    descriptionAr: "مشروع سكني موثق من مرحلة الأساسات وحتى التطوير المعماري.",
    image: "/projects/plot-100/01.webp", gallery: gallery("plot-100", 5),
  },
  {
    id: 9, slug: "plot-138", name: "Plot 138 International Garden", nameAr: "القطعة 138 الأكثر تميز الحديقة الدولية", code: "138",
    category: "Residential", location: "International Garden, New Damietta", locationAr: "الحديقة الدولية، دمياط الجديدة",
    division: "Real Estate Development", purpose: "Portfolio", status: "Under Construction",
    description: "A residential development combining carefully planned interiors with a distinctive warm-toned façade.",
    descriptionAr: "مشروع سكني يجمع بين التخطيط الداخلي المدروس وواجهة مميزة بدرجات دافئة.",
    image: "/projects/plot-138/03.webp", gallery: gallery("plot-138", 8),
  },
  {
    id: 10, slug: "plot-429-31", name: "Plot 429-31", nameAr: "القطعة 429-31 المجاورة 29", code: "429-31",
    category: "Residential", location: "Neighborhood 29, New Damietta", locationAr: "المجاورة 29، دمياط الجديدة",
    division: "Real Estate Development", purpose: "Portfolio", status: "Completed",
    description: "A completed residential façade documented for the AL GAMAL project portfolio.",
    descriptionAr: "واجهة مشروع سكني مكتمل ضمن سابقة أعمال الجمل.",
    image: "/projects/plot-429-31/01.webp", gallery: gallery("plot-429-31", 6),
  },
  {
    id: 11, slug: "plot-150", name: "Plot 150 North University", nameAr: "القطعة 150 شمال الجامعة", code: "150",
    category: "Commercial", location: "North University, New Damietta", locationAr: "شمال الجامعة، دمياط الجديدة",
    division: "Contracting & Finishing", purpose: "Contracting", status: "Under Construction",
    description: "A contracting-only assignment that demonstrates AL GAMAL's on-site structural delivery capabilities.",
    descriptionAr: "مشروع مقاولات فقط يوضح قدرات الجمل في التنفيذ الإنشائي بالموقع.",
    image: "/projects/plot-150/02.webp", gallery: gallery("plot-150", 3),
  },
];

export const services = [
  { name: "Real Estate Development", description: "End-to-end real estate development from land acquisition to project delivery." },
  { name: "Residential Development", description: "Premium residential compounds, villas, and apartment buildings." },
  { name: "Commercial Development", description: "Grade-A office towers, retail spaces, and business parks." },
  { name: "Administrative Buildings", description: "Government and corporate headquarters with modern civic design." },
  { name: "Mixed Use Developments", description: "Integrated communities combining retail, residential, and office spaces." },
  { name: "General Contracting", description: "Full-scope construction from foundation to structure with certified quality control." },
  { name: "Structural & Concrete Works", description: "Reinforced concrete, skeleton, and structural execution to engineering specifications." },
  { name: "MEP & Installations", description: "Mechanical, electrical, and plumbing systems installed and commissioned." },
  { name: "Interior Design", description: "Bespoke interior design for residential, commercial, and hospitality projects." },
  { name: "Luxury Finishing", description: "Premium finishing materials, custom joinery, and high-end decorative solutions." },
  { name: "Turnkey Fit-out", description: "Complete turnkey finishing and handover — ready-to-use spaces delivered on time." },
];

export const completedProjects = projects.filter((project) => project.purpose === "Portfolio").map((project) => ({
  name: project.name, category: project.category, image: project.image, year: "AL GAMAL",
}));

export const interiorDesignPackages = [
  { id: 1, name: "Modern Package", description: "Sleek lines, open spaces, and contemporary finishes. Perfect for urban living with smart home integration.", price: "By inquiry", image: "/apartments/apt-21.jpg" },
  { id: 2, name: "Luxury Package", description: "Premium marble, custom joinery, and statement lighting. Designed for those who expect the extraordinary.", price: "By inquiry", image: "/apartments/apt-01.jpg" },
  { id: 3, name: "Classic Package", description: "Timeless elegance with ornate details, rich wood tones, and traditional craftsmanship.", price: "By inquiry", image: "/apartments/apt-02.jpg" },
];
