import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export default function WatchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Watch"
        title="Join the worship experience online."
        description="Use this page for YouTube Live, Facebook Live, sermon playlists, and featured video embeds."
      />

      <section className="section-pad">
        <div className="container-shell">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="aspect-video rounded-[1.5rem] border border-white/10 bg-black/40" />
            <p className="muted mt-6 max-w-2xl text-sm leading-8">
              Drop in the official livestream embed code or YouTube video player here. The visual shell is already in place.
            </p>
            <div className="mt-6">
              <Link href="/sermons" className="button-secondary">
                Browse sermon archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
