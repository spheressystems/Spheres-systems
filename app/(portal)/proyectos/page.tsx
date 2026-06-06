import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Proyectos",
};

const STATUS_LABELS: Record<string, string> = {
  discovery: "Diagnóstico",
  design: "Diseño",
  build: "Construcción",
  launch: "Lanzamiento",
  maintenance: "Operación",
};

type Project = {
  id: string;
  name: string;
  description: string | null;
  status: keyof typeof STATUS_LABELS;
  updated_at: string;
};

export default async function ProyectosPage() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, name, description, status, updated_at")
    .order("updated_at", { ascending: false })
    .returns<Project[]>();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          Portal
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground">
          Proyectos
        </h1>
        <p className="text-muted-foreground">
          Aquí verás cada sistema en construcción y su estado actual.
        </p>
      </header>

      {error ? (
        <Card className="rounded-2xl border-destructive/40 bg-destructive/5">
          <CardContent className="py-6 text-sm text-destructive">
            No pudimos cargar tus proyectos. Intenta de nuevo en unos minutos.
          </CardContent>
        </Card>
      ) : projects && projects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-2xl border-border/70">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge variant="secondary" className="rounded-full">
                    {STATUS_LABELS[project.status] ?? project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {project.description ?? "Sin descripción todavía."}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="rounded-2xl border-border/70">
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="rounded-2xl bg-secondary p-3 text-primary">
              <FolderKanban className="size-6" />
            </div>
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              Aún no hay proyectos
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              En cuanto definamos el alcance de tu primer sistema, aparecerá
              aquí con su tablero, fechas y entregables.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
