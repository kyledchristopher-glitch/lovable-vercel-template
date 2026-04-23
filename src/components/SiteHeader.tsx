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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
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

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors ${
              solid ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
              } drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] transition-all ${
            solid
              ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
              : "border-white text-white hover:bg-white hover:text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          }`}
        >
          Request Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full border p-2 ${solid ? "border-foreground/20 text-foreground" : "border-white/40 text-white"}`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-sm uppercase tracking-[0.18em]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-background"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
