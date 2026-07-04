# Breathe Restaurant & Lounge

Marketing site for Breathe Restaurant & Lounge (Independence Layout, Enugu). Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed localhost URL (Next.js picks 3000, or the next free port if it's taken).

## Environment variables

Reservation requests are emailed via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from the Resend dashboard. Without it, the reservation form still validates client-side but the API returns a graceful "temporarily unavailable" error instead of sending mail.
- `RESERVATION_TO_EMAIL` — defaults to `breatherestaurantnlounge@gmail.com` if unset.

You'll also need to verify a sending domain in Resend and update the `from` address in `src/app/api/reservations/route.ts` (currently `reservations@breatherestolounge.com`).

## Content still pending from the client

Everything below is real, working code with clearly-labeled placeholder content — search the codebase for `TODO(client)` to find every instance:

- **Logo** — `src/components/ui/Logo.tsx` is a recreated placeholder crest (gold ring monogram + wordmark). Swap in the official logo file/SVG export.
- **Menu items & prices** — `src/lib/data/menu.ts` has sample dishes, tacos, mains, and cocktails in Naira. Replace with the real menu.
- **Weekly event** — `src/lib/data/events.ts` guesses "Ladies Monday" for the recurring promo. Confirm the real name/schedule.
- **Opening hours** — `src/lib/data/site.ts` and the JSON-LD block in `src/app/layout.tsx` use a typical resto-lounge schedule. Confirm real hours.
- **Photography** — `src/lib/data/images.ts` sources curated Unsplash photos matching the brand's dark/gold aesthetic. Replace with high-res exports from Breathe's own shoots/Instagram.

## Deployment

Built for Vercel. Set the environment variables above in the Vercel project settings before going live.
