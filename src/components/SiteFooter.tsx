import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-2xl border border-white/10 bg-[#07120d] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <img
              src="/sl-grading-logo-color.png"
              alt="S.L. & Grading LLC"
              className="w-[180px] max-w-full"
            />
          </div>
          <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
            S.L. and Grading LLC crafts refined outdoor environments across Youngsville
            and the greater North Carolina region.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-cream/50">Studio</p>
          <ul className="mt-5 space-y-3 text-cream/80">
            <li><Link to="/about" className="hover:text-cream">About</Link></li>
            <li><Link to="/services" className="hover:text-cream">Services</Link></li>
            <li><Link to="/projects" className="hover:text-cream">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-cream/50">Service Area</p>
          <ul className="mt-5 space-y-3 text-cream/80">
            <li>Youngsville, NC</li>
            <li>Serving the greater Triangle &amp; surrounding NC</li>
            <li>Landscape design, hardscaping, gardens, and outdoor living</li>
            <li><Link to="/contact" className="hover:text-cream">Request a consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-cream/50 sm:flex-row sm:text-left lg:px-10">
          <p>© {new Date().getFullYear()} S.L. and Grading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
