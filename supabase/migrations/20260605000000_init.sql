-- Spheres Systems · esquema inicial
-- Tablas: organizations, profiles, projects, leads
-- Seguridad: RLS habilitado en todas las tablas + políticas por rol.
-- Trigger: handle_new_user() crea un profile cuando se inserta un usuario en auth.users.

set search_path = public;

create extension if not exists "pgcrypto";

------------------------------------------------------------
-- Tablas
------------------------------------------------------------

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  industry text,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'client' check (role in ('client','admin','staff')),
  organization_id uuid references public.organizations(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'discovery'
    check (status in ('discovery','design','build','launch','maintenance')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  source text default 'landing',
  created_at timestamptz not null default now()
);

create index if not exists projects_organization_id_idx on public.projects(organization_id);
create index if not exists profiles_organization_id_idx on public.profiles(organization_id);
create index if not exists leads_created_at_idx on public.leads(created_at desc);

------------------------------------------------------------
-- updated_at automático
------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute procedure public.set_updated_at();

------------------------------------------------------------
-- Trigger: crear profile al registrarse
------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

------------------------------------------------------------
-- Helper: ¿es admin?
------------------------------------------------------------

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

------------------------------------------------------------
-- RLS
------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.projects enable row level security;
alter table public.leads enable row level security;

-- Profiles
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

-- Organizations
drop policy if exists "organizations_select_member" on public.organizations;
create policy "organizations_select_member"
  on public.organizations for select
  to authenticated
  using (
    public.is_admin()
    or id in (
      select organization_id from public.profiles where id = auth.uid()
    )
  );

-- Projects
drop policy if exists "projects_select_member" on public.projects;
create policy "projects_select_member"
  on public.projects for select
  to authenticated
  using (
    public.is_admin()
    or organization_id in (
      select organization_id from public.profiles where id = auth.uid()
    )
  );

-- Leads: solo admin lee. La inserción se hace desde la API con service role.
drop policy if exists "leads_select_admin" on public.leads;
create policy "leads_select_admin"
  on public.leads for select
  to authenticated
  using (public.is_admin());

------------------------------------------------------------
-- Comentarios
------------------------------------------------------------

comment on table public.organizations is 'Cliente B2B (empresa que contrata a Spheres).';
comment on table public.profiles is 'Datos de aplicación por usuario; extiende auth.users.';
comment on table public.projects is 'Sistemas que Spheres construye/opera para una organización.';
comment on table public.leads is 'Leads del formulario público de contacto (solo admin lee).';
