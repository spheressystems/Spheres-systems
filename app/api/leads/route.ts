import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { leadSchema } from "@/lib/validations";

export const runtime = "nodejs";

type LeadResponse = {
  success: boolean;
  error?: string;
};

export async function POST(request: Request): Promise<NextResponse<LeadResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Cuerpo inválido" },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: parsed.error.issues[0]?.message ?? "Datos inválidos",
      },
      { status: 422 },
    );
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!serviceRoleKey || !supabaseUrl) {
    return NextResponse.json(
      {
        success: false,
        error: "El servicio de leads no está configurado todavía",
      },
      { status: 503 },
    );
  }

  // Usamos service role solo aquí para escribir leads desde un endpoint público,
  // sin abrir RLS de INSERT en una tabla que también debe estar protegida en lectura.
  const supabase = createServerClient(supabaseUrl, serviceRoleKey, {
    cookies: { getAll: () => [], setAll: () => {} },
  });

  const { error } = await supabase.from("leads").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || null,
    message: parsed.data.message,
    source: "landing",
  });

  if (error) {
    return NextResponse.json(
      { success: false, error: "No pudimos guardar tu mensaje" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
