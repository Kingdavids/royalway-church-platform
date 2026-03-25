type Ministry = {
  name: string;
  summary: string;
};

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <article className="glass interactive-card rounded-[1.75rem] p-6">
      <h3 className="text-2xl font-bold">{ministry.name}</h3>
      <p className="muted mt-4 text-sm leading-7">{ministry.summary}</p>
    </article>
  );
}
