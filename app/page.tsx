import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { TerminalDemo } from "@/components/terminal-demo";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Workflow } from "@/components/workflow";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <TerminalDemo />
      <Features />
      <Comparison />
      <Workflow />
      <Waitlist />
      <Footer />
    </>
  );
}
