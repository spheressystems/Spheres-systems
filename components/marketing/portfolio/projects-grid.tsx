"use client";

import { Sparkles, Building2, Calculator } from "lucide-react";
import {
  PortfolioCard,
  type PortfolioStatus,
} from "@/components/marketing/portfolio/portfolio-card";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  href: string;
  status: PortfolioStatus;
  icon: LucideIcon;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "KGA",
    tagline:
      "Proyecto en cotización para una promotoría broker multirramo. ERP a la medida con operación auditable e IA siempre activa.",
    href: "/portafolio/kga",
    status: "En cotización",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "LEGION",
    tagline:
      "ERP a la medida para Promotorías de Seguros Monterrey. Una sola fuente de verdad para promotores, gerentes, asesores y reclutadores.",
    href: "/portafolio/legion",
    status: "En operación",
    icon: Building2,
    featured: false,
  },
  {
    title: "TasaERP",
    tagline:
      "ERP diseñado para tasadurías. Resuelve el problema específico de una industria que ningún software genérico entiende.",
    href: "/portafolio/tasa-erp",
    status: "En operación",
    icon: Calculator,
    featured: false,
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project, i) => (
        <PortfolioCard
          key={project.title}
          title={project.title}
          tagline={project.tagline}
          href={project.href}
          status={project.status}
          icon={project.icon}
          featured={project.featured}
          index={i}
        />
      ))}
    </div>
  );
}
