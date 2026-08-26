import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { icons } from "@/components/icons";
import { expertise, type ExpertiseArea } from "@/content/site";

function ExpertiseCard({ area }: { area: ExpertiseArea }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-strong hover:bg-surface-2">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-70"
      />
      <div className="flex items-center gap-3">
        <span className="text-accent transition-transform duration-200 group-hover:-translate-y-0.5">
          {icons[area.icon]}
        </span>
        <h3 className="font-display text-base font-semibold tracking-tight">{area.title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{area.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {area.items.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="border-t border-border">
      <div className="shell section-y">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Expertise"
            headingId="expertise-heading"
            title="Engineering capability areas."
            lede="The technical domains I work in day to day, grouped by the kind of problem they solve."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, index) => (
            <li key={area.title}>
              <Reveal delay={index * 60} className="h-full">
                <ExpertiseCard area={area} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
