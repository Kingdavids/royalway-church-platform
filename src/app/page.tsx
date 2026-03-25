import { Hero } from '@/components/Hero';
import { SermonsSection } from '@/components/SermonsSection';
import { EventsSection } from '@/components/EventsSection';
import { MinistriesSection } from '@/components/MinistriesSection';
import { GiveCTASection } from '@/components/GiveCTASection';
import { VisitContactStrip } from '@/components/VisitContactStrip';
import { PageTransition } from '@/components/PageTransition';

export default function HomePage() {
    return (
        <PageTransition>
            <div>
                <Hero />
                <SermonsSection />
                <EventsSection />
                <MinistriesSection />
                <GiveCTASection />
                <VisitContactStrip />
            </div>
        </PageTransition>
    );
}