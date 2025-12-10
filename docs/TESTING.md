# Quick tests and verification for Hentetjeneste

This file lists simple checks you can run to verify your Supabase connection and your app's basic flows.

1) Start the app
```bash
npm install
npm run dev
```

2) Create test users in Supabase Dashboard
- Go to Supabase Dashboard -> Auth -> Users -> Add user.
- Create a parent/test accounts and a staff account.
- Copy their `id` values and add them to `profiles` by running the sample SQL in `scripts/seed.sql`.

3) Verify basic fetch flows (frontend)
- Login as parent: open the app and log in.
- ParentView should load child cards.
- Click a child, check the Pickup tab and Approved Persons.

4) Check check-in/out flow
- Log in as staff (if only staff is allowed to checkin/out), navigate to StaffView, do a check-in and check-out.
- Confirm `attendance_logs` rows were inserted with the right `child_id`.

5) Verify RLS
- While logged in as parent, open the network tab and verify only their children are returned.
- As staff, confirm all children are returned.

6) Test daily_info and messaging
- Create a daily_info entry via the UI or SQL and confirm it shows up.
- Use the chat feature to send a message; confirm it’s stored in `messages`.

7) Troubleshooting
- If queries return `401` or `403`: check your `VITE_SUPABASE_ANON_KEY` and RLS policies.
- CORS: ensure the origin of your dev app is allowed.
- Migrations: check `supabase/migrations` and run them via SQL Editor if migration push fails.

8) Optional: Use the service key for admin operations
- Put `SUPABASE_SERVICE_ROLE_KEY` in your local environment (NOT in .env that gets committed).
- Use the `supabase.auth.admin` methods for invite/create user actions or run server-side seed scripts.

