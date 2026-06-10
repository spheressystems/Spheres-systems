import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/marketing/portfolio/projects-grid";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Sistemas a la medida que hemos construido y estamos construyendo: KGA, LEGION y TasaERP.",
};

export default function PortafolioPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-6 pb-12 pt-20 text-center sm:pt-28">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
          Proyectos
        </p>
        <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
          Sistemas que ya viven dentro de una operación real.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          No vendemos plantillas. Cada proyecto que ves aquí nació de una
          operación específica, con sus propias reglas, sus propios procesos y
          su propia gente.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <ProjectsGrid />
      </section>

      <CtaBand />
    </>
  );
}
