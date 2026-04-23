import { Link } from "react-router-dom";
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

const groups = [
  {
    eyebrow: "Design",
    title: "Landscape Design",
    image: garden,
    items: ["Landscape Design", "Landscaping", "Property Enhancements"],
    desc: "Site-specific design that translates your property and lifestyle into a clear, considered plan.",
  },
  {
    eyebrow: "Hardscape",
    title: "Hardscape & Stone",
    image: patio,
    items: ["Hardscaping", "Patios", "Walkways", "Retaining Walls"],
    desc: "Patios, walkways, and structural stonework built with longevity and proportion in mind.",
  },
  {
    eyebrow: "Gardens",
    title: "Gardens & Plantings",
    image: walkway,
    items: ["Flower Beds & Gardens", "Garden Installation", "Mulch & Plant Installation"],
    desc: "Layered planting design — perennials, ornamentals, and natives selected for our region.",
  },
  {
    eyebrow: "Lawn",
    title: "Lawn & Turf",
    image: lawn,
    items: ["Complete Lawn Renovations", "Sod Installation", "Drainage Solutions"],
    desc: "Healthy, properly graded lawns built on a foundation of soil, drainage, and the right turf.",
  },
  {
    eyebrow: "Living",
    title: "Outdoor Living",
    image: outdoorLiving,
    items: ["Outdoor Living Spaces", "Patios", "Property Enhancements"],
    desc: "Pergolas, fire features, and gathering spaces designed as natural extensions of the home.",
  },
  {
    eyebrow: "Care",
    title: "Maintenance",
    image: retainingWall,
    items: ["Landscape Maintenance"],
    desc: "Seasonal care for the landscapes we build, so they look their best for years to come.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      <section className="relative h-[70svh] overflow-hidden">
        <img src={patio} alt="Premium hardscape patio" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" width={1280} height={1280}/>
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-10 pb-24 text-white">
          <span className="eyebrow text-white/70 animate-rise">Services</span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance animate-rise delay-100">
            Design, build, and care for the landscapes around you.
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl max-w-3xl text-balance">
            A complete studio for your outdoor environment.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Our work spans from intimate garden details to full property transformations.
            Every service is delivered with the same care for craft and material.
          </p>

          <div className="mt-20 space-y-24">
            {groups.map((g, i) => (
              <div key={g.title} className={`grid gap-10 lg:gap-16 lg:grid-cols-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7 overflow-hidden rounded-lg shadow-frame">
                  <img src={g.image} alt={g.title} className="h-[460px] w-full object-cover" loading="lazy" width={1280} height={1280}/>
                </div>
                <div className="lg:col-span-5">
                  <span className="eyebrow">{g.eyebrow}</span>
                  <h3 className="mt-4 font-display text-3xl lg:text-4xl text-balance">{g.title}</h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{g.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-foreground/90 border-t border-border pt-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-5xl bg-charcoal text-cream rounded-lg p-14 lg:p-20 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Tell us what you’re imagining.
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">
            Every project starts with a conversation about your property and goals.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-charcoal">
            Request a Consultation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
