export type ProjectStatus = "Available" | "Under Construction" | "Ready";

export interface Project {
  id: number;
  name: string;
  category: "Residential" | "Commercial" | "Administrative" | "Mixed Use";
  location: string;
  price: string;
  area: string;
  status: ProjectStatus;
  description: string;
  image: string;
  gallery?: string[];
  facilities?: string[];
  amenities?: string[];
  masterPlan?: string;
  floorPlans?: string[];
  paymentPlan?: string;
  nearbyServices?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Palm Valley Towers",
    category: "Residential",
    location: "New Cairo, Egypt",
    price: "From $150,000",
    area: "850 - 2,400 m²",
    status: "Available",
    description:
      "A master-planned residential compound offering luxury apartments and duplexes surrounded by lush landscapes, premium amenities, and 24/7 security.",
    image: "/apartments/apt-01.jpg",
    gallery: [
      "/apartments/apt-02.jpg",
      "/apartments/apt-03.jpg",
      "/apartments/apt-04.jpg",
    ],
    facilities: ["Swimming Pool", "Gym & Spa", "Kids Play Area", "Landscaped Gardens", "Underground Parking"],
    amenities: ["24/7 Security", "Smart Home System", "High-Speed Internet", "Central Air Conditioning"],
    masterPlan: "/apartments/apt-05.jpg",
    floorPlans: [
      "/apartments/apt-06.jpg",
      "/apartments/apt-07.jpg",
    ],
    paymentPlan: "10% down payment, 10% upon handover, balance over 8 years at 8% interest",
    nearbyServices: [
      "International School - 2 km",
      "Shopping Mall - 1.5 km",
      "Hospital - 3 km",
      "Cairo Festival City - 5 km",
    ],
  },
  {
    id: 2,
    name: "Downtown Business Plaza",
    category: "Commercial",
    location: "Cairo, Egypt",
    price: "From $200,000",
    area: "1,200 - 5,000 m²",
    status: "Under Construction",
    description:
      "A premium Grade-A office building in the heart of Cairo's business district, featuring modern workspaces, meeting rooms, and panoramic city views.",
    image: "/apartments/apt-08.jpg",
    gallery: [
      "/apartments/apt-09.jpg",
      "/apartments/apt-10.jpg",
      "/apartments/apt-11.jpg",
    ],
    facilities: ["Reception & Lobby", "Conference Halls", "Cafeteria", "Rooftop Terrace", "EV Charging Stations"],
    amenities: [
      "24/7 Building Management",
      "Fiber Optic Internet",
      "Climate Control",
      "Fire Safety System",
      "CCTV Surveillance",
    ],
    masterPlan: "/apartments/apt-12.jpg",
    floorPlans: ["/apartments/apt-13.jpg"],
    paymentPlan: "20% down payment, 15% during construction, balance upon handover",
    nearbyServices: [
      "Central Business District - 500 m",
      "Metro Station - 800 m",
      "Banks & ATMs - 300 m",
      "Fine Dining - 200 m",
    ],
  },
  {
    id: 3,
    name: "Green Hills Compound",
    category: "Residential",
    location: "Sheikh Zayed, Egypt",
    price: "From $180,000",
    area: "750 - 3,100 m²",
    status: "Available",
    description:
      "An eco-friendly residential community featuring townhouses and villas with green spaces, cycling tracks, and sustainable energy solutions.",
    image: "/apartments/apt-14.jpg",
    gallery: [
      "/apartments/apt-15.jpg",
      "/apartments/apt-16.jpg",
      "/apartments/apt-17.jpg",
    ],
    facilities: ["Clubhouse", "Running Track", "Community Pool", "BBQ Areas", "Pet Friendly Zones"],
    amenities: ["Solar Panels", "Rainwater Harvesting", "Smart Security", "Electric Vehicle Charging"],
    masterPlan: "/apartments/apt-18.jpg",
    floorPlans: [
      "/apartments/apt-19.jpg",
      "/apartments/apt-20.jpg",
    ],
    paymentPlan: "15% down payment, balance over 10 years at 7.5% interest",
    nearbyServices: [
      "British International School - 1 km",
      "Hypermarket - 800 m",
      "Medical Center - 1.2 km",
      "Golf Club - 2 km",
    ],
  },
  {
    id: 4,
    name: "Government Services Complex",
    category: "Administrative",
    location: "New Administrative Capital, Egypt",
    price: "From $350,000",
    area: "2,500 - 8,000 m²",
    status: "Ready",
    description:
      "A state-of-the-art government administrative complex designed for efficiency, accessibility, and sustainability with modern civic infrastructure.",
    image: "/apartments/apt-21.jpg",
    gallery: [
      "/apartments/apt-01.jpg",
      "/apartments/apt-02.jpg",
      "/apartments/apt-03.jpg",
    ],
    facilities: ["Public Service Halls", "Conference Center", "Underground Parking", "Green Atrium", "Visitor Lounge"],
    amenities: [
      "Wheelchair Accessible",
      "Advanced Security",
      "Energy Efficient HVAC",
      "Public Wi-Fi",
      "Smart Queue System",
    ],
    masterPlan: "/apartments/apt-04.jpg",
    floorPlans: [
      "/apartments/apt-05.jpg",
      "/apartments/apt-06.jpg",
    ],
    paymentPlan: "Full payment upon handover or installment plan over 5 years",
    nearbyServices: [
      "Government Ministries - 1 km",
      "Public Transport Hub - 500 m",
      "Diplomatic Quarter - 3 km",
      "Financial District - 2 km",
    ],
  },
  {
    id: 5,
    name: "Tech Park Hub",
    category: "Commercial",
    location: "Smart Village, Egypt",
    price: "From $120,000",
    area: "500 - 2,500 m²",
    status: "Available",
    description:
      "A modern tech-focused business park with flexible office spaces, co-working areas, and startup incubators built for innovation.",
    image: "/apartments/apt-07.jpg",
    gallery: [
      "/apartments/apt-08.jpg",
      "/apartments/apt-09.jpg",
      "/apartments/apt-10.jpg",
    ],
    facilities: ["Co-Working Lounge", "Tech Conference Room", "Data Center", "Cafeteria", "Rooftop Deck"],
    amenities: ["Fiber Optic Connectivity", "Backup Power", "Smart Access Control", "Parking Garage"],
    masterPlan: "/apartments/apt-11.jpg",
    floorPlans: [
      "/apartments/apt-12.jpg",
      "/apartments/apt-13.jpg",
    ],
    paymentPlan: "25% down payment, quarterly installments over 4 years",
    nearbyServices: [
      "Tech Companies - On-site",
      "Cairo-Alexandria Desert Road - 1 km",
      "Restaurants & Cafes - 500 m",
      "Gym - 300 m",
    ],
  },
  {
    id: 6,
    name: "ElGamal City Center",
    category: "Mixed Use",
    location: "6th of October, Egypt",
    price: "From $95,000",
    area: "400 - 1,800 m²",
    status: "Under Construction",
    description:
      "A vibrant mixed-use development combining retail, residential, and office spaces in one integrated community hub.",
    image: "/apartments/apt-14.jpg",
    gallery: [
      "/apartments/apt-15.jpg",
      "/apartments/apt-16.jpg",
      "/apartments/apt-17.jpg",
    ],
    facilities: ["Shopping Arcade", "Residential Towers", "Office Floors", "Public Plaza", "Parking Basement"],
    amenities: ["Central Air Conditioning", "Fire Safety", "CCTV", "Public Transport Access", "High-Speed Elevators"],
    masterPlan: "/apartments/apt-18.jpg",
    floorPlans: [
      "/apartments/apt-19.jpg",
      "/apartments/apt-20.jpg",
      "/apartments/apt-21.jpg",
    ],
    paymentPlan: "15% down payment, 10% after 6 months, balance over 9 years",
    nearbyServices: [
      "Public Bus Station - 200 m",
      "Restaurants & Retail - On-site",
      "Schools - 1 km",
      "Bank Branches - 500 m",
    ],
  },
  {
    id: 7,
    name: "Executive Tower",
    category: "Commercial",
    location: "Maadi, Egypt",
    price: "From $280,000",
    area: "1,000 - 4,500 m²",
    status: "Ready",
    description:
      "A prestigious commercial tower offering executive offices with premium specifications, panoramic Nile views, and concierge services.",
    image: "/apartments/apt-01.jpg",
    gallery: [
      "/apartments/apt-02.jpg",
      "/apartments/apt-03.jpg",
      "/apartments/apt-04.jpg",
    ],
    facilities: ["Executive Lounge", "Conference Suites", "Valet Parking", "Business Center", "Rooftop Garden"],
    amenities: ["Concierge Service", "Nile View Terraces", "Private Elevators", "Smart Lighting", "Climate Control"],
    masterPlan: "/apartments/apt-05.jpg",
    floorPlans: [
      "/apartments/apt-06.jpg",
      "/apartments/apt-07.jpg",
    ],
    paymentPlan: "20% down payment, balance upon handover or 5-year installment plan",
    nearbyServices: [
      "Nile Corniche - 100 m",
      "International Schools - 2 km",
      "Hospitals - 1.5 km",
      "Restaurants & Cafes - 500 m",
    ],
  },
  {
    id: 8,
    name: "Court & Justice Building",
    category: "Administrative",
    location: "Nasr City, Egypt",
    price: "From $400,000",
    area: "3,000 - 10,000 m²",
    status: "Available",
    description:
      "A purpose-built judicial complex with courtrooms, offices, and public service areas designed for functionality and dignity.",
    image: "/apartments/apt-08.jpg",
    gallery: [
      "/apartments/apt-09.jpg",
      "/apartments/apt-10.jpg",
      "/apartments/apt-11.jpg",
    ],
    facilities: ["Courtrooms", "Judicial Offices", "Public Waiting Areas", "Secure Parking", "Document Archives"],
    amenities: ["High Security", "Public Address System", "Wheelchair Ramps", "Fire Suppression", "Video Conferencing"],
    masterPlan: "/apartments/apt-12.jpg",
    floorPlans: [
      "/apartments/apt-13.jpg",
      "/apartments/apt-14.jpg",
    ],
    paymentPlan: "Government budget cycle or milestone-based payments",
    nearbyServices: [
      "Ministry of Justice - 500 m",
      "Police Station - 300 m",
      "Metro Station - 1 km",
      "Legal Firms - 400 m",
    ],
  },
];

