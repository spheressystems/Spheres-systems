import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderKanban, FileCheck2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const greeting =
    (user?.user_metadata?.full_name as string | undefined)?.split(" ")[0] ??
    "bienvenida";

  const cards = [
    {
      title: "Proyectos activos",
      icon: FolderKanban,
      value: "—",
      hint: "Aún no hay proyectos asignados a tu cuenta",
    },
    {
      title: "Pendientes esta semana",
      icon: Clock,
      value: "—",
      hint: "Las tareas que requieren tu revisión aparecerán aquí",
    },
    {
      title: "Documentos recientes",
      icon: FileCheck2,
      value: "—",
      hint: "Entregables, propuestas y reportes",
    },
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          Portal
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          Hola, {greeting}.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Este es tu espacio para dar seguimiento a los sistemas que estamos
          construyendo juntos. Pronto verás aquí proyectos, tareas y reportes.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="rounded-2xl border-border/70">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="font-serif text-4xl text-foreground">
                  {card.value}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {card.hint}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section>
        <Card className="rounded-2xl border-border/70">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Próximos pasos</CardTitle>
              <Badge variant="secondary" className="rounded-full">
                Cuenta nueva
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Estamos preparando tu espacio. En cuanto definamos el alcance de
              tu primer proyecto, verás aquí las tareas, fechas clave y
              documentos asociados.
            </p>
            <Link
              href="/cuenta"
              className="inline-flex items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline"
            >
              Completar mi perfil
              <ArrowRight className="size-4" />
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
