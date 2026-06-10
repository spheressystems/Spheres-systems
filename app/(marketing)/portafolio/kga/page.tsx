import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { KgaQuotation } from "@/components/marketing/portfolio/kga-quotation";

export const metadata: Metadata = {
  title: "Proyecto KGA — ERP multirramo a la medida",
  description:
    "Propuesta de Spheres Systems para KGA: un ERP multirramo a la medida, auditable y con IA siempre activa para que el dueño tome decisiones en tiempo real.",
};

const capabilities = [
  {
    icon: Layers,
    title: "Multirramo, multi-compañía",
    description:
      "Diseñado para brokers que operan con múltiples aseguradoras a la vez. Cada póliza, cada ramo y cada compañía se ven dentro de un mismo flujo.",
  },
  {
    icon: Brain,
    title: "IA siempre activa",
    description:
      "Asistente integrado que ayuda con cobranza, emisiones y seguimiento. Analiza la operación en tiempo real y avisa antes de que algo se vuelva un problema.",
  },
  {
    icon: LineChart,
    title: "Decisiones con contexto",
    description:
      "Dashboards por rol — dueño, gerente, asesor, asistente — para que cada quien vea lo que necesita ver y entienda de dónde están saliendo los resultados.",
  },
  {
    icon: ShieldCheck,
    title: "Operación auditable",
    description:
      "Cada acción queda registrada. Trazabilidad completa de pólizas, comisiones y procesos para auditorías y para entender qué pasó cuando algo no salió como esperabas.",
  },
];

export default function KgaPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-gradient" aria-hidden />
        <div className="absolute inset-0 bg-grain opacity-40" aria-hidden />

        <div className="relative mx-auto w-full max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
          <Link
            href="/portafolio"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver a proyectos
          </Link>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Propuesta en cotización · Roberto Karam
          </div>

          <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Proyecto <em className="font-serif italic">KGA</em>
          </h1>
          <p className="mt-4 max-w-2xl text-balance font-serif text-2xl leading-snug text-foreground/90 sm:text-3xl">
            Un ERP a la medida para una promotoría broker multirramo.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Pensado para una operación que mueve varias compañías de seguros al
            mismo tiempo, donde cada decisión necesita contexto real, cada
            proceso necesita estar bajo control y el dueño necesita entender —
            en tiempo real — qué está pasando en su negocio.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
              El problema
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Una promotoría multirramo opera en varias capas al mismo tiempo.
            </h2>
          </div>
          <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
            <p>
              Varias compañías de seguros, varios ramos, varios roles dentro de
              la misma operación. Cada póliza, cada comisión y cada
              seguimiento vive en un sistema distinto — o peor, en hojas de
              cálculo y en la cabeza de quien lleva la cuenta.
            </p>
            <p>
              Para KGA, la prioridad es{" "}
              <span className="text-foreground">consolidar todo bajo un mismo techo</span>:
              compañías, ramos y roles dentro de una sola operación, conectada
              y auditable. Que el dueño pueda mirar el negocio entero sin
              perseguir información por cuatro lados.
            </p>
            <p>
              Por encima de eso, IA siempre activa que simplifica lo que hoy
              toma horas: cobranza, emisiones, seguimiento, análisis de
              resultados. La información llega sola.
            </p>
            <p className="rounded-xl border border-border/60 bg-background/60 p-4 text-sm">
              <span className="text-foreground">Llegamos con ventaja.</span>{" "}
              El conocimiento profundo de cómo opera una promotoría ya está en
              casa — lo construimos desarrollando y operando LEGION. No
              empezamos de cero contigo: arrancamos con el músculo ya formado.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            Qué incluye el sistema
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Cuatro pilares, una sola operación.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="group flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border hover:shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.3)]"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border/60 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-accent">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {capability.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <KgaQuotation />

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-10 sm:p-16">
          <div className="absolute inset-0 bg-warm-gradient opacity-80" aria-hidden />
          <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                Roberto, empecemos por el Discovery.
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Una primera sesión contigo y tu equipo. Salimos con un blueprint
                operativo y el rango cerrado del desarrollo. Sin compromiso para
                seguir adelante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
