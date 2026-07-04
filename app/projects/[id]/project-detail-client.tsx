"use client";

import Image from "next/image";
import { Project, ProjectStatus, projects } from "@/lib/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Available: "bg-green-100 text-green-700 border-green-200",
  "Under Construction": "bg-amber-100 text-amber-700 border-amber-200",
  Ready: "bg-blue-100 text-blue-700 border-blue-200",
};

interface ProjectDetailPageClientProps {
  project: Project;
}

function BookingForm({ project }: ProjectDetailPageClientProps) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card">
      <h3 className="text-xl font-medium tracking-tight text-foreground mb-2">
        Book an Appointment
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Schedule a visit to {project.name} with our sales team.
      </p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Phone</label>
          <input
            type="tel"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="+20 XXX XXX XXXX"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Preferred Date</label>
          <input
            type="date"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export function ProjectDetailPageClient({ project }: ProjectDetailPageClientProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">{project.description}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {project.location}
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {project.area}
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {project.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(project.gallery || []).map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${project.name} gallery ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(project.facilities || []).map((facility, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-foreground">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                  {(project.amenities || []).map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-foreground">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Plan & Floor Plans */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Master Plan</h2>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary">
                    <Image
                      src={project.masterPlan || "/placeholder.svg"}
                      alt={`${project.name} master plan`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Floor Plans</h2>
                  <div className="space-y-3">
                    {(project.floorPlans || []).map((plan, idx) => (
                      <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary">
                        <Image
                          src={plan || "/placeholder.svg"}
                          alt={`${project.name} floor plan ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Payment Plan</h2>
                <div className="p-6 rounded-xl border border-border bg-secondary/30">
                  <p className="text-muted-foreground leading-relaxed">{project.paymentPlan}</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Project Location</h2>
                <div className="aspect-video rounded-xl overflow-hidden border border-border bg-secondary">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Google Maps Placeholder
                  </div>
                </div>
              </div>

              {/* Nearby Services */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Nearby Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(project.nearbyServices || []).map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background"
                    >
                      <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-foreground">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm project={project} />
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-20">
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === project.category && p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <a
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedProject.location}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
