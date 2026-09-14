import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Available Projects | AL GAMAL",
  description: "Explore current property opportunities offered by AL GAMAL in New Damietta.",
};

export default function CampaignsPage() {
  const activeProjects = projects.filter((project) => project.purpose === "For Sale");

  return (
    <main className="min-h-screen bg-[#f2eadd] text-[#35231f]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-12 lg:px-20">
        <Link href="/" className="relative h-12 w-36"><Image src="/brand/al-gamal-logo-dark.png" alt="AL GAMAL" fill priority className="object-contain object-left" /></Link>
        <Link href="/" className="text-sm font-semibold underline decoration-[#a66c3d]/40 underline-offset-8">Main website</Link>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20 lg:px-20">
        <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#a66c3d]">Current opportunities</p>
        <h1 className="mt-5 max-w-4xl font-display text-6xl font-semibold leading-[.88] tracking-[-.05em] md:text-8xl">Choose your next place.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#755f55]">Campaign-ready pages for AL GAMAL projects currently offered for sale.</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {activeProjects.map((project) => (
            <Link key={project.slug} href={`/campaigns/${project.slug}/`} className="group relative aspect-[4/5] overflow-hidden bg-[#241612] md:aspect-[5/4]">
              <Image src={project.image} alt={project.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />
              <div className="absolute inset-x-0 top-0 flex justify-between p-6 text-white"><span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] backdrop-blur">{project.status}</span><ArrowUpRight /></div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="flex items-center gap-2 text-xs text-white/65"><MapPin size={14} />{project.location}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{project.name}</h2>
                <p className="mt-4 text-sm text-white/65">View campaign page</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
