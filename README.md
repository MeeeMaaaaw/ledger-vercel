# Savings & Lending Ledger (Vercel + Supabase)

1. Supabase: create a project, turn OFF new sign-ups (Authentication > Sign In / Providers), add your users (Authentication > Users), then run in the SQL Editor:

    create table ledger (id text primary key, data jsonb not null default '{}', updated_at timestamptz default now());
    alter table ledger enable row level security;
    create policy "read" on ledger for select to authenticated using (true);
    create policy "insert" on ledger for insert to authenticated with check (true);
    create policy "update" on ledger for update to authenticated using (true) with check (true);

2. Vercel: put this folder in a GitHub repo and Import it (Framework Preset: Other), or run `npx vercel` here.
3. Vercel > Settings > Environment Variables, add (for Production):
   - SUPABASE_URL = your Project URL
   - SUPABASE_ANON_KEY = your anon/public key (never the service_role key)
4. Deploy (or Redeploy after adding the variables).
