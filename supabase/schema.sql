create extension if not exists "pgcrypto";

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  business_name text not null,
  owner_name text,
  owner_email text,
  owner_phone text,
  industry text,
  plan text default 'starter',
  status text default 'active'
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  client_id uuid references clients(id),
  name text,
  phone text,
  email text,
  business text,
  industry text,
  message text,
  urgency text default 'normal',
  status text default 'new',
  source text default 'ai_receptionist'
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  client_id uuid references clients(id),
  lead_id uuid references leads(id),
  industry text,
  transcript jsonb,
  summary text
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  client_id uuid references clients(id),
  lead_id uuid references leads(id),
  customer_name text,
  customer_phone text,
  start_time timestamptz,
  end_time timestamptz,
  status text default 'requested',
  notes text
);

create table if not exists client_settings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) unique,
  ai_prompt text,
  business_hours jsonb,
  notification_email text,
  notification_phone text,
  google_calendar_id text,
  stripe_customer_id text
);
