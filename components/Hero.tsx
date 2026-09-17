import Image from "next/image";
import { imgRocketIcon, imgArrowRightIcon } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-56px)] w-full flex-col items-center justify-center overflow-hidden border-b border-[rgba(202,196,211,0.2)] bg-ink-950 pb-[97px] pt-[64px] max-md:min-h-[calc(100svh-96px)] max-md:pb-14 max-md:pt-10">
      {/* Crisp CSS backdrop: grid, glow, and a soft horizon ring. */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,19,26,0.96),rgba(18,19,26,0.72)_52%,#12131a_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(231,222,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(231,222,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,black_25%,transparent_100%)] max-md:[background-size:48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[720px] w-[min(1100px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,102,190,0.38)_0%,rgba(99,79,166,0.16)_35%,transparent_70%)] blur-[2px]" />
      <div className="pointer-events-none absolute bottom-[-430px] left-1/2 h-[580px] w-[min(1200px,120vw)] -translate-x-1/2 rounded-[50%] border border-[rgba(185,169,255,0.28)] bg-[radial-gradient(ellipse_at_center,rgba(120,102,190,0.18)_0%,rgba(18,19,26,0)_66%)] shadow-[0_-20px_100px_rgba(120,102,190,0.16)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative z-10 flex w-full max-w-[1360px] flex-col items-center px-[32px] max-md:px-5">
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
