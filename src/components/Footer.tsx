import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
      <footer className="border-t border-white/10 pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/45">
                Royalway Christian Centre
              </p>

              <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                {siteConfig.tagline}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                {siteConfig.mission}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/about" className="secondary-button">
                  About Us
                </Link>
                <Link href="/give" className="gold-button">
                  Give Securely
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Visit
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  {siteConfig.address}
                </p>

                <div className="mt-4 space-y-2 text-sm text-white/70">
                  {siteConfig.serviceTimes?.map((item) => (
                      <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="glass p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Connect
                </p>

                <div className="mt-3 space-y-2 text-sm">
                  {siteConfig.phoneNumbers?.map((phone) => (
                      <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-white/80 transition hover:text-[#f0d77a]"
                      >
                        {phone}
                      </a>
                  ))}

                  <a
                      href={`mailto:${siteConfig.email}`}
                      className="block text-white/80 transition hover:text-[#f0d77a]"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/72">
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                  <Link href="/sermons" className="hover:text-white">
                    Sermons
                  </Link>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                  <Link href="/give" className="hover:text-white">
                    Give
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}