import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-10 sm:p-16">
        <div className="absolute inset-0 bg-warm-gradient opacity-80" aria-hidden />
        <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Empecemos por entender tu operación.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Una conversación de 30 minutos para entender qué procesos te
              están costando tiempo, dinero o claridad. Sin compromiso.
            </p>
          </div>
          <Button
            render={<Link href="/contacto" />}
            size="lg"
            className="rounded-full px-7 shadow-lg shadow-primary/20"
          >
            Agendar conversación
            <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
