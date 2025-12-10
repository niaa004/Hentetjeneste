# Hentetjeneste (User Greeting)

Hentetjeneste is a small web application for kindergarten pickup that demonstrates using Supabase (Auth, Database, RLS) as a backend with a React + Vite frontend. The app supports:

- Check-in/check-out logging for children (attendance)
- Role-based access control (parent/staff/admin) using RLS
- Approved persons for pickups
- Messaging between staff and parents
- Daily information (menu, activities) and incident logging

This repository contains the frontend, database migrations (for Supabase), and supporting scripts and documentation.

## Quick start (development)
1. Copy `.env.example` to `.env` and fill in the keys:
  - `VITE_SUPABASE_URL` — your Supabase project's URL
  - `VITE_SUPABASE_ANON_KEY` — your Supabase project's anon key

2. Install dependencies and start the dev server:
```bash
npm install
npm run dev
```

3. Open the app (Vite shows the URL, e.g. http://localhost:5173) and test flows.

## Supabase setup (migrations & seeding)
There are SQL migrations in `supabase/migrations/`:
- `20241210000001_initial_schema.sql` — core schema
- `20241210000002_rls_policies.sql` — RLS policies and helpful triggers

You can run these via Supabase Dashboard -> SQL Editor or using the Supabase CLI:
```bash
npm i -g supabase
supabase login
supabase link --project-ref gvqxcdcphggotggfvqbe
supabase db push
```

The `scripts/seed.sql` file contains sample data you can paste in the SQL editor (replace `<PARENT_UUID>` and `<STAFF_UUID>` with actual Auth user IDs if needed).

## Running tests & QA
1. Run the dev server and login using a parent or staff account (create users in the Supabase Dashboard -> Authentication -> Users if you prefer).
2. Verify that parent users only see their children and staff sees all.
3. Verify `attendance_logs` are created on check-in/out, `approved_persons` are visible, and messaging works.

## Contributing
PRs and issues are welcome. Keep secrets out of commits (don’t commit `.env` or service keys).

## Files & important locations
- `src/` — frontend code
- `src/services/` — supabase client & service methods
- `supabase/migrations/` — migrations (schema + RLS)
- `scripts/seed.sql` — sample data
- `docs/` — report, docs and setup guides

## License
This repository is licensed under the MIT License — see the `LICENSE` file.

  