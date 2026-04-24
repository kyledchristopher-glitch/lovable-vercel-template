import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";
import patio from "@/assets/patio.jpg";
import retainingWall from "@/assets/retaining-wall.jpg";
import garden from "@/assets/garden.jpg";
import lawn from "@/assets/lawn.jpg";
import walkway from "@/assets/walkway.jpg";
import outdoorLiving from "@/assets/outdoor-living.jpg";
import aerial from "@/assets/aerial.jpg";
import hero from "@/assets/hero.jpg";
import craft from "@/assets/craft.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = { img: string; title: string; loc: string; tag: string; size?: "tall" | "wide" };
const projects: Project[] = [
  { img: outdoorLiving, title: "Pinehurst Outdoor Room", loc: "Wake Forest, NC", tag: "Outdoor Living", size: "tall" },
  { img: patio, title: "Cedar Pergola & Stone Patio", loc: "Youngsville, NC", tag: "Hardscape" },
  { img: walkway, title: "Front Approach Walkway", loc: "Raleigh, NC", tag: "Walkways" },
  { img: retainingWall, title: "Terraced Stone Wall", loc: "Durham, NC", tag: "Retaining Walls", size: "tall" },
  { img: garden, title: "Layered Perennial Garden", loc: "Youngsville, NC", tag: "Gardens" },
  { img: lawn, title: "Estate Lawn Renovation", loc: "Wake Forest, NC", tag: "Lawn" },
  { img: aerial, title: "Whole Property Transformation", loc: "Franklin County, NC", tag: "Design + Build", size: "wide" },
  { img: hero, title: "Modern Lodge Courtyard", loc: "Raleigh, NC", tag: "Design + Build" },
  { img: craft, title: "Custom Stone Detailing", loc: "Studio Work", tag: "Craft" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      <section className="relative h-[62svh] min-h-[480px] overflow-hidden md:h-[70svh]">
        <img src={aerial} alt="Aerial view of landscaped estate" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" width={1920} height={1080}/>
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-10 pb-24 text-white">
          <span className="eyebrow text-white/70 animate-rise">Projects</span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance animate-rise delay-100">
            Projects we are proud to build across the Triangle.
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Portfolio</SectionLabel>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            A selection of landscapes, hardscapes, and outdoor living spaces shaped
            across the greater Triangle region. Each project is tailored to its property,
            its owners, and the way they want to live outside.
          </p>

          <div className="mt-16 grid auto-rows-[240px] gap-5 md:grid-cols-6 md:auto-rows-[260px] md:gap-6">
            {projects.map((p) => (
              <figure
                key={p.title}
                className={`group relative overflow-hidden rounded-lg shadow-frame ${
                  p.size === "tall"
                    ? "md:col-span-3 md:row-span-2"
                    : p.size === "wide"
                    ? "md:col-span-6 md:row-span-2"
                    : "md:col-span-3"
                }`}
              >
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-7 text-cream">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cream/70">{p.tag}</span>
                  <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{p.loc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Imagining something for your property?
          </h2>
          <Link to="/contact" className="button-base button-primary mt-10">
            Request a Consultation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
