"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "ar";

// English source string -> Arabic. t() returns the Arabic when lang === "ar",
// otherwise the original English string, so wrapping any label is safe.
const ar: Record<string, string> = {
  // ── Nav / chrome ──
  "Development": "التطوير",
  "Contracting": "المقاولات",
  "Services": "الخدمات",
  "About": "من نحن",
  "Contact Us": "تواصل معنا",

  // ── Hero ──
  "Premium residential, commercial, and administrative developments with luxury interior design and finishing services.":
    "مشروعات سكنية وتجارية وإدارية متميزة، مع خدمات تصميم داخلي وتشطيبات فاخرة.",

  // ── Philosophy ──
  "Building Better Communities.": "نبني مجتمعات أفضل.",
  "Engineering Excellence.": "هندسة الإتقان.",
  "Redefining Living Spaces.": "نعيد تعريف مساحات الحياة.",
  "A leading real estate development and interior design firm delivering premium residential, commercial, and administrative projects across the region. With over 18 years of experience, we combine innovation, quality craftsmanship, and sustainable practices to create spaces that inspire.":
    "شركة رائدة في التطوير العقاري والتصميم الداخلي، تقدّم مشروعات سكنية وتجارية وإدارية متميزة في المنطقة. بخبرة تتجاوز 18 عامًا، نجمع بين الابتكار وجودة الصنعة والممارسات المستدامة لنصنع مساحات تُلهم.",

  // ── Services ──
  "Our Services": "خدماتنا",
  "Two integrated divisions under one roof — real estate development, and contracting & finishing — delivered to the highest standards of quality and innovation.":
    "قطاعان متكاملان تحت سقف واحد — التطوير العقاري، والمقاولات والتشطيب — بأعلى معايير الجودة والابتكار.",
  "Real Estate Development": "التطوير العقاري",
  "Contracting & Finishing": "المقاولات والتشطيب",
  "Residential Development": "التطوير السكني",
  "Commercial Development": "التطوير التجاري",
  "Administrative Buildings": "المباني الإدارية",
  "Mixed Use Developments": "المشروعات متعددة الاستخدامات",
  "General Contracting": "المقاولات العامة",
  "Structural & Concrete Works": "الأعمال الإنشائية والخرسانية",
  "MEP & Installations": "الأعمال الكهروميكانيكية والتركيبات",
  "Interior Design": "التصميم الداخلي",
  "Luxury Finishing": "التشطيبات الفاخرة",
  "Turnkey Fit-out": "التشطيب المتكامل (تسليم مفتاح)",
  "End-to-end real estate development from land acquisition to project delivery.":
    "تطوير عقاري متكامل من اقتناء الأرض حتى تسليم المشروع.",
  "Premium residential compounds, villas, and apartment buildings.":
    "كمبوندات سكنية وفيلات وعمارات سكنية متميزة.",
  "Grade-A office towers, retail spaces, and business parks.":
    "أبراج مكتبية من الفئة الأولى ومساحات تجارية ومناطق أعمال.",
  "Government and corporate headquarters with modern civic design.":
    "مقرات حكومية ومؤسسية بتصميم مدني عصري.",
  "Integrated communities combining retail, residential, and office spaces.":
    "مجتمعات متكاملة تجمع بين المساحات التجارية والسكنية والمكتبية.",
  "Full-scope construction from foundation to structure with certified quality control.":
    "تنفيذ إنشائي كامل من الأساسات حتى الهيكل مع رقابة جودة معتمدة.",
  "Reinforced concrete, skeleton, and structural execution to engineering specifications.":
    "خرسانة مسلّحة وهياكل وتنفيذ إنشائي وفق المواصفات الهندسية.",
  "Mechanical, electrical, and plumbing systems installed and commissioned.":
    "تركيب وتشغيل الأنظمة الميكانيكية والكهربائية والصحية.",
  "Bespoke interior design for residential, commercial, and hospitality projects.":
    "تصميم داخلي مخصّص للمشروعات السكنية والتجارية والفندقية.",
  "Premium finishing materials, custom joinery, and high-end decorative solutions.":
    "خامات تشطيب فاخرة ونجارة مخصّصة وحلول ديكور راقية.",
  "Complete turnkey finishing and handover — ready-to-use spaces delivered on time.":
    "تشطيب وتسليم متكامل — مساحات جاهزة للاستخدام تُسلّم في موعدها.",

  // ── Division headers ──
  "Division 01": "القسم الأول",
  "Division 02": "القسم الثاني",
  "Master-planned residential, commercial, administrative, and mixed-use developments — from land acquisition to final delivery.":
    "مشروعات سكنية وتجارية وإدارية ومتعددة الاستخدامات مخطّطة بالكامل — من اقتناء الأرض حتى التسليم النهائي.",
  "Full-scope construction, structural works, and premium interior finishing — turnkey execution to the highest standards.":
    "تنفيذ إنشائي كامل وأعمال هيكلية وتشطيبات داخلية فاخرة — تسليم مفتاح بأعلى المعايير.",

  // ── Featured projects ──
  "Featured Projects": "مشروعات مختارة",
  "Explore our portfolio of premium real estate developments across residential, commercial, administrative, and mixed-use categories.":
    "استكشف محفظتنا من المشروعات العقارية المتميزة في القطاعات السكنية والتجارية والإدارية ومتعددة الاستخدامات.",
  "All": "الكل",
  "Residential": "سكني",
  "Commercial": "تجاري",
  "Administrative": "إداري",
  "Mixed Use": "متعدد الاستخدامات",
  "View All Projects": "عرض كل المشروعات",

  // ── Project card ──
  "Starting Price": "يبدأ من",
  "Area": "المساحة",
  "View Project": "عرض المشروع",
  "Available": "متاح",
  "Under Construction": "تحت الإنشاء",
  "Ready": "جاهز",
  "Palm Valley Towers": "أبراج بالم فالي",
  "Downtown Business Plaza": "داون تاون بيزنس بلازا",
  "Green Hills Compound": "كمبوند جرين هيلز",
  "Government Services Complex": "مجمع الخدمات الحكومية",
  "Tech Park Hub": "تِك بارك هَب",
  "ElGamal City Center": "الجمل سيتي سنتر",
  "Executive Tower": "البرج التنفيذي",
  "Court & Justice Building": "مبنى المحاكم والعدالة",
  "New Cairo, Egypt": "القاهرة الجديدة، مصر",
  "Cairo, Egypt": "القاهرة، مصر",
  "Sheikh Zayed, Egypt": "الشيخ زايد، مصر",
  "New Administrative Capital, Egypt": "العاصمة الإدارية الجديدة، مصر",
  "Smart Village, Egypt": "القرية الذكية، مصر",
  "6th of October, Egypt": "السادس من أكتوبر، مصر",
  "Maadi, Egypt": "المعادي، مصر",
  "Nasr City, Egypt": "مدينة نصر، مصر",
  "A master-planned residential compound offering luxury apartments and duplexes surrounded by lush landscapes, premium amenities, and 24/7 security.":
    "كمبوند سكني مخطّط بالكامل يقدّم شققًا ودوبلكس فاخرة وسط مساحات خضراء ومرافق متميزة وأمن على مدار الساعة.",
  "A premium Grade-A office building in the heart of Cairo's business district, featuring modern workspaces, meeting rooms, and panoramic city views.":
    "مبنى مكاتب من الفئة الأولى في قلب منطقة الأعمال بالقاهرة، بمساحات عمل عصرية وقاعات اجتماعات وإطلالات بانورامية على المدينة.",
  "An eco-friendly residential community featuring townhouses and villas with green spaces, cycling tracks, and sustainable energy solutions.":
    "مجتمع سكني صديق للبيئة يضم تاون هاوس وفيلات مع مساحات خضراء ومسارات دراجات وحلول طاقة مستدامة.",
  "A state-of-the-art government administrative complex designed for efficiency, accessibility, and sustainability with modern civic infrastructure.":
    "مجمع إداري حكومي متطوّر مصمّم للكفاءة وسهولة الوصول والاستدامة ببنية تحتية مدنية عصرية.",
  "A modern tech-focused business park with flexible office spaces, co-working areas, and startup incubators built for innovation.":
    "منطقة أعمال عصرية موجّهة للتكنولوجيا بمساحات مكتبية مرنة ومناطق عمل مشترك وحاضنات للشركات الناشئة صُممت للابتكار.",
  "A vibrant mixed-use development combining retail, residential, and office spaces in one integrated community hub.":
    "مشروع نابض متعدد الاستخدامات يجمع بين المساحات التجارية والسكنية والمكتبية في مركز مجتمعي متكامل.",
  "A prestigious commercial tower offering executive offices with premium specifications, panoramic Nile views, and concierge services.":
    "برج تجاري مرموق يوفّر مكاتب تنفيذية بمواصفات متميزة وإطلالات بانورامية على النيل وخدمات كونسيرج.",
  "A purpose-built judicial complex with courtrooms, offices, and public service areas designed for functionality and dignity.":
    "مجمع قضائي مصمّم خصيصًا يضم قاعات محاكم ومكاتب ومناطق خدمة عامة بتصميم عملي ومهيب.",
  "From $150,000": "من $150,000",
  "From $200,000": "من $200,000",
  "From $180,000": "من $180,000",
  "From $350,000": "من $350,000",
  "From $120,000": "من $120,000",
  "From $95,000": "من $95,000",
  "From $280,000": "من $280,000",
  "From $400,000": "من $400,000",
  "850 - 2,400 m²": "850 - 2,400 م²",
  "1,200 - 5,000 m²": "1,200 - 5,000 م²",
  "750 - 3,100 m²": "750 - 3,100 م²",
  "2,500 - 8,000 m²": "2,500 - 8,000 م²",
  "500 - 2,500 m²": "500 - 2,500 م²",
  "400 - 1,800 m²": "400 - 1,800 م²",
  "1,000 - 4,500 m²": "1,000 - 4,500 م²",
  "3,000 - 10,000 m²": "3,000 - 10,000 م²",

  // ── Completed projects ──
  "Completed Projects": "مشروعات مكتملة",
  "A showcase of our successfully delivered residential, commercial, and administrative projects that stand as testament to our commitment to excellence.":
    "عرض لمشروعاتنا السكنية والتجارية والإدارية التي سلّمناها بنجاح، شاهدة على التزامنا بالتميّز.",
  "Completed in": "اكتمل في",
  "Successfully delivered with premium quality specifications and modern design principles.":
    "تم التسليم بنجاح بمواصفات جودة عالية ومبادئ تصميم عصرية.",
  "Sunrise Gardens": "حدائق الشروق",
  "The Boulevard": "البوليفارد",
  "The Courthouse": "دار القضاء",
  "Marina View": "مارينا فيو",
  "Plaza 45": "بلازا 45",
  "City Hall Annex": "ملحق دار البلدية",

  // ── Technology ──
  "Developing Landmarks.": "نصنع معالم.",
  "Crafting Interiors.": "نتقن التشطيبات.",
  "Delivering Excellence.": "نُسلّم التميّز.",
  "Redefining modern living through exceptional real estate development and interior design. Every project is a testament to our commitment to quality, innovation, and creating sustainable communities that stand the test of time.":
    "نعيد تعريف الحياة العصرية عبر تطوير عقاري وتصميم داخلي استثنائي. كل مشروع شاهد على التزامنا بالجودة والابتكار وبناء مجتمعات مستدامة تصمد أمام الزمن.",

  // ── Collection / packages ──
  "Finishing Packages": "باقات التشطيب",
  "Modern Package": "الباقة العصرية",
  "Luxury Package": "الباقة الفاخرة",
  "Classic Package": "الباقة الكلاسيكية",
  "Minimal Package": "الباقة البسيطة",
  "VIP Package": "باقة كبار الشخصيات",
  "Sleek lines, open spaces, and contemporary finishes. Perfect for urban living with smart home integration.":
    "خطوط أنيقة ومساحات مفتوحة وتشطيبات معاصرة. مثالية للحياة العصرية مع أنظمة المنزل الذكي.",
  "Premium marble, custom joinery, and statement lighting. Designed for those who expect the extraordinary.":
    "رخام فاخر ونجارة مخصّصة وإضاءة مميزة. مصمّمة لمن يطلبون الاستثنائي.",
  "Timeless elegance with ornate details, rich wood tones, and traditional craftsmanship.":
    "أناقة خالدة بتفاصيل زخرفية ودرجات خشبية غنية وحرفية تقليدية.",
  "Less is more. Clean surfaces, neutral palettes, and functional beauty for serene spaces.":
    "البساطة هي الأصل. أسطح نظيفة وألوان محايدة وجمال عملي لمساحات هادئة.",
  "Bespoke design consultation, exclusive materials, and dedicated project management from concept to handover.":
    "استشارة تصميم مخصّصة وخامات حصرية وإدارة مشروع مكرّسة من الفكرة حتى التسليم.",
  "From $15,000": "من $15,000",
  "From $35,000": "من $35,000",
  "From $20,000": "من $20,000",
  "From $12,000": "من $12,000",
  "From $50,000": "من $50,000",

  // ── Editorial stats ──
  "Years Experience": "سنوات الخبرة",
  "Projects Delivered": "مشروع مُسلّم",
  "Happy Clients": "عميل سعيد",
  "Awards Won": "جائزة",

  // ── Testimonials ──
  "What Our Clients Say": "ماذا يقول عملاؤنا",
  "elgamal delivered our dream home ahead of schedule. The quality of workmanship and attention to detail exceeded our expectations.":
    "سلّمتنا الجمل منزل أحلامنا قبل الموعد. جودة التنفيذ والاهتمام بالتفاصيل فاقا توقعاتنا.",
  "The luxury finishing package transformed our office into a world-class workspace. Professional, creative, and reliable.":
    "حوّلت باقة التشطيب الفاخرة مكتبنا إلى مساحة عمل عالمية. احترافية وإبداع وموثوقية.",
  "From concept to completion, elgamal managed every detail of our compound development. Truly a partner you can trust.":
    "من الفكرة حتى الإنجاز، أدارت الجمل كل تفاصيل تطوير الكمبوند. شريك يستحق الثقة فعلاً.",
  "The interior design team understood our vision perfectly. The VIP package was worth every penny.":
    "فهم فريق التصميم الداخلي رؤيتنا تمامًا. باقة كبار الشخصيات تستحق كل قرش.",
  "Exceptional project management. Our administrative building was delivered on time and within budget.":
    "إدارة مشروع استثنائية. تم تسليم مبنانا الإداري في الموعد وضمن الميزانية.",
  "The team at elgamal turned our mixed-use development into a landmark. Residents and tenants love the spaces.":
    "حوّل فريق الجمل مشروعنا متعدد الاستخدامات إلى معلم. السكان والمستأجرون يعشقون المساحات.",
  "We chose elgamal for their reputation, and they delivered excellence. The minimal package was stylish and affordable.":
    "اخترنا الجمل لسمعتهم، فسلّمونا التميّز. كانت الباقة البسيطة أنيقة وبسعر مناسب.",
  "Engineering consultancy, interior finishing, and project management all under one roof. Seamless experience.":
    "استشارات هندسية وتشطيب داخلي وإدارة مشروعات تحت سقف واحد. تجربة سلسة.",
  "Ahmed Hassan": "أحمد حسن",
  "Sarah Mitchell": "سارة ميتشل",
  "Omar Farouk": "عمر فاروق",
  "Layla Khoury": "ليلى خوري",
  "Maj. Khalid Ibrahim": "الرائد خالد إبراهيم",
  "Diana Nour": "ديانا نور",
  "Tariq Mansour": "طارق منصور",
  "Eng. Rania Sleiman": "م. رانيا سليمان",
  "Palm Valley Towers, Residential Client": "أبراج بالم فالي، عميل سكني",
  "Executive Tower, Commercial Client": "البرج التنفيذي، عميل تجاري",
  "Green Hills Compound, Developer": "كمبوند جرين هيلز، مطوّر",
  "Marina View Residences, Private Client": "مساكن مارينا فيو، عميل خاص",
  "Government Services Complex, Client": "مجمع الخدمات الحكومية، عميل",
  "ElGamal City Center, Developer": "الجمل سيتي سنتر، مطوّر",
  "The Boulevard, Residential Client": "البوليفارد، عميل سكني",
  "Tech Park Hub, Corporate Client": "تِك بارك هَب، عميل مؤسسي",

  // ── Contact ──
  "Get In Touch": "تواصل معنا",
  "Office Address": "عنوان المكتب",
  "elgamal Tower, 45 Al Rehab Street, New Cairo, Cairo, Egypt":
    "برج الجمل، 45 شارع الرحاب، القاهرة الجديدة، القاهرة، مصر",
  "Phone": "الهاتف",
  "Email": "البريد الإلكتروني",
  "Working Hours": "مواعيد العمل",
  "Sunday - Thursday: 9:00 AM - 6:00 PM": "الأحد - الخميس: 9:00 ص - 6:00 م",
  "Location": "الموقع",
  "Google Maps Placeholder": "خرائط جوجل (عنصر نائب)",
  "Full Name": "الاسم الكامل",
  "Your full name": "اكتب اسمك الكامل",
  "Message": "الرسالة",
  "Tell us about your project...": "احكِ لنا عن مشروعك...",
  "Send Message": "إرسال الرسالة",

  // ── Footer ──
  "Building better communities through premium real estate development, luxury interior design, and world-class finishing services.":
    "نبني مجتمعات أفضل عبر تطوير عقاري متميز وتصميم داخلي فاخر وخدمات تشطيب عالمية المستوى.",
  "Explore": "استكشف",
  "Service": "خدماتنا",
  "Contact": "التواصل",
  "About Us": "من نحن",
  "Mission": "رسالتنا",
  "Vision": "رؤيتنا",
  "Careers": "وظائف",
  "Finishing Packages ": "باقات التشطيب",
  "All rights reserved.": "جميع الحقوق محفوظة.",
};

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggle: () => void;
  t: (s: string) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  dir: "ltr",
  toggle: () => {},
  t: (s) => s,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value: I18nValue = {
    lang,
    dir,
    toggle: () => setLang((l) => (l === "en" ? "ar" : "en")),
    t: (s) => (lang === "ar" ? ar[s] ?? s : s),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
