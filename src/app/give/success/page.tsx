import Link from 'next/link';

export default function GiveSuccessPage() {
  return (
      <main className="flex min-h-[70vh] items-center justify-center px-4 pt-32 pb-16">
        <div className="glass-strong max-w-2xl p-8 text-center md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Thank you
          </p>

          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Your gift has been received
          </h1>

          <p className="mt-4 text-base leading-8 text-white/72">
            Thank you for supporting the mission and ministry of Royalway Christian Centre.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="gold-button">
              Back Home
            </Link>
            <Link href="/about" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>
      </main>
  );
}