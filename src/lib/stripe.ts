import Stripe from 'stripe';

let stripePromise: Stripe | null = null;

export function getStripeServer() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing STRIPE_SECRET_KEY in environment variables.');
  }

  if (!stripePromise) {
    stripePromise = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  return stripePromise;
}
