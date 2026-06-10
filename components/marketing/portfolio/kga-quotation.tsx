"use client";

import { motion } from "motion/react";
import { Check, Compass, Wrench, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface QuotationStage {
  number: string;
  icon: LucideIcon;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  includes: string[];
}

const stages: QuotationStage[] = [
  {
    number: "01",
    icon: Compass,
    name: "Discovery",
    price: "$50,000 MXN",
    priceNote: "Pago único",
    description:
      "Nos sentamos contigo y tu equipo a mapear cada proceso real. Salimos con un blueprint operativo que define exactamente qué hay que eficientar y cómo.",
    includes: [
      "Sesiones con cada rol clave de la operación",
      "Mapeo de procesos actuales y puntos de fricción",
      "Definición de integraciones requeridas (compañías, plataformas)",
      "Blueprint operativo + rango cerrado para la etapa de desarrollo",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    name: "Desarrollo",
    price: "$150,000 – $300,000 MXN",
    priceNote: "Rango definido al cerrar Discovery",
    description:
      "Construcción completa del sistema: ERP multirramo conectado a las plataformas que ya usan, con IA embebida en cobranza, emisiones y operación.",
    includes: [
      "Desarrollo del ERP multirramo a la medida",
      "Integraciones con plataformas de compañías de seguros",
      "Asistente IA para cobranza, emisiones y seguimiento",
      "Compra y configuración del servidor productivo",
      "Contratos, accesos y entrega operativa",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    name: "Mantenimiento y servicio",
    price: "$20,000 MXN",
    priceNote: "Mensual",
    description:
      "El sistema sigue vivo. Monitoreamos servidores, atendemos incidencias y la IA sigue trabajando contigo todos los días.",
    includes: [
      "Operación y monitoreo del servidor",
      "Asistente IA siempre activo",
      "Mejoras y ajustes continuos al ERP",
      "Soporte directo con el equipo técnico",
    ],
  },
];

export function KgaQuotation() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 max-w-2xl"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Propuesta económica — KGA
        </div>
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
          Una propuesta clara, en tres etapas.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Construida para que sepas exactamente en qué inviertes, qué recibes y
          cuándo. Sin sorpresas y sin letra chica.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              className="group relative flex flex-col gap-6 rounded-2xl border border-border/70 bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border hover:shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.3)]"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border/60 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-accent">
                  <Icon className="size-5" />
                </div>
                <span className="font-serif text-2xl text-muted-foreground/40">
                  {stage.number}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl tracking-tight text-foreground">
                  {stage.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="font-serif text-3xl tracking-tight text-foreground">
                  {stage.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {stage.priceNote}
                </p>
              </div>

              <ul className="space-y-2.5">
                {stage.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-xs text-muted-foreground/80"
      >
        Precios en pesos mexicanos. No incluyen IVA. Propuesta válida por 30
        días naturales a partir de la fecha de envío.
      </motion.p>
    </section>
  );
}
