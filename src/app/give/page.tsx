'use client';


import Link from 'next/link';
import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import {PageTransition} from "@/components/PageTransition";

const presetAmounts = [25, 50, 100, 250, 500];

const categories = [
  { value: 'tithe', label: 'Tithe' },
  { value: 'offering', label: 'Offering' },
  { value: 'missions', label: 'Missions' },
  { value: 'building', label: 'Building Fund' },
  { value: 'benevolence', label: 'Benevolence' },
];


export default function GivePage() {
  const [frequency, setFrequency] = useState<'one_time' | 'monthly'>('one_time');
  const [category, setCategory] = useState('tithe');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const finalAmount =
      customAmount.trim() !== ''
          ? Number(customAmount)
          : selectedAmount ?? 0;

  async function handleGive() {
    if (!finalAmount || Number.isNaN(finalAmount) || finalAmount <= 0) {
      alert('Please enter or select a valid amount.');
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          frequency,
          category,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to start checkout.');
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error('Missing checkout URL.');
    } catch (error) {
      const message =
          error instanceof Error ? error.message : 'Something went wrong.';
      alert(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <PageTransition>
      <main className="pt-32 md:pt-36">
        <PageHero
            eyebrow="Give"
            title="Support the vision with secure, intentional generosity"
            description="Your giving helps support worship gatherings, discipleship, outreach, family care, and the ongoing work of ministry at Royalway Christian Centre."
            primaryCta={{ label: 'Give Now', href: '#give-form' }}
            secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        />

        <div className="section-divider" />

        <section id="give-form" className="section-pad">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="glass p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Why we give
                </p>

                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                  Giving is part of worship, service, and impact
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                  Your generosity helps Royalway serve people with excellence,
                  strengthen families, support ministry programs, and create spaces
                  where lives can be transformed through God’s word and the love of Christ.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    Worship gatherings and ministry operations
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    Children, family, and discipleship initiatives
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    Outreach, care, and community support
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Secure giving
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    This page is designed to connect to Stripe Checkout for a simple,
                    secure donation flow with one-time and recurring options.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Secure
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/85">
                      Stripe Checkout
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Flexible
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/85">
                      One-time or Monthly
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Purposeful
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/85">
                      Category-Based Giving
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-strong p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Give now
                </p>

                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                  Choose how you want to give
                </h2>

                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Frequency
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setFrequency('one_time')}
                        className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition duration-200 ${
                            frequency === 'one_time'
                                ? 'border-[#f0d77a] bg-[#f0d77a]/10 text-white'
                                : 'border-white/10 bg-white/5 text-white/75 hover:bg-white/10'
                        }`}
                    >
                      One Time
                    </button>

                    <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition duration-200 ${
                            frequency === 'monthly'
                                ? 'border-[#f0d77a] bg-[#f0d77a]/10 text-white'
                                : 'border-white/10 bg-white/5 text-white/75 hover:bg-white/10'
                        }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <label className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Category
                  </label>

                  <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none"
                  >
                    {categories.map((item) => (
                        <option
                            key={item.value}
                            value={item.value}
                            className="bg-[#14070f] text-white"
                        >
                          {item.label}
                        </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8">
                  <p className="input-polish mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none">
                    Select amount
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {presetAmounts.map((amount) => {
                      const active = customAmount === '' && selectedAmount === amount;

                      return (
                          <button
                              key={amount}
                              type="button"
                              onClick={() => {
                                setSelectedAmount(amount);
                                setCustomAmount('');
                              }}
                              className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition duration-200 ${
                                  active
                                      ? 'border-[#f0d77a] bg-[#f0d77a]/10 text-white'
                                      : 'border-white/10 bg-white/5 text-white/75 hover:bg-white/10'
                              }`}
                          >
                            ${amount}
                          </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8">
                  <label
                      htmlFor="customAmount"
                      className="input-polish w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-8 pr-4 text-sm text-white outline-none placeholder:text-white/35"
                  >
                    Custom amount
                  </label>

                  <div className="mt-3 relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                    $
                  </span>
                    <input
                        id="customAmount"
                        type="number"
                        min="1"
                        step="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-8 pr-4 text-sm text-white outline-none placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        Summary
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        {frequency === 'monthly' ? 'Monthly giving' : 'One-time giving'} •{' '}
                        {categories.find((item) => item.value === category)?.label}
                      </p>
                    </div>

                    <p className="font-display text-2xl text-white">
                      ${finalAmount > 0 ? finalAmount : 0}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                      type="button"
                      onClick={handleGive}
                      disabled={isLoading}
                      className="gold-button w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? 'Redirecting...' : 'Continue to Secure Checkout'}
                  </button>
                </div>

                <div className="mt-4 space-y-2 text-center">
                  <p className="text-xs leading-6 text-white/50">
                    You’ll be redirected to a secure Stripe-hosted checkout experience.
                  </p>
                  <p className="text-xs leading-6 text-white/40">
                    Royalway does not store your card details on this site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="glass p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  One-time giving
                </p>
                <h3 className="mt-3 font-display text-2xl leading-snug">
                  Support a need today
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Make a one-time gift toward tithe, offering, outreach, missions,
                  benevolence, or ministry support.
                </p>
              </div>

              <div className="glass p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Recurring giving
                </p>
                <h3 className="mt-3 font-display text-2xl leading-snug">
                  Give consistently
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Set up monthly giving to support the ongoing work of ministry with
                  consistency and simplicity.
                </p>
              </div>

              <div className="glass-strong p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Need help?
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-snug">
                    We’re here to guide you
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    If you have questions about giving, donation categories, or need
                    assistance, our team is ready to help you take the next step.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="gold-button">
                    Contact Us
                  </Link>
                  <Link href="/about" className="secondary-button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </PageTransition>
  );
}