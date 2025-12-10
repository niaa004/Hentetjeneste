# Supabase Setup

Dette prosjektet bruker Supabase som backend.

## Koble til Supabase

1. **Opprett Supabase-prosjekt**: https://supabase.com
2. **Kjør migrations** via SQL Editor i Supabase Dashboard:
   - Kjør `migrations/20241210000001_initial_schema.sql`
   - Kjør `migrations/20241210000002_rls_policies.sql`
3. **Sett environment variables** i `.env`:
   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

## Migrations

Migrations ligger i `supabase/migrations/` og er timestampet for riktig rekkefølge.

## RLS Policies

Row Level Security (RLS) er aktivert på alle tabeller for GDPR-compliance:
- Foreldre ser kun egne barn
- Ansatte ser alle barn
- All data er kryptert og lagret i EU (Frankfurt)
