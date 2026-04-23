import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40">
              <span className="font-display text-lg">S</span>
            </span>
            <span className="font-display text-xl tracking-wide">South Landscaping</span>
          </div>
          <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
            A landscape design and build studio crafting refined outdoor environments
            across Youngsville and the greater North Carolina region.
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
          <p className="eyebrow text-cream/50">Get in touch</p>
          <ul className="mt-5 space-y-3 text-cream/80">
            <li>Youngsville, NC</li>
            <li>Serving the greater Triangle &amp; surrounding NC</li>
            <li><a href="mailto:hello@southlandscaping.co" className="hover:text-cream">hello@southlandscaping.co</a></li>
            <li><a href="tel:+19195550175" className="hover:text-cream">(919) 555-0175</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} South Landscaping. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Designed with care in North Carolina</p>
        </div>
      </div>
    </footer>
  );
}
