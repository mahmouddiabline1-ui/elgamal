"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { Project } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

const copy = {
  en: {
    opportunity: "A current AL GAMAL opportunity", request: "Request availability", talk: "Talk to sales", overview: "The opportunity",
    units: "Available units", gallery: "Explore the project", why: "Why this project", location: "Location", code: "Project code",
    formTitle: "Get the full project details", formText: "Leave your details and the sales team can follow up with availability, payment information and next steps.",
    name: "Full name", phone: "Phone number", email: "Email address", interest: "I am interested in", submit: "Request project details",
    privacy: "Your details are used only to respond to this project enquiry.", back: "All opportunities", fallback: "Availability and areas are confirmed directly by the sales team.",
    benefits: ["Direct project information", "Current unit availability", "Guidance from the AL GAMAL sales team"],
  },
  ar: {
    opportunity: "فرصة متاحة حاليًا من الجمل", request: "اطلب الوحدات المتاحة", talk: "تحدث مع المبيعات", overview: "عن المشروع",
    units: "الوحدات المتاحة", gallery: "اكتشف المشروع", why: "لماذا هذا المشروع؟", location: "الموقع", code: "كود المشروع",
    formTitle: "احصل على تفاصيل المشروع كاملة", formText: "اترك بياناتك ليتواصل معك فريق المبيعات بالوحدات المتاحة وأنظمة السداد والخطوات التالية.",
    name: "الاسم بالكامل", phone: "رقم الهاتف", email: "البريد الإلكتروني", interest: "نوع الوحدة المطلوبة", submit: "اطلب تفاصيل المشروع",
    privacy: "تُستخدم بياناتك فقط للرد على استفسارك عن هذا المشروع.", back: "كل الفرص المتاحة", fallback: "يؤكد فريق المبيعات المساحات والوحدات المتاحة مباشرة.",
    benefits: ["معلومات مباشرة عن المشروع", "أحدث الوحدات المتاحة", "متابعة من فريق مبيعات الجمل"],
  },
};

