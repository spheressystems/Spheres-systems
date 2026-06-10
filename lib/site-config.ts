export const siteConfig = {
  name: "Spheres Systems",
  shortName: "Spheres",
  tagline: "Sistemas digitales hechos a la medida de tu operación",
  description:
    "Diseñamos, construimos y operamos sistemas digitales (CRM, ERP, automatizaciones) que dejan cada proceso de tu empresa auditable y bajo control.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es-MX",
  contactEmail: "hola@spheres.systems",
  nav: [
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: "/proceso" },
    { label: "Proyectos", href: "/portafolio" },
    { label: "Contacto", href: "/contacto" },
  ],
  portalNav: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Cuenta", href: "/cuenta" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
