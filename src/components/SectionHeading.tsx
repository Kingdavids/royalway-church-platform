type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="gold-text text-xs font-bold uppercase tracking-[0.3em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="muted mt-4 text-base leading-8">{description}</p> : null}
    </div>
  );
}
