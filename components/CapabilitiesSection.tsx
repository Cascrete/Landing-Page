"use client";

import { useState } from "react";
import Image from "next/image";
import { imgChevronIcon } from "@/lib/assets";

const CAPABILITIES = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom websites and web platforms — responsive, fast, and built to convert, not just look good.",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Web and mobile apps built from scratch, architected to handle real users and grow with your product.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Wireframes, prototypes, and polished interfaces — designed around how people actually use the product.",
  },
  {
    number: "04",
    title: "Branding & Identity",
    description:
      "Logo, color system, typography, and a visual identity that stays consistent everywhere it shows up.",
  },
  {
    number: "05",
    title: "Automation & Tools",
    description:
      "Internal tools and workflow automations that cut out repetitive work and save your team real hours.",
  },
];

const DELIVERABLES = [
  "Fixed project scope & timeline",
  "Source files & full code repository",
  "Direct communication with the team building it",
  "One round of revisions included",
];

export default function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="capabilities"
      className="flex w-full flex-col items-center justify-center border-b border-[rgba(202,196,211,0.3)] bg-surface pb-[65px] pt-[64px] max-md:py-12"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[64px] px-[64px] max-md:gap-10 max-md:px-5">
        {/* Heading row */}
        <div className="flex w-full items-end justify-between border-b border-[rgba(202,196,211,0.3)] pb-[17px] max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="flex flex-col items-start gap-[8px]">
            <span className="font-montserrat text-[11px] font-bold uppercase leading-[14px] tracking-[1.1px] text-primary-dark">
              02 / Capabilities
            </span>
            <h2 className="font-hanken text-[56px] font-bold leading-[60px] tracking-[-1.4px] text-[#1a1b20] max-md:text-[40px] max-md:leading-[44px]">
              Design. Build. Ship.
            </h2>
          </div>
          <p className="max-w-[430px] pr-[29.41px] font-hanken text-[16px] leading-[24px] text-ink-700 max-md:pr-0">
            From first sketch to production launch, we handle the whole path
            — no handoffs between disconnected teams.
          </p>
        </div>

        {/* Grid: accordion + specimen panel */}
        <div className="grid w-full grid-cols-12 gap-x-[32px] gap-y-[32px] max-md:grid-cols-1">
          {/* Accordion list */}
          <div className="col-span-7 flex flex-col items-start self-start border-y border-[rgba(202,196,211,0.4)] max-md:col-span-1">
            {CAPABILITIES.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.number}
                  className={`w-full ${index > 0 ? "border-t border-[rgba(202,196,211,0.4)]" : ""
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between px-[16px] py-[24px] text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-[16px]">
                      <span className="font-montserrat text-[11px] font-bold leading-[14px] tracking-[1.32px] text-primary-deep">
                        {item.number}
                      </span>
                      <span className="font-hanken text-[20px] font-semibold leading-[26px] tracking-[-0.2px] text-[#1a1b20]">
                        {item.title}
                      </span>
                    </span>
                    <Image
                      src={imgChevronIcon}
                      alt=""
                      width={13}
                      height={13}
                      className={`size-[12.5px] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="w-full px-[16px] pb-[24px] pl-[64px]">
                      <p className="font-hanken text-[16px] leading-[24px] text-ink-700">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Specimen panel */}
          <div className="col-span-5 flex flex-col items-start gap-[24px] self-start rounded-[16px] border border-[rgba(202,196,211,0.5)] bg-surface-card p-[33px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] max-md:col-span-1 max-md:p-5">
            <div className="flex w-full items-center justify-between border-b border-[rgba(202,196,211,0.3)] pb-[13px]">
              <span className="font-montserrat text-[11px] font-bold uppercase leading-[14px] tracking-[1.1px] text-primary-dark">
                Project Deliverables
              </span>
              <span className="font-hanken text-[12px] font-semibold leading-[16px] tracking-[0.96px] text-ink-700">
                Scope Overview
              </span>
            </div>

            <div className="flex w-full flex-col items-start gap-[11.25px]">
              <h4 className="font-hanken text-[20px] font-bold leading-[26px] tracking-[-0.2px] text-[#1a1b20]">
                How we work
              </h4>
              <p className="font-hanken text-[14px] leading-[22.75px] text-ink-700">
                Every project starts with a clear scope and timeline before
                any code or design work begins — no surprises halfway
                through.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-[8px] pb-[8px]">
              <span className="font-hanken text-[11px] font-bold uppercase leading-[14px] tracking-[0.55px] text-ink-500">
                What&apos;s included:
              </span>
              <ul className="flex w-full flex-col gap-[4px]">
                {DELIVERABLES.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-center gap-[8px]"
                  >
                    <span className="size-[6px] shrink-0 rounded-full bg-primary-dark" />
                    <span className="font-hanken text-[14px] leading-[22px] text-[#1a1b20]">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-[8px] bg-primary-muted py-[12px] transition-opacity hover:opacity-90"
            >
              <span className="font-hanken text-[14px] font-semibold leading-[18px] tracking-[0.56px] text-white">
                Start a Project →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
