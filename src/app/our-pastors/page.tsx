import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/data/site';

export default function OurPastorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="Shepherds serving with vision, compassion, and conviction."
        description="Use this page to replace the scaffold bios with the full official biographies and family photos from the ministry."
      />

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {siteConfig.pastors.map((pastor) => (
            <article key={pastor.name} className="glass rounded-[1.75rem] p-8">
              <p className="gold-text text-xs font-bold uppercase tracking-[0.28em]">{pastor.role}</p>
              <h2 className="mt-3 text-3xl font-bold">{pastor.name}</h2>
              <p className="muted mt-4 text-sm leading-8">{pastor.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
