import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/data/site';
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: 'contact',
  description:
      'To know more about Royalway Christian Centre, contact us via email or give us a call.',
};

export default function ContactPage() {
  return (
      <PageTransition>
      <main className="pt-32 md:pt-36">
        <PageHero
            eyebrow="Contact"
            title="We would love to welcome you and help you get connected"
            description="Whether you’re planning your first visit, looking for a church family, or simply have a question, we’re here to help."
            primaryCta={{ label: 'Email Us', href: `mailto:${siteConfig.email}` }}
            secondaryCta={{ label: 'View Events', href: '/events' }}
        />

        <div className="section-divider" />

        <section className="section-pad">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            <div className="glass p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                Visit us
              </p>

              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                Come worship with us in person
              </h2>

              <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                {siteConfig.address}
              </p>

              <div className="mt-6 space-y-3">
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
                    {siteConfig.phoneNumbers?.map((phone) => (
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
              </div>
            </div>

            <div className="glass p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                Service times
              </p>

              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                Join us this week
              </h2>

              <div className="mt-6 space-y-3">
                {siteConfig.serviceTimes?.map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85"
                    >
                      {item}
                    </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  First-time guest
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Reach out before service and we’ll help you know what to expect
                  when you arrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container-shell">
            <div className="glass p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    Need more help?
                  </p>

                  <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                    We’re here to help you take your next step
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                    Send us an email, give us a call, or visit during service.
                    We’d love to connect with you.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <a
                      href={`mailto:${siteConfig.email}`}
                      className="gold-button"
                  >
                    Send Email
                  </a>
                  <Link href="/about" className="secondary-button">
                    About Royalway
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