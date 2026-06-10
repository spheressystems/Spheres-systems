import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ClipboardList,
  Workflow,
  Building,
} from "lucide-react";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "TasaERP — ERP a la medida para tasadurías",
  description:
    "Sistema construido para resolver el problema específico de la industria de la tasaduría. Procesos, peritos y entregables bajo un mismo techo.",
};

const features = [
  {
    icon: Workflow,
    title: "Diseñado para tasadurías",
    description:
      "No es un ERP genérico al que le pegas un módulo. Está construido a partir de los procesos reales de una tasaduría — del expediente al entregable final.",
  },
  {
    icon: ClipboardList,
    title: "Procesos simples, rápidos",
    description:
      "Lo que antes vivía en hojas de cálculo, archivos sueltos y cabezas de personas, ahora vive en un solo lugar — al alcance del equipo entero.",
  },
  {
    icon: Building,
    title: "Hecho a su medida",
    description:
      "Construido alrededor de sus necesidades específicas: sus tipos de avalúo, sus flujos de aprobación, sus formatos de entrega. No tiene que cambiar su forma de trabajar para usarlo.",
  },
];

export default function TasaErpPage() {
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
            En operación · Industria de tasaduría
          </p>

          <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <em className="font-serif italic">TasaERP</em>
          </h1>
          <p className="mt-4 max-w-2xl text-balance font-serif text-2xl leading-snug text-foreground/90 sm:text-3xl">
            ERP a la medida para tasadurías.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Diseñado y desarrollado para los procesos específicos de una
            tasaduría. Resuelve un problema que ningún software genérico
            entiende — porque no fue hecho para esa industria.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            Qué hace TasaERP
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            La operación de una tasaduría, sin fricción.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
