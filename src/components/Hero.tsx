'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_24%)]" />
          <div className="hero-float absolute left-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(111,15,29,0.22),transparent_65%)] blur-3xl" />
          <div className="hero-float-delayed absolute right-[-8%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,8,0.12),rgba(7,4,8,0.28)_35%,rgba(7,4,8,0.1))]" />
        </div>

        <div className="container-shell relative">
          <div className="grid min-h-[82vh] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f0d77a]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
                  Welcome to Royalway Christian Centre
                </p>
              </div>

              <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.96] md:text-7xl xl:text-[5.4rem]">
                <span className="gold-text">{siteConfig.headline}</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-xl">
                {siteConfig.tagline} We are a house of worship, discipleship, care,
                and bold faith — raising people who live with purpose, power, and dominion.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/watch" className="gold-button button-lift">
                  Watch Sermons
                </Link>
                <Link href="/contact" className="secondary-button button-lift">
                  Join Us Sunday
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="glass interactive-card p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Vision
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/86">
                    {siteConfig.vision}
                  </p>
                </div>

                <div className="glass interactive-card p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Service Time
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/86">
                    {siteConfig.serviceTimes?.[0] ?? 'Sunday Worship'}
                  </p>
                </div>

                <div className="glass interactive-card p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Location
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/86">
                    Ellicott City, Maryland
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: 'easeOut', delay: 0.12 }}
                className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_40%)] blur-2xl" />

              <div className="glass-strong overflow-hidden rounded-[2rem]">
                <div className="border-b border-white/10 px-6 py-5 md:px-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    This week at Royalway
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-display text-3xl leading-tight md:text-4xl">
                    Experience worship, prayer, and practical teaching rooted in God’s Word
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                    Whether you are visiting for the first time or looking for a church family,
                    Royalway is a place to encounter Christ, grow in community, and walk boldly in faith.
                  </p>

                  <div className="mt-7 grid gap-3">
                    {siteConfig.serviceTimes?.map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 transition hover:bg-white/[0.07]"
                        >
                          {item}
                        </div>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        Lead Pastor
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-snug">
                        {siteConfig.pastors?.[0]?.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {siteConfig.pastors?.[0]?.bio}
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        Connect
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-snug">
                        Visit or connect with us
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {siteConfig.address}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-[#f0d77a]">
                        {siteConfig.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}