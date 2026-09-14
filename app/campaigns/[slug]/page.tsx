import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { CampaignProjectPage } from "./campaign-project-page";

interface PageProps { params: Promise<{ slug: string }>; }

const saleProjects = projects.filter((project) => project.purpose === "For Sale");

export function generateStaticParams() {
  return saleProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = saleProjects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} — Request Availability | AL GAMAL`,
    description: `${project.description} Request current availability and project details from AL GAMAL.`,
    openGraph: { title: project.name, description: project.description, images: [`https://mahmouddiabline1-ui.github.io/elgamal${project.image}`] },
  };
}

export default async function CampaignPage({ params }: PageProps) {
  const { slug } = await params;
  const project = saleProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CampaignProjectPage project={project} />;
}
