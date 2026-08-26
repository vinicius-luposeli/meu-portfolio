"use client";

import { useEffect, useState } from "react";
import LinkedInLink from "@/components/LinkedInLink";
import { navItems, site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navItems.map((item) => item.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface font-mono text-[11px] text-accent transition-colors group-hover:border-border-strong">
            VL
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {site.name}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-block px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <LinkedInLink variant="quiet" className="hidden px-3 py-1.5 md:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg transition-colors hover:border-border-strong md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
      >
        <ul className="shell flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "true" : undefined}
                className={`flex min-h-12 items-center border-l-2 pl-4 text-sm transition-colors ${
                  active === item.id
                    ? "border-accent text-fg"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-3 pl-4">
            <LinkedInLink variant="outline" />
          </li>
        </ul>
      </div>
    </header>
  );
}
