import { Compass, LayoutTemplate, Activity } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Diagnóstico operativo",
    description:
      "Mapeamos cada proceso, departamento y punto de fricción antes de tocar una sola línea de código. El sistema se construye a partir de tu operación real, no de una plantilla.",
  },
  {
    icon: LayoutTemplate,
    title: "Diseño de sistemas a la medida",
    description:
      "CRMs, ERPs, portales internos o integraciones — diseñados para ser intuitivos, modulares y fáciles de evolucionar conforme cambia tu negocio.",
  },
  {
    icon: Activity,
    title: "Automatización auditable",
    description:
      "Cada acción queda registrada y revisable. Tu equipo gana velocidad sin perder visibilidad de lo que pasa en cada paso del proceso.",
  },
];

export function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
          Lo que hacemos
        </p>
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
          Tres formas de poner orden y tecnología a tu empresa.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group relative flex flex-col gap-6 rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.3)]"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border/60 transition-colors group-hover:bg-accent">
                <Icon className="size-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
