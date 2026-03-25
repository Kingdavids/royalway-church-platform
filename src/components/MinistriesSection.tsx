import Link from 'next/link';
import { ministries } from '@/data/ministries';

export function MinistriesSection() {
    return (
        <section className="section-pad section-surface">
            <div className="container-shell">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                            Life at Royalway
                        </p>
                        <h2 className="section-title mt-2 font-display">
                            Ministries that help people grow, belong, and serve
                        </h2>
                        <p className="section-copy">
                            From family life to worship, care, and children’s discipleship,
                            Royalway creates spaces for people to encounter Christ and build community.
                        </p>
                    </div>

                    <Link href="/ministries" className="secondary-button">
                        Explore Ministries
                    </Link>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {ministries.map((ministry) => (
                        <article
                            key={ministry.slug}
                            className="glass lift-card group overflow-hidden"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={ministry.image}
                                    alt={ministry.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                                    Ministry
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="font-display text-2xl leading-snug">
                                    {ministry.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/68">
                                    {ministry.description}
                                </p>

                                <div className="mt-5">
                                    <Link
                                        href={ministry.href}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0d77a] hover:text-white"
                                    >
                                        Learn more
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}