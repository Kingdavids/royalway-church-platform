import Link from 'next/link';
import Image from 'next/image';

type SermonCardProps = {
    title: string;
    date: string;
    excerpt: string;
    thumbnail: string;
    href: string;
};

export function SermonCard({
                               title,
                               date,
                               excerpt,
                               thumbnail,
                               href,
                           }: SermonCardProps) {
    return (
        <article className="glass interactive-card overflow-hidden">
            <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                <div className="relative h-52 sm:h-full sm:min-h-[220px]">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-5 md:p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        {date}
                    </p>

                    <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                        {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/68">
                        {excerpt}
                    </p>

                    <div className="mt-4">
                        <Link
                            href={href}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0d77a] hover:text-white"
                        >
                            Watch sermon
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}