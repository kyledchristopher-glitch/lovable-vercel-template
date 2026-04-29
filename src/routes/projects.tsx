import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = {
  img: string;
  title: string;
  loc: string;
  tag: string;
  size?: "tall" | "wide";
};

const projects: Project[] = [
  {
    img: "/portfolio/IMG_3433.jpeg",
    title: "Artificial turf installation with paver walkway",
    loc: "Triangle, NC",
    tag: "Artificial Turf",
    size: "tall",
  },
  {
    img: "/portfolio/IMG_3440.jpeg",
    title: "Backyard turf, stepping-stone patio, and fire pit area",
    loc: "Triangle, NC",
    tag: "Outdoor Living",
  },
  {
    img: "/portfolio/IMG_5860.jpeg",
    title: "Modern turf lawn with large stone pavers",
    loc: "Triangle, NC",
    tag: "Artificial Turf",
  },
  {
    img: "/portfolio/IMG_5861.jpeg",
    title: "Poolside turf and stone patio installation",
    loc: "Triangle, NC",
    tag: "Artificial Turf",
    size: "tall",
  },
  {
    img: "/portfolio/IMG_0204.jpeg",
    title: "Pool patio paver installation",
    loc: "Triangle, NC",
    tag: "Paver Patios",
  },
  {
    img: "/portfolio/IMG_0205.jpeg",
    title: "Travertine-style pool deck and patio",
    loc: "Triangle, NC",
    tag: "Paver Patios",
  },
  {
    img: "/portfolio/IMG_0315.jpeg",
    title: "Paver patio and walkway installation",
    loc: "Triangle, NC",
    tag: "Paver Patios",
  },
  {
    img: "/portfolio/IMG_2625.jpeg",
    title: "Custom paver patio with circular fire pit",
    loc: "Triangle, NC",
    tag: "Outdoor Living",
    size: "wide",
  },
  {
    img: "/portfolio/IMG_2679.jpeg",
    title: "Stamped concrete driveway installation",
    loc: "Triangle, NC",
    tag: "Concrete & Driveways",
  },
  {
    img: "/portfolio/IMG_2706.jpeg",
    title: "Finished concrete driveway and walkway",
    loc: "Triangle, NC",
    tag: "Concrete & Driveways",
  },
  {
    img: "/portfolio/IMG_3208.jpeg",
    title: "Paver patio installation around pool area",
    loc: "Triangle, NC",
    tag: "Paver Patios",
  },
  {
    img: "/portfolio/IMG_3428.jpeg",
    title: "Backyard putting green installation",
    loc: "Triangle, NC",
    tag: "Putting Greens",
  },
  {
    img: "/portfolio/IMG_4455.jpeg",
    title: "Artificial putting green installation",
    loc: "Triangle, NC",
    tag: "Putting Greens",
  },
  {
    img: "/portfolio/IMG_4183.jpeg",
    title: "Stamped concrete patio with stone border",
    loc: "Triangle, NC",
    tag: "Hardscapes",
  },
  {
    img: "/portfolio/IMG_5120.jpeg",
    title: "Large-format paver walkway installation",
    loc: "Triangle, NC",
    tag: "Hardscapes",
  },
  {
    img: "/portfolio/IMG_5852.jpeg",
    title: "Backyard turf and poolside hardscape",
    loc: "Triangle, NC",
    tag: "Artificial Turf",
    size: "wide",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      <section className="relative h-[62svh] min-h-[480px] overflow-hidden md:h-[70svh]">
        <img
          src="/portfolio/projects-hero.jpeg"
          alt="Terraced hardscape patio with curved seat walls"
          className="absolute inset-0 h-full w-full object-cover object-[center_62%] animate-ken-burns"
          width={3201}
          height={1800}
        />
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-white lg:px-10">
          <span className="eyebrow animate-rise text-white/70">Projects</span>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl sm:text-6xl lg:text-7xl animate-rise delay-100">
            Projects we are proud to build across the Triangle.
          </h1>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Portfolio</SectionLabel>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            A selection of turf installations, patios, pool surrounds, putting greens,
            concrete work, and outdoor living spaces built across the greater Triangle region.
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
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1800}
                  height={1350}
                />
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
          <h2 className="text-balance font-display text-4xl lg:text-5xl">
            Imagining something for your property?
          </h2>
          <Link to="/contact" className="button-base button-primary mt-10">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