// First 5 belong to the Real Estate Development division, the remaining 6 to
// the Contracting & Finishing division. ServicesSection splits them by index.
export const services = [
  // ── Real Estate Development ──
  { name: "Real Estate Development", description: "End-to-end real estate development from land acquisition to project delivery." },
  { name: "Residential Development", description: "Premium residential compounds, villas, and apartment buildings." },
  { name: "Commercial Development", description: "Grade-A office towers, retail spaces, and business parks." },
  { name: "Administrative Buildings", description: "Government and corporate headquarters with modern civic design." },
  { name: "Mixed Use Developments", description: "Integrated communities combining retail, residential, and office spaces." },
  // ── Contracting & Finishing ──
  { name: "General Contracting", description: "Full-scope construction from foundation to structure with certified quality control." },
  { name: "Structural & Concrete Works", description: "Reinforced concrete, skeleton, and structural execution to engineering specifications." },
  { name: "MEP & Installations", description: "Mechanical, electrical, and plumbing systems installed and commissioned." },
  { name: "Interior Design", description: "Bespoke interior design for residential, commercial, and hospitality projects." },
  { name: "Luxury Finishing", description: "Premium finishing materials, custom joinery, and high-end decorative solutions." },
  { name: "Turnkey Fit-out", description: "Complete turnkey finishing and handover — ready-to-use spaces delivered on time." },
];

