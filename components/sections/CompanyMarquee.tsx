"use client";

import { marqueeCompanies } from "@/lib/resume-data";

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden}
    >
      {marqueeCompanies.map((company) => (
        <div
          key={company.name}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap"
        >
          <span className="text-sm font-medium tracking-[0.12em] text-neutral-800 uppercase sm:text-base">
            {company.name}
          </span>
          {company.tag && (
            <span className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-[10px] font-medium tracking-[0.15em] text-neutral-500 uppercase">
              {company.tag}
            </span>
          )}
          <span className="text-neutral-300">·</span>
        </div>
      ))}
    </div>
  );
}

export default function CompanyMarquee() {
  return (
    <section
      aria-label="Companies worked with and aspiring to join"
      className="relative overflow-hidden border-y border-neutral-200 bg-white/90 py-5 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
