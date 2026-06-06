import type { Metadata } from "next";
import { Process } from "@/components/marketing/process";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Cuatro fases para llevar tu operación de hojas de cálculo y procesos sueltos a un sistema digital claro y auditable.",
};

export default function ProcesoPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-6 pb-12 pt-20 text-center sm:pt-28">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
          Proceso
        </p>
        <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
          Cómo trabajamos contigo.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Un método pensado para empresas que necesitan resultados, sin
          interrumpir lo que ya está funcionando.
        </p>
      </section>
      <Process />
      <CtaBand />
    </>
  );
}
