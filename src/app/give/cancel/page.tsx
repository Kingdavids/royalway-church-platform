import Link from 'next/link';

export default function GiveCancelPage() {
  return (
      <main className="flex min-h-[70vh] items-center justify-center px-4 pt-32 pb-16">
        <div className="glass max-w-2xl p-8 text-center md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Checkout canceled
          </p>

          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Your giving session was not completed
          </h1>

          <p className="mt-4 text-base leading-8 text-white/72">
            You can return to the Give page anytime and continue when you’re ready.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/give" className="gold-button">
              Return to Give
            </Link>
            <Link href="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
  );
}