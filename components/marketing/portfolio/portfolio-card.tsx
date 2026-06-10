"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export type PortfolioStatus = "Entregado" | "En operación" | "En cotización";

interface PortfolioCardProps {
  title: string;
  tagline: string;
  href: string;
  status: PortfolioStatus;
  icon: LucideIcon;
  featured?: boolean;
  index?: number;
}

const STATUS_VARIANT: Record<
  PortfolioStatus,
  "default" | "secondary" | "outline"
> = {
  "En cotización": "default",
  "En operación": "secondary",
  Entregado: "outline",
};

export function PortfolioCard({
  title,
  tagline,
  href,
  status,
  icon: Icon,
  featured = false,
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border hover:shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.3)]"
      >
        {featured ? (
          <div
            className="pointer-events-none absolute inset-0 bg-warm-gradient opacity-50"
            aria-hidden
          />
        ) : null}

        <div className="relative flex items-start justify-between gap-3">
          <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border/60 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-accent">
            <Icon className="size-5" />
          </div>
          <Badge variant={STATUS_VARIANT[status]} className="rounded-full">
            {status}
          </Badge>
        </div>

        <div className="relative space-y-2">
          <h3 className="font-serif text-2xl tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {tagline}
          </p>
        </div>

        <div className="relative mt-auto flex items-center gap-1.5 text-sm text-primary">
          <span>Ver proyecto</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
