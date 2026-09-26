import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/noir/primitives";
import {
  Contact,
  Faq,
  Footer,
  Hero,
  Impact,
  Intro,
  Journal,
  Nav,
  Notes,
  Pricing,
  Process,
  Services,
  Work,
} from "@/components/noir/sections";

const title = "NOIR — Creative Digital Agency";
const description =
  "NOIR is an independent creative studio building bold brands, digital experiences and motion that people remember.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Marquee items={["Brand systems that scale", "Digital systems that connect", "Motion systems that engage", "Design systems that last"]} />
        <Impact />
        <Services />
        <Process />
        <Pricing />
        <Notes />
        <Faq />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
