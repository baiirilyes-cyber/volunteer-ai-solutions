# Volunteer AI Solutions SaaS Starter

This is the real platform starter for Volunteer AI Solutions.

## What this includes

- Premium agency homepage
- Real OpenAI-powered AI receptionist API
- Strict industry guardrails
- Lead capture API
- CRM dashboard
- Client portal structure
- Supabase database schema
- Stripe checkout API
- Twilio SMS notification helper
- Resend email notification helper
- Industry prompt system

## Important

This is **not for cPanel static hosting**. This is a real web app that should be deployed to **Vercel**.

Keep your Namecheap domain. When ready, point your DNS to Vercel.

## Setup

1. Install Node.js.
2. Run:

```bash
npm install
npm run dev
```

3. Copy `.env.example` to `.env.local`.
4. Add Supabase, OpenAI, Stripe, Resend, and Twilio keys.
5. Run the SQL in `supabase/schema.sql` inside Supabase.
6. Deploy to Vercel.

## Pages

- `/` main website
- `/dashboard` owner CRM dashboard
- `/portal` client portal starter
- `/login` placeholder login page

## API routes

- `/api/ai` AI receptionist
- `/api/leads` create/list leads
- `/api/checkout` Stripe checkout
- `/api/webhooks/stripe` Stripe webhook starter
