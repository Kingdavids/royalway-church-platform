import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { PageHero } from '@/components/PageHero';
import { PageTransition} from "@/components/PageTransition";
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn about the vision, mission, values, and leadership of Royalway Christian Centre.',
};


export default function AboutPage() {
    return (
        <PageTransition>
        <main className="pt-36 md:pt-40">
            <PageHero
                eyebrow="About Royalway"
                title="A Christ-centered church raising people who live boldly for God"
                description="Royalway Christian Centre is a place of worship, discipleship, care, and community."
                primaryCta={{ label: 'Plan a Visit', href: '/contact' }}
                secondaryCta={{ label: 'Support the Vision', href: '/give' }}
            />

            <section className="section-pad section-surface soft-edge-top">
                <div className="container-shell">
                    <div className="glass-strong px-6 py-10 md:px-10 md:py-14">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                About Royalway
                            </p>

                            <h1 className="mt-4 font-display text-4xl leading-[1.02] md:text-6xl">
                                A Christ-centered church raising people who live boldly for God
                            </h1>

                            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                                Royalway Christian Centre is a place of worship, discipleship,
                                care, and community — helping people encounter Jesus, grow in
                                faith, and walk in purpose, power, and dominion.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link href="/contact" className="gold-button">
                                    Plan a Visit
                                </Link>
                                <Link href="/give" className="secondary-button">
                                    Support the Vision
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            <section className="section-pad section-surface">
                <div className="container-shell">
                    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="glass p-6 md:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                                Who we are
                            </p>

                            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                                A church committed to transformation through God’s Word and the love of Christ
                            </h2>

                            <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                                {siteConfig.mission} Our desire is to see lives changed, families
                                strengthened, and people equipped to live out their faith with
                                confidence and spiritual maturity.
                            </p>

                            <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                                At Royalway, we believe church should be a place where people are
                                welcomed warmly, discipled intentionally, and encouraged to grow
                                into all God has called them to be.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="glass p-6 md:p-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                                    Vision
                                </p>
                                <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl">
                                    {siteConfig.vision}
                                </h3>
                            </div>

                            <div className="glass p-6 md:p-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                                    Tagline
                                </p>
                                <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl gold-text">
                                    {siteConfig.tagline}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            <section className="section-pad section-surface">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Our values
                        </p>

                        <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                            The culture we are building
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
                            These values shape how we worship, serve, lead, and care for people.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {siteConfig.values?.map((value) => (
                            <span
                                key={value}
                                className="rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/90"
                            >
                {value}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            <section className="section-pad section-surface">
                <div className="container-shell">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                            Pastoral leadership
                        </p>

                        <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                            Leadership with warmth, clarity, and spiritual conviction
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {siteConfig.pastors?.map((pastor) => (
                            <article key={pastor.name} className="glass lift-card p-6 md:p-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f0d77a]">
                                    {pastor.role}
                                </p>

                                <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl">
                                    {pastor.name}
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                                    {pastor.bio}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-pad soft-edge-bottom">
                <div className="container-shell">
                    <div className="glass-strong px-6 py-10 md:px-10 md:py-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                    Join us
                                </p>

                                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                                    We would love to welcome you to Royalway
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                    Whether you’re visiting for the first time, looking for a church
                                    family, or simply exploring faith, there is a place for you here.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 lg:justify-end">
                                <Link href="/contact" className="gold-button">
                                    Contact Us
                                </Link>
                                <Link href="/events" className="secondary-button">
                                    View Events
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