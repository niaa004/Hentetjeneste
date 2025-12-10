# User Greeting

This is a code bundle for User Greeting. The original project is available at https://www.figma.com/design/seOfvjNHV9hwgz67wzwVUK/User-Greeting.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Supabase setup

1. Create a Supabase project at https://app.supabase.com and copy your project URL and anon key.
2. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. For server-side operations that need elevated privileges, set `SUPABASE_SERVICE_KEY` in your deployment environment (do NOT commit it).
4. Deploy: set the same env vars in your hosting provider (Vercel/Netlify) under project settings.

The app reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Vite exposes variables prefixed with `VITE_`).

  # User Greeting

  This is a code bundle for User Greeting. The original project is available at https://www.figma.com/design/seOfvjNHV9hwgz67wzwVUK/User-Greeting.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  