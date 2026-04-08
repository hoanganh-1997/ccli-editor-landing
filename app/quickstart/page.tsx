import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { QuickstartContent } from "./content";

export const metadata: Metadata = {
  title: "CCLI Editor Quickstart — Install in 5 Minutes",
  description:
    "Get CCLI Editor running on your machine in under 5 minutes. Installation guide for macOS, Linux, and Windows.",
  alternates: {
    canonical: "https://ccli-editor.vercel.app/quickstart",
  },
};

export default function QuickstartPage() {
  return (
    <>
      <Nav />
      <main>
        <QuickstartContent />
      </main>
      <Footer />
    </>
  );
}
