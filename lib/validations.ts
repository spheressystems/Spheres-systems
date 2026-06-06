import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Tu nombre es muy corto").max(120),
  email: z.email("Correo inválido"),
  company: z.string().max(160).optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres)")
    .max(2000),
});
export type LeadInput = z.infer<typeof leadSchema>;

export const loginSchema = z.object({
  email: z.email("Correo inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  fullName: z.string().min(2, "Escribe tu nombre completo").max(120),
  email: z.email("Correo inválido"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .max(72, "Máximo 72 caracteres"),
});
export type SignupInput = z.infer<typeof signupSchema>;
