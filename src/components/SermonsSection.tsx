import Link from 'next/link';
import { sermons } from '@/data/sermons';
import { SermonCard } from '@/components/SermonCard';

export function SermonsSection() {
    const featured = sermons[0];
    const recent = sermons.slice(1, 4);

    return (
        <section className="section-pad section-surface soft-edge-top">
            <div className="container-shell">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                            Latest messages
                        </p>
                        <h2 className="section-title font-display mt-2">
                            Hear the Word. Grow in faith.
                        </h2>
                        <p className="section-copy">
                            Watch recent teachings, revisit life-giving messages, and stay rooted in God’s word through every season.
                        </p>
                    </div>

                    <Link href="/sermons" className="secondary-button">
                        View All Sermons
                    </Link>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <article className="glass-strong lift-card overflow-hidden">
                        <div className="relative aspect-[16/9] overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_35%)]" />
                            <img
                                src={featured.thumbnail}
                                alt={featured.title}
                                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                                Featured Sermon
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                                {featured.date}
                            </p>

                            <h3 className="mt-3 font-display text-3xl leading-tight">
                                {featured.title}
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                                {featured.excerpt}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href={featured.href} className="gold-button">
                                    Watch Message
                                </Link>
                                <Link href="/watch" className="secondary-button">
                                    Watch Live
                                </Link>
                            </div>
                        </div>
                    </article>

                    <div className="grid gap-5">
                        {recent.map((sermon) => (
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
            </div>
        </section>
    );
}