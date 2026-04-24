import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        <Link to="/" className="group flex items-center gap-3 focus-visible:rounded-full focus-visible:ring-0">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              solid ? "border-foreground/20 text-foreground" : "border-white/40 text-white"
            }`}
          >
            <span className="font-display text-lg leading-none">S</span>
          </span>
          <span
            className={`font-display text-lg tracking-wide ${solid ? "text-foreground" : "text-white"}`}
          >
            South Landscaping
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors ${
              solid
                ? "text-foreground/70 hover:text-foreground data-[status=active]:text-foreground"
                : "text-white/80 hover:text-white data-[status=active]:text-white"
              } drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)] focus-visible:rounded-full focus-visible:ring-0`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`button-base hidden lg:inline-flex ${
            solid
              ? "button-primary"
              : "button-ghost-light shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          }`}
        >
          Request a Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full border p-2.5 ${solid ? "border-foreground/20 text-foreground" : "border-white/40 text-white"}`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="flex flex-col gap-5 px-5 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-1 py-1 text-sm uppercase tracking-[0.18em] text-foreground/80 data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-base button-primary mt-2 w-full"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
