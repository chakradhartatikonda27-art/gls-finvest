-- GLS Finvest — Supabase schema
-- Run this in Supabase Dashboard → SQL Editor → New Query, then "Run"
-- Covers every content type currently hardcoded in lib/data/*.ts

-- ============================================================
-- SITE SETTINGS (singleton — one row only)
-- ============================================================
create table site_settings (
  id int primary key default 1,
  legal_name text not null,
  tagline text not null,
  hero_headline text not null,
  hero_subheadline text not null,
  description text not null,
  phone text not null,
  email text not null,
  address_line1 text not null,
  address_line2 text not null,
  whatsapp text not null,
  linkedin_url text,
  instagram_url text,
  facebook_url text,
  twitter_url text,
  youtube_url text,
  updated_at timestamptz default now(),
  constraint single_row check (id = 1)
);

-- ============================================================
-- SERVICES
-- ============================================================
create table services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  card_description text not null,
  icon text not null,
  photo_url text not null,
  hero_tagline text not null,
  overview text not null,
  display_order int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table service_benefits (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  benefit text not null,
  display_order int not null default 0
);

create table service_features (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  title text not null,
  description text not null,
  display_order int not null default 0
);

create table service_faqs (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  question text not null,
  answer text not null,
  display_order int not null default 0
);

create table service_facts (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  label text not null,
  value text not null,
  display_order int not null default 0
);

-- ============================================================
-- PROJECTS
-- ============================================================
create table projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('Residential', 'Villas', 'Commercial', 'Open Plots')),
  location text not null,
  area text not null,
  price_from text not null,
  status text not null check (status in ('Ongoing', 'Completed', 'Upcoming')),
  image_category text not null,
  display_order int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table project_highlights (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  highlight text not null,
  display_order int not null default 0
);

-- ============================================================
-- TEAM
-- ============================================================
create table team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text not null,
  photo_url text not null,
  linkedin_url text,
  display_order int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================================
-- TESTIMONIALS
-- ============================================================
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  quote text not null,
  rating int not null default 5 check (rating between 1 and 5),
  display_order int not null default 0,
  created_at timestamptz default now()
);

-- ============================================================
-- GALLERY
-- ============================================================
create table gallery_items (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  category text not null,
  photo_url text not null,
  span text not null default 'normal' check (span in ('large', 'tall', 'wide', 'normal')),
  display_order int not null default 0,
  created_at timestamptz default now()
);

-- ============================================================
-- NEWS
-- ============================================================
create table news_items (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  category text not null,
  photo_url text not null,
  published_date date not null default current_date,
  display_order int not null default 0,
  created_at timestamptz default now()
);

-- ============================================================
-- MARKET / CHART DATA
-- ============================================================
create table portfolio_growth (
  id uuid primary key default gen_random_uuid(),
  year text not null,
  value numeric not null,
  display_order int not null default 0
);

create table portfolio_allocation (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  value numeric not null,
  color text not null,
  display_order int not null default 0
);

create table yoy_returns (
  id uuid primary key default gen_random_uuid(),
  year text not null,
  real_estate numeric not null,
  venture numeric not null,
  display_order int not null default 0
);

-- ============================================================
-- ROW LEVEL SECURITY — public read, authenticated write only
-- ============================================================
alter table site_settings enable row level security;
alter table services enable row level security;
alter table service_benefits enable row level security;
alter table service_features enable row level security;
alter table service_faqs enable row level security;
alter table service_facts enable row level security;
alter table projects enable row level security;
alter table project_highlights enable row level security;
alter table team_members enable row level security;
alter table testimonials enable row level security;
alter table gallery_items enable row level security;
alter table news_items enable row level security;
alter table portfolio_growth enable row level security;
alter table portfolio_allocation enable row level security;
alter table yoy_returns enable row level security;

-- Public (anon) can READ everything — the live site needs this
create policy "Public read access" on site_settings for select using (true);
create policy "Public read access" on services for select using (true);
create policy "Public read access" on service_benefits for select using (true);
create policy "Public read access" on service_features for select using (true);
create policy "Public read access" on service_faqs for select using (true);
create policy "Public read access" on service_facts for select using (true);
create policy "Public read access" on projects for select using (true);
create policy "Public read access" on project_highlights for select using (true);
create policy "Public read access" on team_members for select using (true);
create policy "Public read access" on testimonials for select using (true);
create policy "Public read access" on gallery_items for select using (true);
create policy "Public read access" on news_items for select using (true);
create policy "Public read access" on portfolio_growth for select using (true);
create policy "Public read access" on portfolio_allocation for select using (true);
create policy "Public read access" on yoy_returns for select using (true);

-- Only logged-in users (i.e., you, via the admin panel) can WRITE
create policy "Authenticated write access" on site_settings for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on services for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on service_benefits for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on service_features for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on service_faqs for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on service_facts for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on projects for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on project_highlights for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on team_members for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on testimonials for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on gallery_items for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on news_items for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on portfolio_growth for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on portfolio_allocation for all using (auth.role() = 'authenticated');
create policy "Authenticated write access" on yoy_returns for all using (auth.role() = 'authenticated');
