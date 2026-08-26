import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { aboutHighlights, aboutParagraphs } from "@/content/site";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border">
      <div className="shell section-y">
        <Reveal>
          <SectionHeader
            index="01"
            eyebrow="About"
            headingId="about-heading"
            title="Infrastructure, systems and networking."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="max-w-[68ch] space-y-5 leading-relaxed text-muted text-pretty">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
              {aboutHighlights.map((highlight) => (
                <div key={highlight.term} className="px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {highlight.term}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{highlight.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
