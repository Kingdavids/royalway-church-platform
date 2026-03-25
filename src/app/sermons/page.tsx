import type { Metadata } from 'next';
import Link from 'next/link';
import { sermons } from '@/data/sermons';
import { SermonCard } from '@/components/SermonCard';
import { PageTransition  } from "@/components/PageTransition";

export const metadata: Metadata = {
    title: 'sermon',
    description:
        'Listen to our latest sermons and watch our live stream. Stay connected with our sermon archive and watch our live stream.',
};

export default function SermonsPage() {
    const featured = sermons?.[0];
    const archive = sermons?.slice(1) ?? [];

    return (
        <PageTransition>
        <main className="pt-32 md:pt-36">
            <section className="section-pad">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Sermons
                        </p>

                        <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                            Messages that strengthen faith and shape everyday life
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                            Revisit recent teachings, stay grounded in God’s word, and explore
                            messages designed to help you grow in Christ with clarity,
                            conviction, and hope.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link href="/watch" className="gold-button">
                                Watch Live
                            </Link>
                            <Link href="/contact" className="secondary-button">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {featured && (
                <section className="pb-14">
                    <div className="container-shell">
                        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                                <img
                                    src={featured.thumbnail}
                                    alt={featured.title}
                                    className="h-[300px] w-full object-cover md:h-[420px]"
                                />
                            </div>

                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                                    Featured sermon
                                </p>

                                <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/45">
                                    {featured.date}
                                </p>

                                <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                                    {featured.title}
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-8 text-white/72 md:text-base">
                                    {featured.excerpt}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link href={featured.href} className="gold-button">
                                        Watch Message
                                    </Link>
                                    <Link href="/events" className="secondary-button">
                                        Upcoming Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className="section-divider" />

            <section className="section-pad">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Message archive
                        </p>

                        <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                            Explore recent teachings
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
                            Browse recent messages and update each item with Royalway’s real
                            sermon links, thumbnails, and video destinations.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 xl:grid-cols-2">
                        {archive.map((sermon) => (
                            <SermonCard
                                key={sermon.slug}
                                title={sermon.title}
                                date={sermon.date}
                                excerpt={sermon.excerpt}
                                thumbnail={sermon.thumbnail}
                                href={sermon.href}
                            />
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
                                    Stay connected
                                </p>

                                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                                    Join us live or worship with us in person
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                    Sermons are one part of the Royalway experience. Join us for
                                    worship, prayer, and community as we grow together in God’s word.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 lg:justify-end">
                                <Link href="/watch" className="gold-button">
                                    Go to Watch Page
                                </Link>
                                <Link href="/contact" className="secondary-button">
                                    Plan a Visit
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