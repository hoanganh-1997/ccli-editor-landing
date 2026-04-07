import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TerminalDemo } from "@/components/terminal-demo";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Comparison } from "@/components/comparison";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TerminalDemo />
      <Features />
      <Stats />
      <Comparison />
      <Waitlist />
      <Footer />
    </>
  );
}
