import type { ReactNode } from "react";

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`label text-muted-foreground ${className}`}>{children}</span>;
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary text-xs leading-none">✳</span>
      <span className="label text-foreground/80">{children}</span>
    </div>
  );
}

export function TalkButton({ tone = "sand" }: { tone?: "sand" | "ink" }) {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 select-none"
      aria-label="Let's talk"
    >
      <span
        className={`label pl-4 pr-3 py-3 border ${
          tone === "ink" ? "border-border text-ink-foreground" : "border-border text-foreground"
        }`}
      >
        Let&apos;s talk
      </span>
      <span className="grid h-10 w-14 place-items-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
          <path d="M1 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </a>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="display text-2xl md:text-4xl text-foreground/85">
            {item}
            <span className="text-primary ml-10">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
