import type { IconName } from "@/content/site";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const icons: Record<IconName, React.ReactElement> = {
  network: (
    <svg {...base}>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="4.5" cy="19" r="2" />
      <circle cx="19.5" cy="19" r="2" />
      <path d="M12 6.5v4M12 10.5 5.6 17.4M12 10.5l6.4 6.9M6.5 19h11" />
    </svg>
  ),
  shield: (
    <svg {...base}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8-7 9.5-4.1-1.5-7-5.2-7-9.5V6l7-3Z" />
      <path d="M9.5 12.2l1.9 1.9 3.6-3.8" />
    </svg>
  ),
  server: (
    <svg {...base}>
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M10.5 7h4M10.5 17h4" />
    </svg>
  ),
  container: (
    <svg {...base}>
      <path d="M12 3l8 4.3v9.4L12 21l-8-4.3V7.3L12 3Z" />
      <path d="M4 7.3l8 4.3 8-4.3M12 11.6V21" />
    </svg>
  ),
  automation: (
    <svg {...base}>
      <path d="M20 12a8 8 0 1 1-3.1-6.3" />
      <path d="M20.5 4.5V9H16" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  ),
  operations: (
    <svg {...base}>
      <path d="M3 13h3.5l2-5 3 9 2.5-6 1.7 2h5.3" />
    </svg>
  ),
};
