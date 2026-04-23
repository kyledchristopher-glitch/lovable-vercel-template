import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";
import craft from "@/assets/craft.jpg";
import outdoorLiving from "@/assets/outdoor-living.jpg";
import walkway from "@/assets/walkway.jpg";
import garden from "@/assets/garden.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      {/* HERO */}
      <section className="relative h-[80svh] overflow-hidden">
        <img src={craft} alt="Hands placing natural stone" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" width={1280} height={1600}/>
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-10 pb-24 text-white">
          <span className="eyebrow text-white/70 animate-rise">About the Studio</span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance animate-rise delay-100">
            A small studio doing <em className="italic">careful, lasting</em> work.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 lg:px-10 py-28 lg:py-40">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-8 font-display text-3xl lg:text-4xl leading-tight">
              Rooted in Youngsville. Working across North Carolina.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              South Landscaping was founded on a simple idea: the outdoors should
              feel like the most considered part of your home, not an afterthought.
            </p>
            <p>
              We are a design and build studio working at the intersection of
              landscape architecture and craft. Every project, from a refined front
              entry to a complete outdoor living build, is approached with the same
              respect for site, material, and the way a place is actually used.
            </p>
            <p>
              We believe in building less, but building it well.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/40 px-6 lg:px-10 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>How We Work</SectionLabel>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              { n: "01", t: "Site First", d: "We start by listening — to the land, the light, and how you want to live outdoors." },
              { n: "02", t: "Designed, Then Built", d: "Every project begins with a clear, considered plan before the first stone is set." },
              { n: "03", t: "Made to Last", d: "We choose materials and plants that age beautifully, so your landscape only improves." },
            ].map((v) => (
              <div key={v.n} className="border-t border-foreground/20 pt-8">
                <p className="font-display text-2xl text-muted-foreground">{v.n}</p>
                <h3 className="mt-6 font-display text-3xl">{v.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-6 lg:px-10 py-28">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-3">
          <img src={outdoorLiving} alt="Outdoor living" className="h-80 w-full object-cover rounded shadow-frame" loading="lazy" width={1600} height={1200}/>
          <img src={walkway} alt="Stone walkway" className="h-80 w-full object-cover rounded shadow-frame" loading="lazy" width={1280} height={1600}/>
          <img src={garden} alt="Garden detail" className="h-80 w-full object-cover rounded shadow-frame" loading="lazy" width={1280} height={1280}/>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-5xl bg-charcoal text-cream rounded-lg p-14 lg:p-20 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-balance">Let’s talk about your property.</h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-charcoal">
            Request a Consultation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
