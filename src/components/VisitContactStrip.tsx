import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function VisitContactStrip() {
  return (
      <section className="pb-16 md:pb-24 soft-edge-bottom">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
              Plan your visit
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Join us in person and experience Royalway for yourself.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              Whether you’re new to church, returning to faith, or looking for a church
              family, we’d love to welcome you. Come worship with us and grow in community.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Location
                </p>
                <p className="mt-2 text-sm leading-7 text-white/85">
                  {siteConfig.address}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Service times
                </p>
                <div className="mt-2 space-y-2 text-sm leading-7 text-white/85">
                  {siteConfig.serviceTimes.slice(0, 2).map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="gold-button">
                Contact Us
              </Link>
              <Link href="/events" className="secondary-button">
                View Events
              </Link>
            </div>
          </div>

          <div className="glass p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
              Connect with us
            </p>

            <h3 className="mt-3 font-display text-2xl md:text-3xl">
              We’re here to help you take your next step.
            </h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-sm font-semibold text-[#f0d77a] hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Phone
                </p>
                <div className="mt-2 space-y-2">
                  {siteConfig.phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-sm font-semibold text-white/85 hover:text-[#f0d77a]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  First-time guest
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Reach out before service and we’ll help you know what to expect when you arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}