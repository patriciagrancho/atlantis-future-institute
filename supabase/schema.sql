-- Evoluteon — database schema
-- Run this once in your Supabase project: SQL Editor → New query → paste → Run.

-- Waitlist (member early-access signups)
create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  status     text not null default 'pending',  -- pending | approved
  created_at timestamptz not null default now()
);

-- Partner applications (wellness venues)
create table if not exists public.partner_applications (
  id                 uuid primary key default gen_random_uuid(),
  brand_name         text,
  category           text,           -- Hotels | Clinics | Residences | Retreats | Other
  location           text,
  website            text,
  contact_name       text,
  contact_title      text,
  contact_phone      text,
  contact_email      text,
  concept            text,
  exclusive_benefits text,
  status             text not null default 'pending',  -- pending | active
  created_at         timestamptz not null default now()
);

-- Lock the tables down: enable RLS with no public policies.
-- The app reaches these tables only via the server-side service role key,
-- which bypasses RLS — so the anon/public key can neither read nor write them.
alter table public.waitlist enable row level security;
alter table public.partner_applications enable row level security;
