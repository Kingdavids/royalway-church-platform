import Link from 'next/link';
import { events } from '@/data/events';

export function EventsSection() {
    const featured = events[0];
    const upcoming = events.slice(1, 4);

    return (
        <section className="section-pad section-surface">
            <div className="container-shell">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                            Upcoming gatherings
                        </p>
                        <h2 className="section-title mt-2 font-display">
                            Worship, fellowship, and community moments
                        </h2>
                        <p className="section-copy">
                            Stay connected with services, special gatherings, prayer meetings,
                            and community events happening at Royalway.
                        </p>
                    </div>

                    <Link href="/events" className="secondary-button">
                        View All Events
                    </Link>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    <article className="glass-strong lift-card overflow-hidden">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                                Featured Event
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/50">
                                <span>{featured.date}</span>
                                <span>•</span>
                                <span>{featured.time}</span>
                            </div>

                            <h3 className="mt-3 font-display text-3xl leading-tight">
                                {featured.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                {featured.description}
                            </p>

                            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                    Location
                                </p>
                                <p className="mt-2 text-sm text-white/85">{featured.location}</p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href={featured.href} className="gold-button">
                                    Learn More
                                </Link>
                                <Link href="/contact" className="secondary-button">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </article>

                    <div className="grid gap-5">
                        {upcoming.map((event) => (
                            <article
                                key={event.slug}
                                className="glass interactive-card lift-card p-5"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                    <div className="flex w-fit min-w-[88px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      {event.month}
                    </span>
                                        <span className="mt-1 text-3xl font-bold text-[#f0d77a]">
                      {event.day}
                    </span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
                                            <span>{event.time}</span>
                                            <span>•</span>
                                            <span>{event.locationShort}</span>
                                        </div>

                                        <h3 className="mt-2 font-display text-2xl leading-snug">
                                            {event.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/68">
                                            {event.description}
                                        </p>

                                        <div className="mt-5">
                                            <Link
                                                href={event.href}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0d77a] hover:text-white"
                                            >
                                                Event details
                                                <span aria-hidden="true">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}