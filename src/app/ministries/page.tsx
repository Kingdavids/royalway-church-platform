import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ministries } from '@/data/ministries';
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
    title: 'ministries',
    description:
        'We are powered by God to function in different ministries at Royalway Christian Centre.',
};

export default function MinistriesPage() {
    return (
        <PageTransition>
        <main className="pt-32 md:pt-36">
            <PageHero
                eyebrow="Ministries"
                title="A place to belong, serve, and grow in every season of life"
                description="Royalway ministries create space for worship, discipleship, care, service, and spiritual growth across different stages of life."
                primaryCta={{ label: 'Contact Us', href: '/contact' }}
                secondaryCta={{ label: 'View Events', href: '/events' }}
            />

            <div className="section-divider" />

            <section className="section-pad">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Ministry life
                        </p>

                        <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                            Serving people through community, care, and worship
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
                            Explore some of the ministry areas that help shape life at Royalway
                            and create opportunities for people to connect, serve, and grow.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                        {ministries.map((ministry) => (
                            <article key={ministry.slug} className="glass overflow-hidden">
                                <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
                                    <div className="relative h-56 sm:h-full">
                                        <img
                                            src={ministry.image}
                                            alt={ministry.title}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    <div className="p-6">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                            Ministry
                                        </p>

                                        <h3 className="mt-2 font-display text-2xl leading-snug md:text-3xl">
                                            {ministry.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
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
                                    Get involved
                                </p>

                                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                                    There’s room for you to grow and serve at Royalway
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                    Whether you’re looking to serve, connect in community, or find
                                    support and spiritual growth, there is a place for you here.
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