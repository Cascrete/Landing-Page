import Image from "next/image";
import { imgCheckIcon } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";

const TRUST_POINTS = [
  "Direct access to the team building your project",
  "Clear scope & timeline before we start",
  "Regular updates, no black-box work",
];

export default function CtaSection() {
  return (
    <section id="contact" className="flex w-full max-w-[1360px] flex-col items-start px-[32px] py-[64px] max-md:px-5 max-md:py-12">
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[24px] bg-dark-900 p-[96px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-md:rounded-[16px] max-md:p-6 max-md:py-12">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(26deg, rgba(120,102,190,0.2) 0%, rgba(120,102,190,0) 50%, rgba(95,77,163,0.15) 100%)",
          }}
        />

        <div className="relative flex max-w-[768px] flex-col items-center">
          <div className="mb-[24px] flex flex-col items-start">
            <span className="flex flex-col items-center whitespace-nowrap rounded-[12px] bg-[rgba(120,102,190,0.3)] px-[12px] py-[4px] font-mono text-[10px] uppercase leading-[14px] tracking-[0.5px] text-[#e7deff]">
              Now taking on new projects
            </span>
          </div>

          <h2 className="mb-[16px] text-center font-jakarta text-[48px] font-bold leading-[56px] tracking-[-1.2px] text-[#f1f0f9] max-md:text-[36px] max-md:leading-[42px]">
            Ready to build something great?
          </h2>

          <p className="mb-[32px] max-w-[576px] text-center font-jakarta text-[18px] leading-[28px] tracking-[-0.09px] text-[rgba(241,240,249,0.8)]">
            Tell us what you&apos;re working on, and let&apos;s figure out
            the right way to build it from first idea to finished product.
          </p>

          <ModalTrigger
            className="relative mb-[32px] flex items-center justify-center rounded-[8px] bg-primary-light px-[48px] py-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90"
          >
            <span className="text-center font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-white">
              Start a Project
            </span>
          </ModalTrigger>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-[32px] gap-y-[16px]">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-[8px]">
                <Image
                  src={imgCheckIcon}
                  alt=""
                  width={17}
                  height={16}
                  className="h-[15.75px] w-[16.5px]"
                />
                <span className="text-center font-jakarta text-[13px] leading-[20px] text-[rgba(241,240,249,0.7)]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
