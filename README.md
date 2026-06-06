# Spheres Systems

Sitio público + portal de clientes de **Spheres Systems** — la empresa de diseño, construcción y operación de sistemas digitales (CRM, ERP, automatización).

Stack:

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind v4** + **shadcn/ui**
- **Supabase** (Postgres + Auth con Google OAuth y email/contraseña)
- **Vercel** para hosting con auto-deploy en `main`
- Tema cálido inspirado en Claude / Notion / Apple

---

## 1. Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Crear archivo de variables
cp .env.local.example .env.local
# Llena los valores con tu proyecto Supabase
```

Variables requeridas en `.env.local`:

| Variable | Dónde se usa |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base de la app (`http://localhost:3000` en dev) |
| `NEXT_PUBLIC_SUPABASE_URL` | Cliente browser + server |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cliente browser + server |
| `SUPABASE_SERVICE_ROLE_KEY` | Solo en `/api/leads` — **nunca exponer** |

```bash
# 3. Levantar el dev server
npm run dev
```

Abre <http://localhost:3000>.

---

## 2. Base de datos (Supabase)

Las migraciones viven en [`supabase/migrations/`](./supabase/migrations).

```bash
# Vincular este repo con el proyecto Supabase remoto (solo la primera vez)
supabase login
supabase link --project-ref <tu-project-ref>

# Aplicar migraciones al proyecto remoto
supabase db push

# (Opcional) Generar tipos TS desde el schema actual
supabase gen types typescript --linked > lib/database.types.ts
```

### Esquema inicial

- `organizations` — clientes B2B
- `profiles` — extiende `auth.users` con `full_name`, `avatar_url`, `role`, `organization_id`
- `projects` — sistemas en construcción (estado: discovery → maintenance)
- `leads` — formulario público de contacto

**RLS activo en todas las tablas.** Los clientes solo ven datos de su `organization_id`. Los admins ven todo.

---

## 3. Autenticación

Configuración en el dashboard de Supabase:

1. **Authentication → Providers**:
   - Email: habilitado, requiere confirmación.
   - Google: habilitar y pegar Client ID + Secret de Google Cloud Console.
2. **Authentication → URL Configuration**:
   - Site URL: `http://localhost:3000` (en producción: `https://<tu-dominio-vercel>`)
   - Redirect URLs (agregar todas):
     - `http://localhost:3000/auth/callback`
     - `https://<tu-dominio-vercel>/auth/callback`

Para Google OAuth, en [Google Cloud Console](https://console.cloud.google.com/apis/credentials):
- OAuth consent screen → External → llenar info.
- Credentials → OAuth 2.0 Client → Web application.
- Authorized redirect URI: `https://<tu-supabase>.supabase.co/auth/v1/callback`.

---

## 4. Estructura de carpetas

```
app/
  (marketing)/            Sitio público (landing, servicios, proceso, contacto)
  (auth)/                 Login y registro
  (portal)/               Portal de cliente (rutas protegidas)
  auth/callback/          OAuth callback (intercambia code por sesión)
  api/leads/              Endpoint POST del form de contacto
  actions/                Server actions (auth, sign-out)
components/
  ui/                     shadcn/ui
  marketing/              Hero, Services, Process, ContactForm, etc.
  auth/                   LoginForm, SignupForm, GoogleSignInButton
  portal/                 Sidebar, Topbar, UserMenu
lib/
  supabase/               client.ts, server.ts, middleware.ts
  validations.ts          Zod schemas
  site-config.ts          Config central (nombre, nav, contacto)
supabase/
  migrations/             SQL versionado
proxy.ts                  Next.js 16: el viejo middleware.ts ahora se llama proxy.ts
```

> **Nota Next.js 16:** El middleware fue renombrado a `proxy.ts` y la función a `proxy()`. APIs async: `cookies()`, `headers()`, `params` y `searchParams` requieren `await`.

---

## 5. Deploy en Vercel

1. Crea el repo en GitHub y haz push.
2. En Vercel: **Add New → Project** y selecciona el repo.
3. En **Environment Variables** agrega las 4 variables (Production + Preview):
   - `NEXT_PUBLIC_SITE_URL` = `https://<dominio>.vercel.app`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy. A partir de aquí, cada `git push` a `main` lanza un nuevo deploy automático.

Recuerda actualizar la **Site URL** y los **Redirect URLs** de Supabase con la URL final de Vercel.

---

## 6. Scripts

```bash
npm run dev        # Dev server
npm run build      # Build de producción
npm run start      # Start con build
npm run lint       # ESLint
```
