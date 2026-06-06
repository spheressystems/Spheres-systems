"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema, type LeadInput } from "@/lib/validations";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (data: LeadInput) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { success: boolean; error?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "No pudimos enviar tu mensaje");
      }

      toast.success("Mensaje recibido. Te respondemos pronto.");
      reset();
      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Algo salió mal, intenta de nuevo";
      toast.error(message);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border/70 bg-card p-10 text-center">
        <h3 className="font-serif text-3xl tracking-tight text-foreground">
          Gracias.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Recibimos tu mensaje. Te respondemos en menos de 24 horas hábiles.
        </p>
        <Button
          variant="ghost"
          className="mt-6 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-border/70 bg-card p-8 sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Tu nombre</Label>
          <Input
            id="name"
            placeholder="Cómo te llamas"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@empresa.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          Empresa <span className="text-muted-foreground">(opcional)</span>
        </Label>
        <Input
          id="company"
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          {...register("company")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">¿En qué te podemos ayudar?</Label>
        <Textarea
          id="message"
          placeholder="Cuéntanos brevemente qué proceso te gustaría mejorar o qué sistema tienes en mente."
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          Tomamos tu información con seriedad. Nunca la compartimos.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="rounded-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <Send className="ml-2 size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
