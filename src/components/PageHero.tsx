import Link from 'next/link';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
                           eyebrow,
                           title,
                           description,
                           primaryCta,
                           secondaryCta,
                         }: PageHeroProps) {
  return (
      <section className="section-pad">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
              {eyebrow}
            </p>

            <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {primaryCta && (
                      <Link href={primaryCta.href} className="gold-button">
                        {primaryCta.label}
                      </Link>
                  )}

                  {secondaryCta && (
                      <Link href={secondaryCta.href} className="secondary-button">
                        {secondaryCta.label}
                      </Link>
                  )}
                </div>
            )}
          </div>
        </div>
      </section>
  );
}