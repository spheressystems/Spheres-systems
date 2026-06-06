import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos sobre tu operación y agendamos una conversación de 30 minutos para entender cómo podemos ayudarte.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-20 sm:pt-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
          Contacto
        </p>
        <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
          Empecemos por una conversación.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Déjanos tus datos y un poco de contexto. Te respondemos en menos de
          24 horas hábiles.
        </p>
      </div>

      <ContactForm />

      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Mail className="size-4" />
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="hover:text-foreground"
        >
          O escríbenos a {siteConfig.contactEmail}
        </a>
      </div>
    </section>
  );
}
