import { useEffect, useRef, useState } from "react";
import { Label, SectionTag, TalkButton } from "./primitives";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

/* ---------------------------------------------------------------- nav */

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Project", href: "#work", count: "(6)" },
  { label: "Studio", href: "#services" },
  { label: "Journal", href: "#journal" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="grid grid-cols-2 items-center gap-4 px-5 py-4 md:grid-cols-4 md:px-10">
        <a href="#top" className="display text-xl tracking-[0.25em] text-bone">
          Noir
        </a>
        {NAV.slice(1).map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="label hidden text-bone/90 transition-colors hover:text-primary md:block md:text-center last:md:text-right"
          >
            {item.label}
            {item.count ? <sup className="ml-1 text-primary">{item.count}</sup> : null}
          </a>
        ))}
        <a href="#contact" className="label justify-self-end text-bone md:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}

/* --------------------------------------------------------------- hero */

function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toUpperCase(),
      );
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return <span className="label text-foreground/70">{time ?? "--:--"}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="ticks pointer-events-none absolute inset-y-0 left-0 w-4 opacity-60" />
      <div className="ticks pointer-events-none absolute inset-y-0 right-0 w-4 opacity-60" />

      <div className="absolute right-6 top-1/4 hidden w-16 gap-1 md:flex md:flex-col">
        <img src={work3} alt="Studio work" loading="lazy" className="h-14 w-full object-cover" />
        <img src={work1} alt="Studio work" className="h-14 w-full object-cover" />
        <img src={work2} alt="Studio work" loading="lazy" className="h-14 w-full object-cover" />
      </div>

      <div className="flex min-h-screen flex-col justify-end px-6 pb-16 pt-28 md:px-14">
        <div className="mb-4">
          <SectionTag>Creative Digital Agency</SectionTag>
        </div>
        <h1 className="display max-w-5xl text-[13vw] leading-[0.85] md:text-[7.2vw]">
          We design digital experiences people remember
        </h1>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="display text-lg tracking-[0.3em]">Noir</div>
            <div className="label mt-2 text-foreground/70">4.9 / 5.0</div>
            <div className="mt-1 text-primary">★★★★★</div>
            <div className="label mt-2 text-foreground/70">Trusted by 480+ clients</div>
          </div>
          <div className="md:justify-self-end md:text-right">
            <p className="label max-w-sm leading-[1.9] text-foreground/85">
              Every detail has a purpose. Every idea has a point of view. Every project is built to
              make an impact that people remember.
            </p>
            <div className="mt-6 flex md:justify-end">
              <TalkButton />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border px-6 py-3 md:px-14">
        <Label>[Creative Digital Studio]</Label>
        <Label className="hidden md:inline">[Brand • Digital • Motion]</Label>
        <Label className="hidden md:inline">[Est. 2026]</Label>
        <Clock />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- intro */

