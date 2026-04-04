import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { QuickstartContent } from "./content";

export const metadata: Metadata = {
  title: "Quickstart — CCLI Editor",
  description:
    "Get CCLI Editor running on your machine in under 5 minutes. Installation guide for macOS, Linux, and Windows.",
};

export default function QuickstartPage() {
  return (
    <>
      <Nav />
      <QuickstartContent />
      <Footer />
    </>
  );
}
