import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";
import outdoorLiving from "@/assets/outdoor-living.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const groups = [
  {
    eyebrow: "Hardscapes",
    title: "Hardscapes",
    image: "/portfolio/IMG_4183.jpeg",
    items: ["Stamped concrete patios", "Stone borders", "Retaining walls", "Custom hardscape details"],
    desc: "Patios, walls, and stonework built for clean lines, long-term durability, and a refined finished look.",
  },
  {
    eyebrow: "Turf",
    title: "Artificial Turf",
    image: "/portfolio/IMG_5860.jpeg",
    items: ["Modern turf lawns", "Poolside turf", "Low-maintenance installs"],
    desc: "Artificial turf systems designed for a natural appearance, dependable drainage, and year-round usability.",
  },
  {
    eyebrow: "Greens",
    title: "Putting Greens",
    image: "/portfolio/IMG_3428.jpeg",
    items: ["Backyard practice greens", "Custom contours", "Integrated stone detailing"],
    desc: "Backyard putting greens tailored for recreation, visual impact, and seamless integration into the landscape.",
  },
  {
    eyebrow: "Patios",
    title: "Paver Patios",
    image: "/portfolio/IMG_0204.jpeg",
    items: ["Pool patios", "Travertine-style decks", "Walkways", "Fire pit areas"],
    desc: "Paver patios and pool surrounds laid out with careful spacing, strong edges, and materials that suit the home.",
  },
  {
    eyebrow: "Concrete",
    title: "Concrete & Driveways",
    image: "/portfolio/services-driveway.jpeg",
    items: ["Stamped concrete", "Driveway installs", "Walkways", "Decorative borders"],
    desc: "Concrete driveways and approach work shaped for clean curb appeal, durability, and precise finish details.",
  },
  {
    eyebrow: "Living",
    title: "Outdoor Living",
    image: "/portfolio/IMG_3440.jpeg",
    items: ["Fire pit spaces", "Poolside gathering areas", "Patio extensions", "Backyard living zones"],
    desc: "Outdoor living areas that make space for gathering, entertaining, and spending more time comfortably outside.",
  },
  {
    eyebrow: "Lighting",
    title: "Landscape Lighting",
    image: outdoorLiving,
    items: ["Path lighting", "Accent lighting", "Architectural glow", "Evening ambiance"],
    desc: "A temporary portfolio image while new lighting photography is added, representing the warm evening atmosphere we aim to create.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      <section className="relative h-[62svh] min-h-[480px] overflow-hidden md:h-[70svh]">
        <img
          src="/portfolio/services-hero.jpeg"
          alt="Poolside patio and stair hardscape installation"
          className="absolute inset-0 h-full w-full object-cover object-[center_58%] animate-ken-burns"
          width={2200}
          height={1542}
        />
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-white lg:px-10">
          <span className="eyebrow animate-rise text-white/70">Services</span>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl sm:text-6xl lg:text-7xl animate-rise delay-100">
            Design, build, and specialty installs for the way you live outside.
          </h1>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            A complete studio for outdoor living, hardscape, and turf work.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Our work spans patios, concrete, turf, greens, and outdoor gathering areas.
            Every service is delivered with the same care for detail, finish, and long-term performance.
          </p>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
            {groups.map((g, i) => (
              <div
                key={g.title}
                className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-lg shadow-frame lg:col-span-7">
                  <img
                    src={g.image}
                    alt={g.title}
                    className={`h-[460px] w-full object-cover ${
                      g.title === "Concrete & Driveways" ? "object-[center_72%]" : ""
                    }`}
                    loading="lazy"
                    width={1800}
                    height={1350}
                  />
                </div>
                <div className="lg:col-span-5">
                  <span className="eyebrow">{g.eyebrow}</span>
                  <h3 className="mt-4 text-balance font-display text-3xl lg:text-4xl">{g.title}</h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{g.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 border-t border-border pt-3 text-foreground/90"
                      >
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

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-lg bg-charcoal p-14 text-center text-cream lg:p-20">
          <h2 className="text-balance font-display text-4xl lg:text-5xl">
            Tell us what you’re imagining.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/70">
            Every project starts with a conversation about your property and goals.
          </p>
          <Link to="/contact" className="button-base button-light mt-10">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
