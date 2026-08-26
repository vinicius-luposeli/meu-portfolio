import LinkedInLink from "@/components/LinkedInLink";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { contact } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border">
      <div className="shell section-y">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            />
            <SectionHeader
              index="05"
              eyebrow="Contact"
              headingId="contact-heading"
              title={contact.heading}
              lede={contact.message}
            />
            <div className="mt-8">
              <LinkedInLink variant="solid" />
            </div>
            {/* [CHANGE] Add an email link here only if an address is provided. */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
