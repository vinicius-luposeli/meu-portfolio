import { site } from "@/content/site";

type LinkedInLinkProps = {
  variant?: "solid" | "outline" | "quiet";
  className?: string;
};

const styles = {
  solid:
    "bg-accent text-bg hover:bg-accent/90 border border-transparent font-medium",
  outline:
    "border border-border bg-surface text-fg hover:border-border-strong hover:bg-surface-2",
  quiet:
    "border border-border text-muted hover:border-accent/50 hover:text-fg",
} as const;

export default function LinkedInLink({
  variant = "solid",
  className = "",
}: LinkedInLinkProps) {
  return (
    <a
      href={site.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.name} on LinkedIn (opens in a new tab)`}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      LinkedIn
      <span aria-hidden="true">↗</span>
    </a>
  );
}
