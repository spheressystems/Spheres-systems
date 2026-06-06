"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleSignInButton } from "@/components/auth/google-signin-button";
import { signInWithPassword } from "@/app/actions/auth";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/dashboard";
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      const result = await signInWithPassword(formData);
      if (result && !result.success) {
        setError(result.error ?? "No pudimos iniciar sesión");
        toast.error(result.error ?? "No pudimos iniciar sesión");
        return;
      }
      router.refresh();
    });
  };

  return (
    <div className="space-y-6 rounded-2xl border border-border/70 bg-card/90 p-8 shadow-[0_30px_80px_-40px_oklch(0.4_0.04_60_/_0.35)] backdrop-blur">
      <div className="space-y-2 text-center">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Hola de nuevo
        </h1>
        <p className="text-sm text-muted-foreground">
          Entra al portal de Spheres Systems.
        </p>
      </div>

      <GoogleSignInButton redirectTo={redirectTo} />

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
            autoComplete="current-password"
            required
          />
        </div>

        {error ? (
          <p className="text-xs text-destructive">{error}</p>
        ) : null}

        <Button
          type="submit"
          className="w-full rounded-full"
          disabled={pending}
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Entrando…
            </>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿No tienes cuenta?{" "}
        <Link
          href="/registro"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}
