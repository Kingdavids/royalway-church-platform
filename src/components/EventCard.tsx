type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
};

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="glass interactive-card rounded-[1.75rem] p-5">
      <p className="gold-text text-xs font-bold uppercase tracking-[0.25em]">Upcoming</p>
      <h3 className="mt-3 text-2xl font-bold">{event.title}</h3>
      <p className="mt-2 text-sm text-white/70">{event.date}</p>
      <p className="text-sm text-white/70">{event.location}</p>
      <p className="muted mt-4 text-sm leading-7">{event.description}</p>
    </article>
  );
}
