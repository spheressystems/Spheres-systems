import type { Metadata } from "next";
import { Services } from "@/components/marketing/services";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Sistemas digitales, CRM, ERP y automatización a la medida — diseñados a partir de tu operación real.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-6 pb-12 pt-20 text-center sm:pt-28">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
          Servicios
        </p>
        <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
          Construimos software que cabe en tu operación.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Cada empresa tiene su forma de operar. Nuestros sistemas se diseñan
          para encajar con esa forma, no para reemplazarla con una plantilla.
        </p>
      </section>
      <Services />
      <CtaBand />
    </>
  );
}
