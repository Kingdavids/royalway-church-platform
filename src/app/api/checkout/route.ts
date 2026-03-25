import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY');
}

const stripe = new Stripe(secretKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, frequency, category } = body;

    if (!amount || Number(amount) <= 0) {
      return NextResponse.json(
          { error: 'Invalid amount.' },
          { status: 400 }
      );
    }

    const origin =
        req.headers.get('origin') ||
        process.env.NEXT_PUBLIC_SITE_URL ||
        'http://localhost:3000';

    const amountInCents = Math.round(Number(amount) * 100);

    const session = await stripe.checkout.sessions.create({
      mode: frequency === 'monthly' ? 'subscription' : 'payment',
      line_items: [
        frequency === 'monthly'
            ? {
              price_data: {
                currency: 'usd',
                recurring: {
                  interval: 'month',
                },
                product_data: {
                  name: `Royalway Giving - ${category || 'General'}`,
                },
                unit_amount: amountInCents,
              },
              quantity: 1,
            }
            : {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: `Royalway Giving - ${category || 'General'}`,
                },
                unit_amount: amountInCents,
              },
              quantity: 1,
            },
      ],
      success_url: `${origin}/give/success`,
      cancel_url: `${origin}/give/cancel`,
      metadata: {
        category: String(category || ''),
        frequency: String(frequency || ''),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
        error instanceof Error
            ? error.message
            : 'Unable to create checkout session.';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}