export function CampaignProjectPage({ project }: { project: Project }) {
  const { lang, toggle } = useI18n();
  const c = copy[lang];
  const name = lang === "ar" ? project.nameAr : project.name;
  const description = lang === "ar" ? project.descriptionAr : project.description;
  const location = lang === "ar" ? project.locationAr : project.location;

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${project.name} campaign enquiry`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\nProject: ${project.name}\nSource: ${window.location.href}`);
    window.location.href = `mailto:Elgamal7784@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-[#f2eadd] text-[#35231f]">
      <header className="absolute inset-x-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-12 lg:px-20">
        <Link href="/" className="relative h-12 w-36"><Image src="/brand/al-gamal-logo-light.png" alt="AL GAMAL" fill priority className="object-contain object-left" /></Link>
        <div className="flex items-center gap-3"><button onClick={toggle} className="min-h-11 rounded-full border border-white/30 bg-black/20 px-5 text-sm font-bold text-white backdrop-blur">{lang === "en" ? "عربي" : "EN"}</button><Link href="#campaign-lead" className="hidden min-h-11 items-center rounded-full bg-[#f2eadd] px-5 text-sm font-bold sm:inline-flex">{c.request}</Link></div>
      </header>

      <section className="relative min-h-[92svh] overflow-hidden bg-[#241612] text-white">
        <Image src={project.image} alt={name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,10,8,.88)_0%,rgba(20,10,8,.45)_48%,rgba(0,0,0,.12)_100%)]" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-12 md:pb-20 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d7b68f]">{c.opportunity}</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[.82] tracking-[-.055em] md:text-8xl lg:text-[8.5rem]">{name}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="#campaign-lead" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f2eadd] px-6 text-sm font-bold text-[#35231f]">{c.request}<ArrowDown size={17} /></Link><Link href={`/projects/${project.id}/`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 bg-black/15 px-6 text-sm font-bold backdrop-blur">{lang === "ar" ? "صفحة المشروع" : "Project profile"}<ArrowUpRight size={16} /></Link></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#35231f]/15"><div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-12 lg:px-20">{[[c.location, location],[c.code, project.code],[lang === "ar" ? "النوع" : "Category", project.category],[lang === "ar" ? "الحالة" : "Status", project.status]].map(([label,value]) => <div key={label} className="border-b border-e border-[#35231f]/15 p-5 md:border-b-0 md:p-7"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#a66c3d]">{label}</p><p className="mt-2 text-sm font-semibold">{value}</p></div>)}</div></section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_.9fr] lg:px-20">
        <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#a66c3d]">{c.overview}</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[.95] md:text-7xl">{lang === "ar" ? "مكان مصمم لقيمة تدوم." : "A place designed for enduring value."}</h2></div>
        <div className="self-end"><p className="text-lg leading-9 text-[#755f55]">{description}</p><div className="mt-8 space-y-4">{c.benefits.map((benefit) => <p key={benefit} className="flex items-center gap-3 border-b border-[#35231f]/15 pb-4 text-sm font-semibold"><Check size={17} className="text-[#a66c3d]" />{benefit}</p>)}</div></div>
      </section>

      {project.availableUnits?.length ? <section className="bg-[#35231f] px-5 py-20 text-[#f2eadd] md:px-12 md:py-28 lg:px-20"><div className="mx-auto max-w-7xl"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d7b68f]">{c.units}</p><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{project.availableUnits.map((unit,index) => <article key={`${unit.type}-${index}`} className="border border-white/15 bg-white/[.06] p-7"><span className="text-[10px] text-white/45">{String(index+1).padStart(2,"0")}</span><h3 className="mt-8 font-display text-4xl">{unit.area}</h3><p className="mt-3 text-sm text-white/65">{unit.type}{unit.floor ? ` · ${unit.floor}` : ""}</p>{unit.price ? <p className="mt-5 font-semibold text-[#d7b68f]">{unit.price}</p> : null}{unit.payment ? <p className="mt-1 text-xs text-white/50">{unit.payment}</p> : null}</article>)}</div>{project.pricingNotes?.length ? <div className="mt-7 space-y-2 text-sm text-white/65">{project.pricingNotes.map((note) => <p key={note}>• {note}</p>)}</div> : null}</div></section> : <section className="bg-[#35231f] px-5 py-20 text-[#f2eadd] md:px-12"><div className="mx-auto max-w-7xl"><h2 className="font-display text-5xl">{c.units}</h2><p className="mt-5 text-white/65">{c.fallback}</p></div></section>}

      <section className="px-5 py-20 md:px-12 md:py-28 lg:px-20"><div className="mx-auto max-w-7xl"><h2 className="font-display text-5xl font-semibold md:text-7xl">{c.gallery}</h2><div className="mt-10 grid gap-4 md:grid-cols-12">{project.gallery.slice(0,5).map((image,index) => <div key={image} className={`relative overflow-hidden bg-[#e7dac7] ${index === 0 ? "aspect-[16/10] md:col-span-8 md:row-span-2" : "aspect-[4/3] md:col-span-4"}`}><Image src={image} alt={`${name} ${index+1}`} fill sizes="(max-width:768px) 100vw, 66vw" className="object-cover" /></div>)}</div></div></section>

      <section id="campaign-lead" className="bg-[#201310] px-5 py-20 text-white md:px-12 md:py-28 lg:px-20"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-24"><div><ShieldCheck className="text-[#d7b68f]" size={34} strokeWidth={1.4} /><h2 className="mt-7 max-w-xl font-display text-5xl font-semibold leading-[.95] md:text-7xl">{c.formTitle}</h2><p className="mt-6 max-w-lg text-base leading-8 text-white/60">{c.formText}</p><p className="mt-10 flex items-center gap-3 text-sm text-[#d7b68f]"><MapPin size={17} />{location}</p></div><form onSubmit={submitLead} className="space-y-5 border border-white/15 bg-white/[.06] p-6 md:p-8"><label className="block text-sm"><span className="mb-2 block text-white/65">{c.name}</span><input name="name" required className="min-h-12 w-full border border-white/15 bg-black/20 px-4 outline-none focus:border-[#d7b68f]" /></label><label className="block text-sm"><span className="mb-2 block text-white/65">{c.phone}</span><input name="phone" type="tel" required className="min-h-12 w-full border border-white/15 bg-black/20 px-4 outline-none focus:border-[#d7b68f]" /></label><label className="block text-sm"><span className="mb-2 block text-white/65">{c.email}</span><input name="email" type="email" className="min-h-12 w-full border border-white/15 bg-black/20 px-4 outline-none focus:border-[#d7b68f]" /></label><label className="block text-sm"><span className="mb-2 block text-white/65">{c.interest}</span><input name="interest" className="min-h-12 w-full border border-white/15 bg-black/20 px-4 outline-none focus:border-[#d7b68f]" /></label><button type="submit" className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#f2eadd] px-6 text-sm font-bold text-[#35231f]">{c.submit}<Phone size={17} /></button><p className="text-center text-[10px] leading-5 text-white/40">{c.privacy}</p></form></div></section>

      <footer className="flex flex-wrap items-center justify-between gap-5 bg-black px-5 py-8 text-white/55 md:px-12 lg:px-20"><Link href="/campaigns/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft size={16} />{c.back}</Link><span className="text-[10px] uppercase tracking-[.25em]">AL GAMAL · NEW DAMIETTA</span></footer>
    </main>
  );
}
