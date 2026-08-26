"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type Line = { kind: "cmd" | "out" | "gap"; text: string };

const PROMPT = "vinicius@portfolio:~$";

/** Rendered on the server too, so the transcript is readable without JS. */
const INITIAL_LINES: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: site.name },
  { kind: "out", text: site.role },
  { kind: "gap", text: "" },
  { kind: "cmd", text: "skills" },
  { kind: "out", text: "Networking   Security   Infrastructure   Automation" },
];

/** Static lookup table. Nothing is evaluated or executed. */
const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about     professional summary",
    "  skills    core technical areas",
    "  career    career timeline",
    "  contact   how to get in touch",
    "  clear     clear the terminal",
    "  help      show this list",
  ],
  about: [
    "Infrastructure and systems professional with 6+ years of experience in",
    "enterprise environments: networking, security, virtualization, containers",
    "and automation. Also an instructor and course translator.",
  ],
  skills: [
    "networking       Cisco (ISE, DNA, WLC), routing & switching, VLANs",
    "security         Palo Alto Networks, firewalls, VPN, authentication, NAC",
    "infrastructure   Linux, Windows Server, VMware, Proxmox, Hyper-V, load balancers, Veeam",
    "containers       Docker, Docker Swarm, Kubernetes, OpenShift",
    "automation       Ansible, Bash, Python",
    "operations       monitoring, enterprise systems, technical support",
  ],
  career: [
    "2020 - 2022   Technical Network Specialist        Exablack        internship",
    "2022 - 2025   Systems Administrator               Opikode         independent",
    "2025          Senior Technical Support Engineer   Mitel           full-time",
    "2025 - now    Senior IT Infrastructure Analyst    Icatu Seguros   full-time",
  ],
  contact: ["LinkedIn: see the link in the Contact section above."],
};

export default function TerminalFooter() {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);

  useEffect(() => {
    if (!interacted.current || !outputRef.current) return;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const input = raw.trim().slice(0, 64);
    if (!input) return;

    interacted.current = true;
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setValue("");

    if (input.toLowerCase() === "clear") {
      setLines([]);
      return;
    }

    const output = COMMANDS[input.toLowerCase()] ?? [
      `command not found: ${input}`,
      "type 'help' to see available commands",
    ];

    setLines((prev) => [
      ...prev,
      { kind: "gap", text: "" },
      { kind: "cmd", text: input },
      ...output.map((text): Line => ({ kind: "out", text })),
    ]);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    if (history.length === 0) return;
    event.preventDefault();

    const next =
      event.key === "ArrowUp"
        ? Math.min(historyIndex + 1, history.length - 1)
        : historyIndex - 1;

    setHistoryIndex(next);
    setValue(next < 0 ? "" : history[history.length - 1 - next]);
  };

  return (
    <footer className="border-t border-border">
      <div className="shell py-16 sm:py-20">
        <div
          className="overflow-hidden rounded-lg border border-border bg-surface"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-border-strong" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-border-strong" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-border-strong" aria-hidden="true" />
            <p className="ml-2 font-mono text-[11px] text-muted">bash — {site.name}</p>
          </div>

          <div
            ref={outputRef}
            role="log"
            aria-live="polite"
            aria-label="Terminal output"
            className="max-h-[22rem] overflow-y-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:px-6 sm:text-[13px]"
          >
            {lines.map((line, index) => {
              if (line.kind === "gap") return <div key={index} className="h-4" aria-hidden="true" />;
              if (line.kind === "cmd") {
                return (
                  <p key={index} className="break-words">
                    <span className="text-accent">{PROMPT}</span>{" "}
                    <span className="text-fg">{line.text}</span>
                  </p>
                );
              }
              return (
                <p key={index} className="whitespace-pre-wrap break-words text-muted">
                  {line.text}
                </p>
              );
            })}

            {/* Static trailing prompt for mobile / no-JS. */}
            <p className="mt-2 md:hidden">
              <span className="text-accent">{PROMPT}</span>{" "}
              <span className="text-border-strong" aria-hidden="true">
                _
              </span>
            </p>

            {/* Interactive input: desktop only. */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                run(value);
              }}
              className="mt-2 hidden items-center gap-2 md:flex"
            >
              <label htmlFor="terminal-input" className="text-accent">
                {PROMPT}
              </label>
              <input
                ref={inputRef}
                id="terminal-input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={onKeyDown}
                maxLength={64}
                autoComplete="off"
                spellCheck={false}
                aria-describedby="terminal-hint"
                className="flex-1 bg-transparent font-mono text-fg caret-accent outline-none"
              />
            </form>
          </div>

          <p
            id="terminal-hint"
            className="hidden border-t border-border px-4 py-2 font-mono text-[11px] text-muted sm:px-6 md:block"
          >
            Try <span className="text-fg">help</span> — commands run locally in your browser.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono">Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
