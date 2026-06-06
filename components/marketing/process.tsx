const steps = [
  {
    n: "01",
    title: "Entender",
    description:
      "Una semana inmersos en tu operación: entrevistas con cada área, observación de flujos, lectura de datos. Salimos con un mapa claro.",
  },
  {
    n: "02",
    title: "Diseñar",
    description:
      "Co-diseñamos el sistema con tu equipo: pantallas, flujos, permisos y reportes. Antes de construir, ya sabes cómo se va a sentir.",
  },
  {
    n: "03",
    title: "Construir",
    description:
      "Sprints semanales con demos. Tu equipo prueba cada módulo en producción real. Iteramos sobre lo que descubrimos al usarlo.",
  },
  {
    n: "04",
    title: "Operar",
    description:
      "Acompañamos la adopción, capacitamos al equipo y mantenemos el sistema. El software vive contigo, no se queda estático.",
  },
];

export function Process() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            Cómo trabajamos
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Un proceso que respeta tu tiempo y tu operación.
          </h2>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-accent/40"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {step.n}
              </span>
              <h3 className="font-serif text-2xl tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
