import Link from 'next/link';

export function GiveCTASection() {
    return (
        <section className="section-pad section-surface">
            <div className="container-shell">
                <div className="glass-strong relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_68%)]" />
                        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(111,15,29,0.28),transparent_68%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
                    </div>

                    <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                                Support the vision
                            </p>

                            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                                Partner with Royalway to help transform lives and build community.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                                Your giving helps support worship gatherings, discipleship, family care,
                                outreach, ministry development, and the day-to-day work of serving people well.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/give" className="gold-button">
                                    Give Securely
                                </Link>

                                <Link href="/contact" className="secondary-button">
                                    Ask a Question
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="glass p-5">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                    Ways your giving helps
                                </p>
                                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                                    <li>Worship and teaching gatherings</li>
                                    <li>Children and family ministry</li>
                                    <li>Care, support, and outreach</li>
                                    <li>Church growth and community impact</li>
                                </ul>
                            </div>

                            <div className="glass interactive-card p-5">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                                    Give with confidence
                                </p>
                                <p className="mt-4 text-sm leading-7 text-white/75">
                                    Use our secure giving experience to support the mission through one-time
                                    or recurring generosity.
                                </p>
                                <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#f0d77a]">
                                    Secure online giving
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}