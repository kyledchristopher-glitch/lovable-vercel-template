import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { MapPin, Send } from "lucide-react";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-8 font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
              Tell us about your <em className="italic">property</em>.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg max-w-md">
              Share a little about your space and what you’re imagining. We’ll be in
              touch to schedule a consultation.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary"><MapPin size={16}/></span>
                <div>
                  <p className="eyebrow">Studio</p>
                  <p className="mt-1">Youngsville, North Carolina</p>
                  <p className="text-sm text-muted-foreground">Serving the greater NC Triangle &amp; surrounding areas</p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <p className="eyebrow">Consultations</p>
                <p className="mt-2 leading-relaxed">
                  Use the project form to share your property details, goals, and preferred timing.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We review every inquiry and follow up to schedule the next step.
                </p>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-lg shadow-frame hidden lg:block">
              <img src={garden} alt="Garden detail" className="h-72 w-full object-cover" loading="lazy" width={1280} height={1280}/>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-card border border-border rounded-lg p-8 lg:p-12 shadow-frame"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="mx-auto h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Send size={20} className="text-foreground"/>
                  </div>
                  <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
                  <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                    We’ve received your note and will reach out within one business day to schedule your consultation.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl">Request a Consultation</h2>
                  <p className="mt-2 text-sm text-muted-foreground">All fields are optional except name and contact.</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                    <Field label="Property location" name="location" placeholder="City, NC" />
                  </div>

                  <div className="mt-6">
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Project type</label>
                    <select className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Landscape Design</option>
                      <option>Hardscape (Patio, Walkway, Walls)</option>
                      <option>Outdoor Living Space</option>
                      <option>Garden / Planting Installation</option>
                      <option>Lawn Renovation / Sod</option>
                      <option>Drainage Solutions</option>
                      <option>Maintenance</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tell us about your project</label>
                    <textarea rows={5} className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="A few notes about your property and what you’re envisioning..." />
                  </div>

                  <button type="submit" className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-background hover:bg-foreground/90 transition">
                    Send Request <Send size={14}/>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && <span className="text-accent-foreground"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
