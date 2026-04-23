import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight, Leaf, Hammer, TreePine, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import walkway from "@/assets/walkway.jpg";
import outdoorLiving from "@/assets/outdoor-living.jpg";
import garden from "@/assets/garden.jpg";
import patio from "@/assets/patio.jpg";
import retainingWall from "@/assets/retaining-wall.jpg";
import craft from "@/assets/craft.jpg";
import aerial from "@/assets/aerial.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  { icon: TreePine, title: "Landscape Design", desc: "Site-responsive design grounded in your land, lifestyle, and the seasons." },
  { icon: Hammer, title: "Hardscape & Stone", desc: "Patios, walkways, and retaining walls built with enduring natural materials." },
  { icon: Leaf, title: "Gardens & Plantings", desc: "Layered planting design — perennials, ornamental grasses, native species." },
  { icon: Sparkles, title: "Outdoor Living", desc: "Pergolas, fire features, and gathering spaces designed for everyday use." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Cinematic golden-hour landscape with stone patio and pergola"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32 text-white">
          <div className="animate-rise">
            <span className="eyebrow text-white/70">Landscape Design &amp; Build · Youngsville, NC</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl text-balance animate-rise delay-100">
            Outdoor spaces, <em className="italic text-white/95">crafted to live in.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 animate-rise delay-200">
            We design and build refined landscapes, hardscapes, and outdoor living
            environments that elevate the way you experience your property.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise delay-300">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>

      </section>

      {/* POSITIONING */}
      <section className="px-6 lg:px-10 py-28 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Our Studio</SectionLabel>
          <h2 className="mt-8 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl text-balance">
            A landscape studio for homeowners who care about how a place
            <em className="italic text-accent-foreground/80"> feels</em>, not just how it looks.
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              South Landscaping is a design-led practice based in Youngsville, North Carolina.
              We work closely with each client to shape outdoor environments that are quietly
              beautiful, deeply considered, and built to last.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a single garden bed to a complete property transformation, our work is
              guided by craftsmanship, restraint, and an honest respect for natural materials —
              stone, wood, water, and the plants themselves.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-secondary/40 px-6 lg:px-10 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <SectionLabel>Signature Services</SectionLabel>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl text-balance max-w-2xl">
                Considered work, from concept to mature landscape.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-foreground hover:text-accent-foreground"
            >
              All services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-lg">
            {services.map((s) => (
              <div key={s.title} className="group bg-background p-10 transition-colors hover:bg-card">
                <s.icon size={28} strokeWidth={1.4} className="text-foreground/80" />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGERY (split) */}
      <section className="px-6 lg:px-10 py-28 lg:py-40">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 relative overflow-hidden rounded-lg shadow-frame">
            <img src={outdoorLiving} alt="Outdoor living space at dusk with stone fireplace" className="h-[520px] w-full object-cover" loading="lazy" width={1600} height={1200}/>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <SectionLabel>Featured</SectionLabel>
            <h3 className="mt-6 font-display text-3xl lg:text-4xl leading-tight text-balance">
              An outdoor living room set against the Carolina pines.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A stacked-stone fireplace anchors a warm cedar deck, framed by layered
              plantings and a soft amber glow at golden hour. Quiet, generous, and
              made for long evenings.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <img src={walkway} alt="Stone walkway through garden" className="h-44 w-full object-cover rounded" loading="lazy" width={1280} height={1600}/>
              <img src={garden} alt="Layered planting bed" className="h-44 w-full object-cover rounded" loading="lazy" width={1280} height={1280}/>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP / ABOUT */}
      <section className="bg-charcoal text-cream px-6 lg:px-10 py-28 lg:py-40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <img src={craft} alt="Craftsman placing natural stone" className="w-full rounded shadow-soft object-cover h-[560px]" loading="lazy" width={1280} height={1600}/>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-cream/60">
              <span className="h-px w-8 bg-cream/40" />
              <span className="eyebrow text-cream/60">Craftsmanship</span>
            </div>
            <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Built by hand, with patience and the right materials.
            </h2>
            <p className="mt-8 text-cream/75 leading-relaxed text-lg max-w-xl">
              Every wall, walkway, and planting bed we install passes through the same
              standard: it has to feel honest. We choose stone, wood, and plant material
              that will weather gracefully and only look better with time.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
              <div>
                <p className="font-display text-4xl">15+</p>
                <p className="mt-2 text-cream/60 text-sm">Years of craft</p>
              </div>
              <div>
                <p className="font-display text-4xl">300+</p>
                <p className="mt-2 text-cream/60 text-sm">Properties shaped</p>
              </div>
              <div>
                <p className="font-display text-4xl">NC</p>
                <p className="mt-2 text-cream/60 text-sm">Rooted locally</p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-cream/40 px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-cream hover:bg-cream hover:text-charcoal transition-colors"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUTDOOR LIVING PHILOSOPHY */}
      <section className="px-6 lg:px-10 py-28 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel><span className="mx-auto">Philosophy</span></SectionLabel>
          <p className="mt-10 font-display text-3xl sm:text-4xl lg:text-5xl leading-snug text-balance">
            “A great landscape doesn’t announce itself. It draws you outside,
            slows you down, and quietly becomes the part of your home you love most.”
          </p>
          <p className="mt-10 eyebrow">— South Landscaping Studio</p>
        </div>

        <div className="mx-auto mt-20 max-w-7xl grid gap-6 sm:grid-cols-3">
          {[patio, retainingWall, aerial].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-frame">
              <img src={src} alt="Featured landscape work" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" width={1280} height={1280}/>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 px-6 lg:px-10 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>From Our Clients</SectionLabel>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl max-w-3xl">
            Trusted by homeowners who care deeply about their property.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[
              {
                q: "Just a fantastic job and we could not be more pleased. From start to finish, Hugo cared greatly about all the finishing touches.",
                n: "Jon F.",
              },
              {
                q: "Hugo exceeded my expectations. His attention to detail and follow-up is a rare find these days with any home project.",
                n: "Tina M.",
              },
              {
                q: "Hugo and his team did an excellent job on our backyard pool project. We worked together over the course of an extensive nine month project and are very happy with the outcome.",
                n: "Joe M.",
              },
              {
                q: "I chose South Landscaping based on the overwhelmingly positive reviews and Hugo’s professionalism. I am completely satisfied and wholeheartedly recommend South Landscaping.",
                n: "Don A.",
              },
            ].map((t) => (
              <figure key={t.n} className="bg-background p-10 rounded-lg shadow-soft">
                <blockquote className="font-display text-xl leading-relaxed text-foreground/90">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-medium">{t.n}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img src={aerial} alt="Aerial view of luxury landscaped estate" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1920} height={1080}/>
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-32 lg:py-44 text-center text-cream">
          <span className="eyebrow text-cream/60">Begin your project</span>
          <h2 className="mt-8 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Let’s shape something <em className="italic">enduring</em> together.
          </h2>
          <p className="mt-8 text-cream/75 max-w-xl mx-auto leading-relaxed">
            We take on a limited number of design + build projects each season.
            Reach out to discuss your property and what you have in mind.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-charcoal hover:bg-white transition-colors"
            >
              Request a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-cream/50 px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-cream hover:bg-cream/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
