import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionLabel } from "@/components/SectionLabel";
import { AlertCircle, LoaderCircle, MapPin, Send } from "lucide-react";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

type ConsultationPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  message: string;
};

const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((formData: FormData): ConsultationPayload => ({
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    projectType: String(formData.get("projectType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  }))
  .handler(async ({ data }) => {
    if (!data.name || !data.email) {
      throw new Error("Name and email are required.");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      throw new Error("Missing email configuration. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.");
    }

    const lines = [
      "New consultation request from South Landscaping Website",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Property Location: ${data.location || "Not provided"}`,
      `Project Type: ${data.projectType || "Not provided"}`,
      "",
      "Project Details:",
      data.message || "Not provided",
    ];

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; color: #2d2a26; line-height: 1.6;">
        <h1 style="font-family: Georgia, serif; font-size: 24px; margin-bottom: 16px;">New Consultation Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
        <p><strong>Property Location:</strong> ${escapeHtml(data.location || "Not provided")}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(data.projectType || "Not provided")}</p>
        <p><strong>Project Details:</strong></p>
        <p>${escapeHtml(data.message || "Not provided").replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `South Landscaping <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject: "New Consultation Request from South Landscaping Website",
        text: lines.join("\n"),
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Unable to send consultation request: ${detail}`);
    }

    return { ok: true };
  });

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-8 font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
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
              onSubmit={async (e) => {
                e.preventDefault();
                setPending(true);
                setError(null);
                try {
                  await submitConsultation({ data: new FormData(e.currentTarget) });
                  setSubmitted(true);
                  e.currentTarget.reset();
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
                } finally {
                  setPending(false);
                }
              }}
              className="rounded-2xl border border-border bg-card p-8 shadow-frame lg:p-12"
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
                  <p className="mt-2 text-sm text-muted-foreground">Share a few details and we will follow up to schedule the next step.</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                    <Field label="Property Location" name="location" placeholder="City, NC" />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="projectType" className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Project Type</label>
                    <select id="projectType" name="projectType" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-0">
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
                    <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tell Us About Your Project</label>
                    <textarea id="message" name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-0" placeholder="A few notes about your property and what you’re envisioning..." />
                  </div>

                  {error ? (
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-destructive/25 bg-destructive/8 p-4 text-sm text-foreground">
                      <AlertCircle size={18} className="mt-0.5 shrink-0 text-destructive" />
                      <p>{error}</p>
                    </div>
                  ) : null}

                  <button type="submit" disabled={pending} className="button-base button-primary mt-10 disabled:cursor-not-allowed disabled:opacity-70">
                    {pending ? <LoaderCircle size={14} className="animate-spin" /> : <Send size={14}/>}
                    {pending ? "Sending Request" : "Send Request"}
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
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-0"
      />
    </div>
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
