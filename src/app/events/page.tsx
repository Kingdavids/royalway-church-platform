import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { events } from '@/data/events';
import { PageTransition  } from "@/components/PageTransition";

export const metadata: Metadata = {
    title: 'event',
    description:
        'Check our upcoming events at Royalway Christian Centre.',
};

export default function EventsPage() {
    const featured = events?.[0];
    const upcoming = events?.slice(1) ?? [];

    return (
        <PageTransition>
        <main className="pt-32 md:pt-36">
            <PageHero
                eyebrow="Events"
                title="Gather for worship, prayer, and community"
                description="Stay connected with weekly services, special gatherings, ministry moments, and church-wide events at Royalway Christian Centre."
                primaryCta={{ label: 'Plan a Visit', href: '/contact' }}
                secondaryCta={{ label: 'Watch Online', href: '/watch' }}
            />

            {featured && (
                <>
                    <div className="section-divider" />

                    <section className="section-pad">
                        <div className="container-shell">
                            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                                <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="h-[300px] w-full object-cover md:h-[420px]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                                        Featured event
                                    </p>

                                    <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/45">
                                        {featured.date} • {featured.time}
                                    </p>

                                    <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                                        {featured.title}
                                    </h2>

                                    <p className="mt-4 max-w-xl text-sm leading-8 text-white/72 md:text-base">
                                        {featured.description}
                                    </p>

                                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                            Location
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/85">
                                            {featured.location}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <Link href={featured.href} className="gold-button">
                                            Event Details
                                        </Link>
                                        <Link href="/contact" className="secondary-button">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <div className="section-divider" />

            <section className="section-pad">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Upcoming events
                        </p>

                        <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                            What’s happening at Royalway
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
                            Join upcoming gatherings and stay engaged with the life of the church.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 xl:grid-cols-2">
                        {upcoming.map((event) => (
                            <article key={event.slug} className="glass overflow-hidden">
                                <div className="grid gap-0 sm:grid-cols-[120px_1fr]">
                                    <div className="flex flex-col items-center justify-center border-b border-white/10 bg-white/[0.04] px-4 py-6 text-center sm:border-b-0 sm:border-r">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      {event.month}
                    </span>
                                        <span className="mt-1 text-3xl font-semibold text-[#f0d77a]">
                      {event.day}
                    </span>
                                    </div>

                                    <div className="p-5 md:p-6">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                            {event.time} • {event.locationShort}
                                        </p>

                                        <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                                            {event.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/68">
                                            {event.description}
                                        </p>

                                        <div className="mt-4">
                                            <Link
                                                href={event.href}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0d77a] hover:text-white"
                                            >
                                                Learn more
                                                <span aria-hidden="true">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-16 md:pb-24">
                <div className="container-shell">
                    <div className="glass p-6 md:p-8">
                        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                    Join us this week
                                </p>

                                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                                    There’s a place for you at Royalway
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                    Whether you’re attending for the first time or returning again,
                                    we’d love to welcome you into worship, fellowship, and community.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 lg:justify-end">
                                <Link href="/contact" className="gold-button">
                                    Contact Us
                                </Link>
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