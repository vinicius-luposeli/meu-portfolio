import LinkedInLink from "@/components/LinkedInLink";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

const domains = ["Networking", "Security", "Infrastructure", "Automation"];

function Topology() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-border-strong)" strokeWidth="1">
        <path d="M70 60 210 40M210 40 340 100M70 60 150 170M150 170 280 210M340 100 280 210M150 170 70 250M280 210 350 250" />
      </g>
      <g fill="var(--color-surface-2)" stroke="var(--color-border-strong)">
        <circle cx="70" cy="60" r="4" />
        <circle cx="340" cy="100" r="4" />
        <circle cx="280" cy="210" r="4" />
        <circle cx="70" cy="250" r="4" />
        <circle cx="350" cy="250" r="4" />
      </g>
      <g fill="var(--color-accent)" opacity="0.55">
        <circle cx="210" cy="40" r="4.5" />
        <circle cx="150" cy="170" r="4.5" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <Topology />

      <div className="shell relative py-24 sm:py-32 lg:py-40">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.experienceBadge}
          </p>

          <h1
            id="hero-heading"
            className="mt-8 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </h1>

          <p className="mt-4 font-mono text-sm text-accent sm:text-base">{site.role}</p>

          <p className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug text-balance sm:text-3xl">
            {site.headline}
          </p>

          <p className="mt-6 max-w-[62ch] leading-relaxed text-muted text-pretty">{site.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkedInLink variant="solid" />
            <a
              href="#career"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              See career timeline
            </a>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-16 border-t border-border pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {domains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
