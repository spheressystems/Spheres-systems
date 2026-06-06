import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Next.js 16: el middleware fue renombrado a "proxy".
// Se ejecuta en runtime Node.js y refresca la sesión de Supabase en cada request.
export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Excluye:
     *  - _next/static, _next/image (assets internos)
     *  - favicon, og-image y archivos de imagen estáticos
     *  - rutas de auth callback (manejadas por route handler)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
