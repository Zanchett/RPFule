-- ============================================
-- RPFule Supabase Database Setup
-- Run this in the Supabase SQL Editor
-- ============================================

-- 1. Profiles table (auto-created on signup)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- 2. Campaigns table
create table public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  game_system_id text not null default 'pf2e',
  dm_user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.campaigns enable row level security;

-- Helper functions (security definer bypasses RLS, breaks circular dependency)
create or replace function public.is_campaign_dm(p_campaign_id uuid)
returns boolean as $$
  select exists (
    select 1 from public.campaigns
    where id = p_campaign_id and dm_user_id = auth.uid()
  );
$$ language sql security definer stable;

create or replace function public.is_campaign_member(p_campaign_id uuid)
returns boolean as $$
  select exists (
    select 1 from public.campaign_members
    where campaign_id = p_campaign_id and user_id = auth.uid()
  );
$$ language sql security definer stable;

create policy "DM full access"
  on public.campaigns for all using (auth.uid() = dm_user_id);

-- 3. Campaign members table
create table public.campaign_members (
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (campaign_id, user_id)
);

alter table public.campaign_members enable row level security;

create policy "DM can manage members"
  on public.campaign_members for all using (
    public.is_campaign_dm(campaign_id)
  );

create policy "Members can view co-members"
  on public.campaign_members for select using (
    public.is_campaign_member(campaign_id)
  );

create policy "Users can leave campaigns"
  on public.campaign_members for delete using (auth.uid() = user_id);

create policy "Members can view campaign"
  on public.campaigns for select using (
    public.is_campaign_member(id)
  );

-- 4. Characters table
create table public.characters (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  campaign_id uuid references public.campaigns(id) on delete set null,
  game_system_id text not null default 'pf2e',
  name text not null default 'Unnamed Character',
  level int not null default 1,
  ancestry_id text,
  class_id text,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_characters_user on public.characters(user_id);
create index idx_characters_campaign on public.characters(campaign_id);

alter table public.characters enable row level security;

create policy "Owner full access"
  on public.characters for all using (auth.uid() = user_id);

create policy "DM can view campaign characters"
  on public.characters for select using (
    campaign_id is not null and public.is_campaign_dm(campaign_id)
  );

create policy "DM can update campaign characters"
  on public.characters for update using (
    campaign_id is not null and public.is_campaign_dm(campaign_id)
  );

create policy "Campaign members can view characters"
  on public.characters for select using (
    campaign_id is not null and public.is_campaign_member(campaign_id)
  );

-- 5. Invite codes table
create table public.invite_codes (
  id uuid primary key default gen_random_uuid(),
  code char(6) not null unique,
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  expires_at timestamptz not null,
  used_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create index idx_invite_codes_code on public.invite_codes(code);

alter table public.invite_codes enable row level security;

create policy "DM can manage invite codes"
  on public.invite_codes for all using (
    public.is_campaign_dm(campaign_id)
  );

create policy "Anyone authenticated can read valid codes"
  on public.invite_codes for select using (auth.uid() is not null);

-- 6. RPC: Join campaign by invite code
create or replace function public.join_campaign_by_code(invite_code text)
returns uuid as $$
declare
  v_campaign_id uuid;
  v_code_id uuid;
begin
  select ic.id, ic.campaign_id into v_code_id, v_campaign_id
  from public.invite_codes ic
  where ic.code = upper(invite_code)
    and ic.expires_at > now()
    and ic.used_by is null;

  if v_campaign_id is null then
    raise exception 'Invalid or expired invite code';
  end if;

  -- Already a member? Just return
  if exists (
    select 1 from public.campaign_members
    where campaign_id = v_campaign_id and user_id = auth.uid()
  ) then
    return v_campaign_id;
  end if;

  -- Is the DM? Just return
  if exists (
    select 1 from public.campaigns
    where id = v_campaign_id and dm_user_id = auth.uid()
  ) then
    return v_campaign_id;
  end if;

  insert into public.campaign_members (campaign_id, user_id)
  values (v_campaign_id, auth.uid());

  return v_campaign_id;
end;
$$ language plpgsql security definer;

-- 7. RPC: Generate invite code (DM only)
create or replace function public.generate_invite_code(p_campaign_id uuid)
returns text as $$
declare
  v_code text;
begin
  -- Verify caller is DM
  if not exists (
    select 1 from public.campaigns
    where id = p_campaign_id and dm_user_id = auth.uid()
  ) then
    raise exception 'Only the DM can generate invite codes';
  end if;

  -- Generate 6-char alphanumeric code
  v_code := upper(substr(md5(random()::text), 1, 6));

  insert into public.invite_codes (code, campaign_id, created_by, expires_at)
  values (v_code, p_campaign_id, auth.uid(), now() + interval '24 hours');

  return v_code;
end;
$$ language plpgsql security definer;

-- 8. Campaign shops table
create table public.campaign_shops (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  name text not null,
  description text not null default '',
  is_visible boolean not null default false,
  inventory jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_campaign_shops_campaign on public.campaign_shops(campaign_id);

alter table public.campaign_shops enable row level security;

create policy "DM can manage shops"
  on public.campaign_shops for all using (
    public.is_campaign_dm(campaign_id)
  );

create policy "Members can view visible shops"
  on public.campaign_shops for select using (
    public.is_campaign_member(campaign_id) and is_visible = true
  );

-- Enable realtime for campaign_shops
alter publication supabase_realtime add table public.campaign_shops;
