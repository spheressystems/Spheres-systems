import { Hero } from "@/components/marketing/hero";
import { Services } from "@/components/marketing/services";
import { Process } from "@/components/marketing/process";
import { Value } from "@/components/marketing/value";
import { CtaBand } from "@/components/marketing/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Value />
      <CtaBand />
    </>
  );
}
