import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { signOut } from "@/app/actions/auth";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Mi cuenta",
};

export default async function CuentaPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fullName =
    (user?.user_metadata?.full_name as string | undefined) ?? "—";
  const provider =
    (user?.app_metadata?.provider as string | undefined) ?? "email";

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          Portal
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground">
          Mi cuenta
        </h1>
        <p className="text-muted-foreground">
          Datos básicos de tu cuenta en Spheres Systems.
        </p>
      </header>

      <Card className="rounded-2xl border-border/70">
        <CardHeader>
          <CardTitle>Información de la cuenta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <Field label="Nombre" value={fullName} />
          <Separator />
          <Field label="Correo" value={user?.email ?? "—"} />
          <Separator />
          <Field label="Método de inicio de sesión" value={provider} />
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-destructive/40">
        <CardHeader>
          <CardTitle>Cerrar sesión</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-3">
          <p className="text-sm text-muted-foreground">
            Termina tu sesión en este dispositivo.
          </p>
          <form action={signOut}>
            <Button type="submit" variant="destructive" className="rounded-full">
              Cerrar sesión
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
