# Hentetjeneste - Rapport (Executive Summary)

## DEL 1 — HVA VI HAR GJORT

1. Arkitekturvalg (Supabase + Frontend)
- Vi valgte Supabase (Backend-as-a-Service) for rask, sikker og GDPR-kompatibel backend på EU-region.
- Frontend: React + Vite (TypeScript) — modulær komponentstruktur.
- Resultat: Ingen egen Node backend nødvendig — raskere iterasjon og enklere utrulling.

2. Database & datamodell
- Tabeller: `profiles`, `children`, `attendance_logs`, `approved_persons`, `messages`, `incidents`, `daily_info`.
- UUID-primærnøkler, relasjoner, indekser for ytelse.
- Migrasjoner og RLS-policyer i `supabase/migrations/`.

3. Sikkerhet
- Supabase Auth for autentisering og EU hosting.
- Row Level Security (RLS) for tilgangsbegrensning: foreldre ser kun egne barn; staff/admin har bredere tilgang.
- GDPR: profilautogenerering, logg og mulighet for å slette inntrenger (delete cascade), dataminimering.

4. Frontend (struktur og features)
- `src/services/supabase.ts` — skrivebeskyttet Supabase-klient og tjenestelag.
- `src/components/ParentView/StaffView` — ferdig integrert med Supabase.
- UI: store knapper, enkel navigasjon, fokus på rask inn/ut-kryssing.

5. Funksjoner implementert
- Kjerne: Check-in / Check-out (attendance_logs + children.status)
- Approved persons: Godkjente hentepersoner for trygg henting
- Messages: Enkel chat mellom foreldre og ansatte
- Incidents og daily_info for logging og daglig informasjon

---

## DEL 2 — KRAVENE FRA FROSTBYTE (SJEKKLISTEN)

- Inn/ut-kryssing: Implementert ✅
- GDPR: Supabase i EU + RLS & Auth ✅
- Rollebasert tilgang: profiles.role + RLS ✅
- Barnets profil: children + profiles ✅
- Logging: attendance_logs med timestamps og hvem som gjorde handlingen ✅
- Brukervennlighet: UI-design og UX vurdert (fokus på enklest mulig flows) ✅
- Tillegg: Approved persons, Chat, Incidents, Daily Info (valgfritt) ✅

---

## DEL 3 — TEKNISKE & SMIDIGE VALG

- Arkitektur: Cloud-native (Supabase) — rask levering og sikker drift.
- Sprintstrategi: Prioritert kjernefunksjonalitet først (MVP):
  - Sprint 1: Auth, Child & Attendance logging, Parent view
  - Sprint 2: Staff view, Approved persons, Pickup approvals
  - Sprint 3: Chat, Incidents, Daily info, polish UX

---

## DEL 4 — ANBEFALTE NESTE STEG

1. E2E-testing og onboarding-testbrukere i Supabase
2. Fjerne eventuelle `as any`-casts ved å synkronisere type-deklarasjoner (for full TS-typer)
3. Deploy til Vercel og CI/CD for migrations + secrets
4. Sikkerhetsgjennomgang og pen-test (enkel intern QA)

---

## DEL 5 — BYGGSUMMAR (KORT FOR RAPPORT)

Løsningen dekker alle kjernekravene i FrostByte-case: inn-/ut-kryssing, GDPR-sikker databehandling, rollebasert tilgang, barnets profil og kontaktinformasjon — sammen med komplette ekstrafunksjoner som godkjente hentepersoner, meldinger og hendelseslogger. Arkitekturvalg og design gir oss rask iterasjon, god sikkerhet og enkel distribusjon.

---

## DEL 6 — BILAG: TEKNISKE FILER OG NAVN

- Authorization & config: `.env`, `vite-env.d.ts`
- Supabase: `src/services/supabase.ts`, `supabase/migrations/`
- Frontend: `src/components/ParentView.tsx`, `src/components/StaffView.tsx`, øvrige UI-componenter
- DB-typer: `src/services/api-types.ts`


*End of REPORT*