export const completedProjects = [
  { name: "Sunrise Gardens", category: "Residential", image: "/apartments/apt-15.jpg", year: "2023" },
  { name: "The Boulevard", category: "Commercial", image: "/apartments/apt-16.jpg", year: "2024" },
  { name: "The Courthouse", category: "Administrative", image: "/apartments/apt-17.jpg", year: "2022" },
  { name: "Marina View", category: "Residential", image: "/apartments/apt-18.jpg", year: "2024" },
  { name: "Plaza 45", category: "Commercial", image: "/apartments/apt-19.jpg", year: "2023" },
  { name: "City Hall Annex", category: "Administrative", image: "/apartments/apt-20.jpg", year: "2021" },
];

export const interiorDesignPackages = [
  {
    id: 1,
    name: "Modern Package",
    description: "Sleek lines, open spaces, and contemporary finishes. Perfect for urban living with smart home integration.",
    price: "From $15,000",
    image: "/apartments/apt-21.jpg",
  },
  {
    id: 2,
    name: "Luxury Package",
    description: "Premium marble, custom joinery, and statement lighting. Designed for those who expect the extraordinary.",
    price: "From $35,000",
    image: "/apartments/apt-01.jpg",
  },
  {
    id: 3,
    name: "Classic Package",
    description: "Timeless elegance with ornate details, rich wood tones, and traditional craftsmanship.",
    price: "From $20,000",
    image: "/apartments/apt-02.jpg",
  },
  {
    id: 4,
    name: "Minimal Package",
    description: "Less is more. Clean surfaces, neutral palettes, and functional beauty for serene spaces.",
    price: "From $12,000",
    image: "/apartments/apt-03.jpg",
  },
  {
    id: 5,
    name: "VIP Package",
    description: "Bespoke design consultation, exclusive materials, and dedicated project management from concept to handover.",
    price: "From $50,000",
    image: "/apartments/apt-04.jpg",
  },
];
