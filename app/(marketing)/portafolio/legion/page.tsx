import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Activity,
  Users,
  Target,
  GitBranch,
} from "lucide-react";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "LEGION — ERP para Promotorías de Seguros Monterrey",
  description:
    "Sistema operado para Promotorías de Seguros Monterrey. Una sola fuente de verdad para promotores, gerentes, asesores y reclutadores.",
};

const features = [
  {
    icon: Users,
    title: "Cada rol en su lugar",
    description:
      "Promotor, gerente, desarrollador, asistente, asesor, reclutador. Cada rol tiene su vista, sus permisos y sus responsabilidades claras dentro del mismo sistema.",
  },
  {
    icon: Activity,
    title: "Actividad medible",
    description:
      "Cada persona puede ver — y demostrar — su actividad real: contactos, citas, pólizas, seguimientos. Sin hojas de cálculo paralelas.",
  },
  {
    icon: Target,
    title: "Resultados con contexto",
    description:
      "Los resultados no son un número suelto. Se ven en relación con la actividad que los produjo, los responsables y los procesos que los habilitaron.",
  },
  {
    icon: GitBranch,
    title: "De dónde sale cada resultado",
    description:
      "Trazabilidad completa: qué reclutador trajo a qué asesor, qué asesor cerró qué póliza, qué gerente impulsó qué resultado. La cadena entera, siempre visible.",
  },
];

export default function LegionPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" aria-hidden />
        <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />

        <div className="relative mx-auto w-full max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
          <Link
            href="/portafolio"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver a proyectos
          </Link>

          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            En operación · Promotorías de Seguros Monterrey
          </p>

          <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <em className="font-serif italic">LEGION</em>
          </h1>
          <p className="mt-4 max-w-2xl text-balance font-serif text-2xl leading-snug text-foreground/90 sm:text-3xl">
            ERP a la medida para una promotoría de seguros.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Diseñado específicamente para los procesos de Promotorías de Seguros
            Monterrey. Lleva, de manera completa, las relaciones entre cada rol
            que mueve la operación — y deja claro de dónde está saliendo cada
            resultado.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            Qué hace LEGION
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Una sola fuente de verdad para toda la promotoría.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border hover:shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.3)]"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border/60 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-accent">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
