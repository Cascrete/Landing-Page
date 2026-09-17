"use client";

import { useState } from "react";
import ModalTrigger from "@/components/ModalTrigger";
import { SERVICES } from "@/lib/services";

export default function DiscoveryModule() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-[1360px] rounded-[16px] border border-[rgba(202,196,211,0.5)] bg-surface-card p-[33px] max-md:mx-5 max-md:p-5 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        {/* Heading row */}
        <div className="flex items-center justify-between border-b border-[rgba(202,196,211,0.4)] pb-[17px] max-md:flex-col max-md:items-start max-md:gap-2">
          <div>
            <h3 className="font-hanken text-[20px] font-semibold leading-[26px] tracking-[-0.2px] text-[#1a1b20]">
              What are you building?
            </h3>
            <p className="font-hanken text-[14px] leading-[22px] text-ink-700">
              Select what you need — see how we&apos;d approach it, scope it,
              and get it shipped.
            </p>
          </div>
          <span className="font-hanken text-[11px] font-bold uppercase leading-[14px] tracking-[1.1px] text-ink-500">
            Interactive discovery tool
          </span>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-[8px] py-[16px]">
          {SERVICES.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={category.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[4px] border px-[17px] py-[9px] font-hanken text-[12px] font-semibold uppercase leading-[16px] tracking-[0.96px] transition-colors ${isActive
                    ? "border-transparent bg-primary-dark text-white"
                    : "border-[rgba(202,196,211,0.4)] bg-[rgba(227,226,233,0.5)] text-[#1a1b20] hover:bg-[rgba(227,226,233,0.8)]"
                  }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic output drawer */}
        <div className="w-full rounded-[8px] border border-[rgba(202,196,211,0.3)] bg-surface-drawer">
          <div className="flex items-center justify-between py-[17px] pl-[17px] pr-[16.99px] max-md:flex-col max-md:items-start max-md:gap-4">
            <div className="flex flex-col gap-[4px]">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-hanken text-[20px] font-semibold leading-[26px] tracking-[-0.2px] text-primary-dark">
                  {active.label}
                </span>
                <span className="whitespace-nowrap font-hanken text-[11px] font-bold uppercase leading-[14px] tracking-[0.55px] text-ink-500">
                  • {active.tag}
                </span>
              </div>
              <p className="font-hanken text-[14px] leading-[22px] text-ink-700">
                {active.description}
              </p>
            </div>
            <ModalTrigger
              className="rounded-[8px] bg-primary-dark px-[16px] py-[8px] text-center font-hanken text-[12px] font-semibold uppercase leading-[16px] tracking-[0.96px] text-surface transition-opacity hover:opacity-90 max-md:w-full"
            >
              Tell us what you&apos;re building →
            </ModalTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
