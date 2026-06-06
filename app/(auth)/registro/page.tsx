import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Crea tu cuenta en el portal de Spheres Systems.",
};

export default function RegistroPage() {
  return <SignupForm />;
}
