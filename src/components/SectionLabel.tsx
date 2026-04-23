import type * as React from "react";
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-foreground/60">
      <span className="h-px w-8 bg-foreground/40" />
      <span className="eyebrow text-foreground/60">{children}</span>
    </div>
  );
}
