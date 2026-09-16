import Image from "next/image";
import { imgSectionHero, imgRocketIcon, imgArrowRightIcon } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden border-b border-[rgba(202,196,211,0.2)] bg-ink-950 pb-[97px] pt-[64px] max-md:pb-14 max-md:pt-10">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={imgSectionHero}
          alt=""
          fill
          priority
          className="left-[-13.23%] w-[126.46%] max-w-none object-cover"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,19,26,0.66)] via-[rgba(18,19,26,0.5)] to-[rgba(18,19,26,0.83)]" />

      <div className="relative flex w-full max-w-[1360px] flex-col items-center px-[32px] max-md:px-5">
        <div className="flex w-full max-w-[896px] flex-col items-center gap-[40px] pb-[48px] pt-[32px] max-md:gap-8 max-md:pb-4 max-md:pt-4">
          <div className="flex flex-col items-center gap-[20px]">
            <h1 className="px-[86.7px] text-center font-jakarta text-[64px] font-bold leading-[69.12px] tracking-[-1.6px] text-[#f1f0f9] max-md:px-0 max-md:text-[42px] max-md:leading-[46px]">
              Build What&apos;s Next For Your Business.
            </h1>
            <p className="max-w-[672px] text-center font-jakarta text-[20px] font-semibold leading-[24px] text-[rgba(241,240,249,0.8)] max-md:text-[16px] max-md:leading-6">
              We design, develop, and ship digital products — websites, apps,
              and tools — built for speed, scale, and real results.
            </p>
          </div>

          <div className="flex items-center gap-[16px] max-md:w-full max-md:flex-col max-md:gap-3">
            <a
              href="#contact"
              className="relative flex items-center justify-center gap-[8px] rounded-[8px] bg-primary px-[32px] py-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90 max-md:w-full"
            >
              <Image src={imgRocketIcon} alt="" width={12} height={15} className="h-[15px] w-[12px]" />
              <span className="whitespace-nowrap font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-white">
                Start a Project
              </span>
            </a>
            <ModalTrigger
              mode="contact"
              className="flex items-center justify-center gap-[8px] rounded-[8px] bg-[#f4f2fc] px-[32px] py-[12px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-white max-md:w-full"
            >
              <span className="whitespace-nowrap font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-primary">
                Contact Us
              </span>
              <Image src={imgArrowRightIcon} alt="" width={12} height={12} className="size-[12px]" />
            </ModalTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
