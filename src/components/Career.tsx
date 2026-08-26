import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { career, careerStages, type CareerEntryData } from "@/content/site";

function ProgressionStrip() {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em]">
      {careerStages.map((stage, index) => (
        <li key={stage} className="flex items-center gap-3">
          <span className={index === careerStages.length - 1 ? "text-accent" : "text-muted"}>
            {stage}
          </span>
          {index < careerStages.length - 1 ? (
            <span className="text-border-strong" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function CareerEntry({ entry }: { entry: CareerEntryData }) {
  return (
    <div className="relative border-l border-border pb-12 pl-6 sm:pl-8">
      <span
        aria-hidden="true"
        className={`absolute -left-[4px] top-1.5 h-[7px] w-[7px] rounded-full ring-4 ring-bg ${
          entry.current ? "bg-accent" : "bg-border-strong"
        }`}
      />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-mono text-xs tracking-wide text-muted">{entry.period}</p>
        {entry.current ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Current
          </span>
        ) : null}
      </div>

      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight sm:text-xl">
        {entry.role}
      </h3>

      <p className="mt-1.5 text-sm text-muted">
        <span className="text-fg">{entry.company}</span>
        <span aria-hidden="true"> · </span>
        {entry.employment}
      </p>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Focus</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {entry.focus.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Career() {
  return (
    <section id="career" aria-labelledby="career-heading" className="border-t border-border">
      <div className="shell section-y">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="Career"
            headingId="career-heading"
            title="A progression through infrastructure."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8 border-y border-border py-4">
          <ProgressionStrip />
        </Reveal>

        <ol className="mt-12">
          {career.map((entry, index) => (
            <li key={`${entry.company}-${entry.role}`}>
              <Reveal delay={index * 70}>
                <CareerEntry entry={entry} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
