"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleSignInButton } from "@/components/auth/google-signin-button";
import { signUpWithPassword } from "@/app/actions/auth";

export function SignupForm() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      const result = await signUpWithPassword(formData);
      if (!result.success) {
        setError(result.error ?? "No pudimos crear tu cuenta");
        toast.error(result.error ?? "No pudimos crear tu cuenta");
        return;
      }
      setDone(true);
      toast.success("Cuenta creada. Revisa tu correo para confirmar.");
    });
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border/70 bg-card/90 p-8 text-center shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.35)] backdrop-blur">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Casi listo
        </h1>
        <p className="mt-3 text-muted-foreground">
          Te enviamos un correo de confirmación. Da clic al enlace para
          activar tu cuenta y entrar al portal.
        </p>
        <Button
          render={<Link href="/login" />}
          variant="ghost"
          className="mt-6 rounded-full"
        >
          Volver a iniciar sesión
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-2xl border border-border/70 bg-card/90 p-8 shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.35)] backdrop-blur">
      <div className="space-y-2 text-center">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Crea tu cuenta
        </h1>
        <p className="text-sm text-muted-foreground">
          Accede al portal de seguimiento de tu proyecto.
        </p>
      </div>

      <GoogleSignInButton label="Registrarme con Google" />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/70" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">o</span>
        </div>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nombre completo</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Cómo te llamas"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@empresa.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
            required
          />
        </div>

        {error ? <p className="text-xs text-destructive">{error}</p> : null}

        <Button
          type="submit"
          className="w-full rounded-full"
          disabled={pending}
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Creando cuenta…
            </>
          ) : (
            "Crear cuenta"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
