type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  headingId?: string;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  headingId,
}: SectionHeaderProps) {
  return (
    <header className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2
        id={headingId}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {lede ? <p className="mt-4 leading-relaxed text-muted text-pretty">{lede}</p> : null}
    </header>
  );
}