export function Intro() {
  return (
    <section id="intro" className="bg-ink px-6 py-28 text-ink-foreground md:px-14 md:py-40">
      <div className="mb-14 flex items-baseline justify-between">
        <SectionTag>Intro</SectionTag>
        <Label>Noir Creative Studio</Label>
      </div>
      <p className="display max-w-6xl text-[6vw] leading-[1.05] md:text-[3vw]">
        Noir was built for brands ready to think differently, move boldly, and create digital
        experiences that connect with people, inspire action, build lasting impressions, and turn
        bold ideas into distinctive identities that stand out and matter.
      </p>
      <div className="mt-16 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
        {[
          ["Design", "with purpose"],
          ["Build", "with precision"],
          ["Launch", "with impact"],
        ].map(([a, b]) => (
          <div key={a}>
            <div className="display text-3xl">{a}</div>
            <div className="label mt-2 text-muted-foreground">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- work */

const PROJECTS = [
  { name: "Neuro Vision", img: work1, year: "2026", type: "Brand · Digital" },
  { name: "Signal Form", img: work2, year: "2025", type: "Identity · Motion" },
  { name: "Lumen Digital", img: work3, year: "2025", type: "Website · UX" },
  { name: "After Dark", img: work4, year: "2024", type: "Campaign · 3D" },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-14 md:py-36">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionTag>Work</SectionTag>
        <h2 className="display max-w-2xl text-3xl md:text-5xl">
          Noir creates digital experiences that make brands stand out boldly.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p) => (
          <article key={p.name} className="group">
            <div className="relative overflow-hidden bg-ink">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={912}
                height={1200}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="label absolute left-3 top-3 bg-primary px-2 py-1 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Our project
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <h3 className="display text-xl">{p.name}</h3>
              <Label>{p.year}</Label>
            </div>
            <Label>{p.type}</Label>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- stats */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="display text-[16vw] leading-none md:text-[9vw]">
      {value}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="bg-ink px-6 py-24 text-ink-foreground md:px-14">
      <div className="mb-10 flex items-baseline justify-between">
        <SectionTag>Impact</SectionTag>
        <Label>Bold digital impact</Label>
      </div>
      <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-3">
        <div>
          <Counter to={98} suffix="%" />
          <Label>Client retention</Label>
        </div>
        <div>
          <Counter to={480} suffix="+" />
          <Label>Brands shaped</Label>
        </div>
        <div>
          <Counter to={12} />
          <Label>Years of craft</Label>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- services */

const SERVICES = [
  {
    n: "01",
    title: "Brand Identity",
    body: "Strategy, positioning, and visual systems designed to make your brand distinctive and memorable.",
    tags: ["Branding", "Strategy", "Identity", "Art Direction"],
  },
  {
    n: "02",
    title: "Website",
    body: "Modern, responsive, and high-impact digital experiences designed to engage people and move brands forward.",
    tags: ["Website", "UX/UI", "Framer", "Digital", "Webflow"],
  },
  {
    n: "03",
    title: "Motion Design",
    body: "Cinematic motion, animation, and visual stories that bring ideas to life and create stronger connections.",
    tags: ["Motion", "Animation", "3D", "Video", "Campaign"],
  },
  {
    n: "04",
    title: "Creative Direction",
    body: "From concept to execution, we shape visual languages that give every brand a distinctive point of view.",
    tags: ["Concept", "Art Direction", "Content"],
  },
  {
    n: "05",
    title: "Digital Experience",
    body: "Immersive digital experiences that combine design, technology, and interaction to leave a lasting impression.",
    tags: ["Product", "Interaction", "Systems", "Prototyping"],
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-14 md:py-36">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Our Services</SectionTag>
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-6xl">What we do</h2>
          <p className="label mt-3 text-foreground/75">
            We build bold brands that matter most.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="group grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:bg-ink hover:text-ink-foreground md:grid-cols-12 md:px-4"
          >
            <Label className="md:col-span-1">{s.n}</Label>
            <h3 className="display text-3xl md:col-span-4 md:text-4xl">{s.title}</h3>
            <p className="label max-w-md leading-[1.9] text-foreground/80 md:col-span-4 group-hover:text-ink-foreground/80">
              {s.body}
            </p>
            <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
              {s.tags.map((t) => (
                <span key={t} className="label border border-border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ process */

const PROCESS = [
  ["Discover", "Research and audits to understand the brand, audience, and opportunity."],
  ["Strategy", "Positioning, direction, and a clear plan that gives the project purpose."],
  ["Design", "Art direction, typography, and interface craft, refined through every detail."],
  ["Develop", "Framer, Webflow, or code builds with motion, interaction, and performance."],
  ["Launch", "Rollout, handover and a partnership that continues after."],
];

export function Process() {
  return (
    <section className="bg-ink px-6 py-28 text-ink-foreground md:px-14 md:py-36">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Our Process</SectionTag>
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-6xl">How we work</h2>
          <p className="label mt-3 text-muted-foreground">
            We bring ideas to life through digital experiences.
          </p>
        </div>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-5">
        {PROCESS.map(([title, body], i) => (
          <div key={title} className="bg-ink p-6">
            <Label>{`0${i + 1}`}</Label>
            <h3 className="display mt-4 text-2xl">{title}</h3>
            <p className="label mt-4 leading-[1.9] text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ pricing */

const PLANS = [
  {
    sid: "sid — 01",
    name: "Starter",
    blurb: "For brands that need a strong creative start.",
    price: "$1.5K",
    features: ["Brand direction", "Visual identity", "Creative consultation", "One active project"],
  },
  {
    sid: "sid — 02",
    name: "Core",
    blurb: "For teams that need a reliable creative partner.",
    price: "$3K",
    features: [
      "Brand strategy & identity",
      "Web design & development",
      "Motion & interaction",
      "Creative direction",
    ],
    featured: true,
  },
  {
    sid: "sid — 03",
    name: "Signature",
    blurb: "For ambitious brands ready to build something distinct.",
    price: "$6K",
    features: [
      "Full brand strategy",
      "Identity & art direction",
      "Web design & development",
      "Motion & digital experience",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28 md:px-14 md:py-36">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Pricing</SectionTag>
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-5xl">Creative support without the limits</h2>
          <p className="label mt-3 text-foreground/75">We offer flexible creative support.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col p-7 ${
              p.featured
                ? "bg-ink text-ink-foreground"
                : "border border-border bg-bone/10 text-foreground"
            }`}
          >
            <Label>{p.sid}</Label>
            <h3 className="display mt-5 text-4xl">{p.name}</h3>
            <p className="label mt-3 leading-[1.9] text-foreground/75">{p.blurb}</p>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="display text-5xl">{p.price}</span>
              <Label>/ project</Label>
            </div>
            <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-6">
              {p.features.map((f) => (
                <li key={f} className="label flex items-start gap-3">
                  <span className="text-primary">✳</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TalkButton tone={p.featured ? "ink" : "sand"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- testimonials */

const NOTES = [
  ["“Noir found the right direction for our brand before we could see it.”", "Alex Morgan", "Creative Director"],
  ["“Clear, distinctive, and exactly what our brand really needed.”", "Maya Reed", "Founder, Lumen"],
  ["“Every detail felt thoughtful, sharp, purposeful, and perfectly considered.”", "Jordan Lee", "Brand Director"],
];

export function Notes() {
  return (
    <section className="bg-ink px-6 py-28 text-ink-foreground md:px-14">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Partner Notes</SectionTag>
        <h2 className="display max-w-xl text-3xl md:text-5xl">
          They found the potential our brand needed.
        </h2>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-3">
        {NOTES.map(([quote, name, role]) => (
          <figure key={name} className="bg-ink p-7">
            <blockquote className="display text-2xl leading-[1.15]">{quote}</blockquote>
            <figcaption className="mt-8">
              <div className="label text-ink-foreground">{name}</div>
              <div className="label text-muted-foreground">{role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- faq */

const FAQS = [
  [
    "What creative services does Noir offer for modern brands?",
    "We offer strategy, identity, digital design, Framer development, motion, and creative direction for ambitious brands.",
  ],
  [
    "How does a new project with Noir begin?",
    "It starts with a short call, a written brief, and a scoped proposal with timeline and investment.",
  ],
  [
    "How long does a typical Noir project take to complete?",
    "Identity work runs four to six weeks. Full brand and website builds usually take eight to twelve.",
  ],
  [
    "Does Noir work with startups and established teams?",
    "Yes — from first-round startups to established in-house teams that need an outside creative partner.",
  ],
  [
    "Can Noir elevate and refine our existing brand?",
    "Often the strongest work is an evolution: we sharpen what already works and rebuild what does not.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-6 py-28 md:px-14 md:py-36">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Frequently Asked</SectionTag>
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-5xl">Questions worth asking</h2>
          <p className="label mt-3 text-foreground/75">
            Clear answers for better creative decisions.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={open === i}
            >
              <span className="display text-xl md:text-2xl">{q}</span>
              <span className="text-primary text-2xl leading-none">{open === i ? "−" : "+"}</span>
            </button>
            {open === i ? (
              <p className="label max-w-2xl pb-6 leading-[1.9] text-foreground/80">{a}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ journal */

const POSTS = [
  ["Creative Culture · 06 min", "How strategy shapes stronger and more memorable brand identities"],
  ["Brand Thinking · 05 min", "Building digital experiences that people connect with and remember"],
  ["Design Systems · 07 min", "Why great design always starts with a clear creative idea"],
];

export function Journal() {
  return (
    <section id="journal" className="bg-ink px-6 py-28 text-ink-foreground md:px-14">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <SectionTag>Journal</SectionTag>
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-5xl">Ideas, insights &amp; creative perspectives</h2>
          <p className="label mt-3 text-muted-foreground">
            Notes from the studio, published when we have something worth saying.
          </p>
        </div>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-3">
        {POSTS.map(([meta, title]) => (
          <article key={title} className="group bg-ink p-7">
            <Label>{meta}</Label>
            <h3 className="display mt-6 text-2xl leading-[1.1] transition-colors group-hover:text-primary">
              {title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ contact/footer */

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-14 md:py-36">
      <h2 className="display max-w-5xl text-[10vw] leading-[0.9] md:text-[6vw]">
        Let’s make your next big idea impossible to miss.
      </h2>
      <div className="mt-12">
        <TalkButton />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-ink-foreground md:px-14">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <div className="display text-3xl tracking-[0.2em]">Brand Noir</div>
          <p className="label mt-4 max-w-xs leading-[1.9] text-muted-foreground">
            Building bold brands, digital experiences, and ideas that stay with people.
          </p>
        </div>
        <div>
          <Label>Navigate</Label>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Works", "Journal", "Get in touch"].map((l) => (
              <li key={l}>
                <a href="#top" className="label transition-colors hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Subscribe</Label>
          <form
            className="mt-4 flex border border-border"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="YOUR EMAIL"
              className="label w-full bg-transparent px-3 py-3 outline-none placeholder:text-muted-foreground"
            />
            <button className="label bg-primary px-4 text-primary-foreground">Subscribe</button>
          </form>
          <div className="label mt-8 text-muted-foreground">Independent studio · Worldwide</div>
          <a href="mailto:hello@noir.studio" className="label mt-2 block hover:text-primary">
            hello@noir.studio
          </a>
        </div>
      </div>
      <div className="label mt-16 border-t border-border pt-6 text-muted-foreground">
        © {new Date().getFullYear()} Noir Studio — All rights reserved.
      </div>
    </footer>
  );
}
