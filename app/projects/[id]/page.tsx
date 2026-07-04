import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { ProjectDetailPageClient } from "./project-detail-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | elgamal`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageClient project={project} />;
}
