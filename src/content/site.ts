/**
 * SINGLE SOURCE OF TRUTH FOR ALL FACTUAL CONTENT.
 * Nothing here is invented. Unknown values are marked [CHANGE].
 */

export const site = {
  name: "Vinicius Luposeli",
  role: "Infrastructure & Network Engineer",
  headline: "Building, automating and securing modern infrastructure.",
  intro:
    "Infrastructure professional with 6+ years of experience working with enterprise environments, networking, security, virtualization and automation.",
  experienceBadge: "6+ years of experience",

  // [CHANGE] Replace with the real LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/CHANGE-ME",

  // [CHANGE] Replace with the production domain (used for canonical / Open Graph).
  url: "https://CHANGE-ME.example.com",

  // [CHANGE] Location intentionally omitted — not provided.
  // [CHANGE] Email intentionally omitted — do not invent one.
} as const;

export const navItems = [
  { id: "about", label: "About Me" },
  { id: "expertise", label: "Expertise" },
  { id: "career", label: "Career" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "I'm an infrastructure and systems professional with more than 6 years of experience in enterprise environments. My work covers firewalls and load balancers, Linux and Windows servers, Cisco-focused networking (ISE, DNA and WLC), virtualization with VMware, Proxmox and Hyper-V, security, containers (Docker, Swarm, Kubernetes, OpenShift) and automation with Ansible, Bash and Python.",
  "A large part of that experience comes from mission-critical environments. Working there taught me how to handle complex incidents, collaborate with multidisciplinary teams and keep services running safely and efficiently.",
  "Alongside my main work, I contribute to technical education as an instructor and course translator in networking and infrastructure.",
  "I keep learning continuously, with a focus on delivering solutions that are robust, secure and scalable.",
] as const;

export const aboutHighlights = [
  { term: "Experience", detail: "6+ years across enterprise infrastructure and systems" },
  { term: "Environments", detail: "Mission-critical operations and service continuity" },
  { term: "Ways of working", detail: "Complex incident troubleshooting with multidisciplinary teams" },
  { term: "Teaching", detail: "Instructor and course translator — networking and infrastructure" },
] as const;

export type IconName =
  | "network" | "shield" | "server" | "container" | "automation" | "operations";

export type ExpertiseArea = {
  title: string;
  icon: IconName;
  summary: string;
  items: readonly string[];
};

export const expertise: readonly ExpertiseArea[] = [
  {
    title: "Networking",
    icon: "network",
    summary:
      "Campus and enterprise networking on Cisco platforms, including access control and wireless management.",
    items: ["Cisco", "Cisco ISE", "Cisco DNA", "Cisco WLC", "Routing & Switching", "VLANs", "Network Infrastructure"],
  },
  {
    title: "Security",
    icon: "shield",
    summary:
      "Perimeter and network security: firewall policy, secure remote access and network access control.",
    items: ["Palo Alto Networks", "Firewalls", "Network Security", "VPN", "Authentication", "NAC"],
  },
  {
    title: "Infrastructure",
    icon: "server",
    summary:
      "Linux and Windows server environments, virtualization platforms, load balancing and backup.",
    items: ["Linux", "Windows Server", "VMware", "Proxmox", "Hyper-V", "Servers", "Load Balancers", "Veeam"],
  },
  {
    title: "Containers & Platforms",
    icon: "container",
    summary:
      "Containerized workloads and orchestration across Docker and Kubernetes-based platforms.",
    items: ["Docker", "Docker Swarm", "Kubernetes", "OpenShift"],
  },
  {
    title: "Automation",
    icon: "automation",
    summary:
      "Repeatable configuration and operational tasks automated with Ansible and scripting.",
    items: ["Ansible", "Bash", "Python"],
  },
  {
    title: "Systems & Operations",
    icon: "operations",
    summary:
      "Day-to-day administration, monitoring and support of enterprise systems.",
    items: ["Infrastructure Administration", "Monitoring", "Proactive Monitoring", "Enterprise Systems", "Technical Support"],
  },
];

export const careerStages = [
  "Infrastructure",
  "Systems",
  "Networking",
  "Enterprise Infrastructure & Security",
] as const;

export type CareerEntryData = {
  period: string;
  role: string;
  company: string;
  employment: string;
  stage: (typeof careerStages)[number];
  focus: readonly string[];
  current?: boolean;
};

/** Reverse chronological — current role first. */
export const career: readonly CareerEntryData[] = [
  {
    period: "October 2025 — Present",
    role: "Senior IT Infrastructure Analyst",
    company: "Icatu Seguros",
    employment: "Full-time",
    stage: "Enterprise Infrastructure & Security",
    focus: ["F5 BIG-IP", "Palo Alto Networks", "Firewalls"],
    current: true,
  },
  {
    period: "May 2025 — September 2025",
    role: "Senior Technical Support Engineer",
    company: "Mitel",
    employment: "Full-time",
    stage: "Networking",
    focus: ["Cisco Identity Services Engine (ISE)", "Cisco DNA", "Cisco WLC", "Cisco IOS"],
  },
  {
    period: "September 2022 — May 2025",
    role: "Systems Administrator",
    company: "Opikode",
    employment: "Independent",
    stage: "Systems",
    focus: ["Systems management", "Docker", "Proxmox", "Proactive monitoring", "Veeam"],
  },
  {
    period: "September 2020 — September 2022",
    role: "Technical Network Specialist",
    company: "Exablack",
    employment: "Internship",
    stage: "Infrastructure",
    focus: ["Infrastructure", "Network administration", "VLANs", "Cisco", "Switches", "Routers", "Technical support"],
  },
];

export const certifications = [
  { name: "CCNA", issuer: "Cisco" },
  { name: "TOEFL ITP", issuer: "ETS" },
] as const;

export const courses = [{ name: "Ansible", issuer: "School of Net" }] as const;

export const contact = {
  heading: "Let's connect.",
  message:
    "Interested in infrastructure, networking, security or technology? Feel free to connect.",
} as const;
