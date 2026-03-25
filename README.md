# Royalway Christian Centre Rebuild

A premium Next.js App Router scaffold for a modern church website, including a Stripe-powered Give page.

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env file
   ```bash
   cp .env.example .env.local
   ```
3. Add your Stripe secret key in `.env.local`
4. Run locally
   ```bash
   npm run dev
   ```

## Stripe flow

This scaffold uses a Next.js App Router Route Handler at `src/app/api/checkout/route.ts` to create Stripe Checkout Sessions. Next.js Route Handlers are the App Router mechanism for custom request handlers, and they live inside the `app` directory. citeturn273290search1turn273290search11

## Content basis

The content scaffold reflects the live Royalway site identity, including the tag line “Transforming Lives. Breaking Limits.”, ministry sections, pastor names, and published contact details from the current church website. citeturn273290search0
