'use client';

import { useState } from 'react';
import { givingFunds } from '@/data/giving';

const presetAmounts = [25, 50, 100, 250];

export function GiveForm() {
  const [amount, setAmount] = useState('50');
  const [fund, setFund] = useState(givingFunds[0]?.id ?? 'offering');
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState<'one_time' | 'monthly'>('one_time');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, fund, email, frequency }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? 'Unable to start checkout.');
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass interactive-card rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-white/70">Gift amount (USD)</span>
          <input
            className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none"
            min="1"
            name="amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-white/70">Fund</span>
          <select
            className="rounded-2xl border border-white/12 bg-[#0a1626] px-4 py-3 text-white outline-none"
            name="fund"
            value={fund}
            onChange={(event) => setFund(event.target.value)}
          >
            {givingFunds.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm md:col-span-2">
          <span className="text-white/70">Email receipt address</span>
          <input
            className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${amount === String(preset) ? 'bg-[#fadb6f] text-[#08101d]' : 'border border-white/12 bg-white/5 text-white'}`}
            onClick={() => setAmount(String(preset))}
            type="button"
          >
            ${preset}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className={`rounded-full px-4 py-2 text-sm font-semibold ${frequency === 'one_time' ? 'bg-[#fadb6f] text-[#08101d]' : 'border border-white/12 bg-white/5 text-white'}`}
          type="button"
          onClick={() => setFrequency('one_time')}
        >
          One-time
        </button>
        <button
          className={`rounded-full px-4 py-2 text-sm font-semibold ${frequency === 'monthly' ? 'bg-[#fadb6f] text-[#08101d]' : 'border border-white/12 bg-white/5 text-white'}`}
          type="button"
          onClick={() => setFrequency('monthly')}
        >
          Monthly
        </button>
      </div>

      {error ? <p className="mt-5 text-sm text-red-300">{error}</p> : null}

      <button className="button-primary mt-8 w-full md:w-auto" disabled={loading} type="submit">
        {loading ? 'Redirecting...' : 'Continue to Secure Giving'}
      </button>
    </form>
  );
}
