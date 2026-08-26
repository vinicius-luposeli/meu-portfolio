import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { certifications, courses } from "@/content/site";

type Credential = { name: string; issuer: string };

function CertificationItem({
  credential,
  kind,
}: {
  credential: Credential;
  kind: "Certification" | "Course";
}) {
  return (
    <article className="flex h-full items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-border-strong hover:bg-surface-2">
      <span className="mt-0.5 text-accent" aria-hidden="true">
        {kind === "Certification" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="9.5" r="5.5" />
            <path d="M8.5 14.5 7 21l5-2.4L17 21l-1.5-6.5" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5.5h7a2 2 0 0 1 2 2V20a2 2 0 0 0-2-2H4V5.5ZM20 5.5h-7a2 2 0 0 0-2 2V20a2 2 0 0 1 2-2h7V5.5Z" />
          </svg>
        )}
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{kind}</p>
        <h4 className="mt-1 font-display font-semibold tracking-tight">{credential.name}</h4>
        <p className="mt-0.5 text-sm text-muted">{credential.issuer}</p>
      </div>
    </article>
  );
}

export default function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-heading" className="border-t border-border">
      <div className="shell section-y">
        <Reveal>
          <SectionHeader
            index="04"
            eyebrow="Learning"
            headingId="learning-heading"
            title="Learning & certifications."
            lede="Completed certifications and training. Continuous learning is part of how I work."
          />
        </Reveal>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Certifications
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((credential, index) => (
                <li key={credential.name}>
                  <Reveal delay={index * 60} className="h-full">
                    <CertificationItem credential={credential} kind="Certification" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Courses</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((credential, index) => (
                <li key={credential.name}>
                  <Reveal delay={index * 60} className="h-full">
                    <CertificationItem credential={credential} kind="Course" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
