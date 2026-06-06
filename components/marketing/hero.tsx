"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-warm-gradient" aria-hidden />
      <div className="absolute inset-0 bg-grain opacity-50" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <Sparkles className="size-3.5 text-primary" />
          Diseño · construcción · operación de sistemas digitales
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Software que <em className="font-serif italic">entiende</em>
          <br className="hidden sm:block" /> tu operación.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-pretty mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Diseñamos CRMs, ERPs y herramientas internas a la medida de cada
          empresa. Cada proceso queda <strong className="text-foreground/90 font-medium">automatizado, revisable y auditable</strong> desde
          el primer día.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            render={<Link href="/contacto" />}
            size="lg"
            className="rounded-full px-6"
          >
            Agendar una conversación
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button
            render={<Link href="/proceso" />}
            size="lg"
            variant="ghost"
            className="rounded-full px-6"
          >
            Cómo trabajamos
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-xs uppercase tracking-[0.18em] text-muted-foreground/80"
        >
          Para empresas que quieren operar con claridad
        </motion.p>
      </div>
    </section>
  );
}
