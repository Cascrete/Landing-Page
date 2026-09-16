"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { imgLogoVector, imgArrowSmall } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";

const NAV_LINKS = [
  { label: "Services", href: "#capabilities", primary: true },
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#process" },
];

export default function Header() {
  const pathname = usePathname();
  const homePath = pathname === "/" ? "" : "/";

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[rgba(202,196,211,0.35)] bg-[rgba(250,248,255,0.9)] px-[60px] pb-[13px] pt-[12px] backdrop-blur-[12px] max-md:flex-wrap max-md:gap-x-4 max-md:gap-y-3 max-md:px-5 max-md:py-3">
      {/* Branding */}
      <a href={homePath || "#top"} className="flex w-[130px] shrink-0 items-center gap-[6px]">
        <span className="flex size-[32px] shrink-0 items-center justify-center overflow-hidden rounded-[12px]">
          <Image
            src={imgLogoVector}
            alt="Cascrete logo"
            width={17}
            height={24}
            className="h-[24.139px] w-[16.879px]"
          />
        </span>
        <span className="whitespace-nowrap font-montserrat text-[20px] font-semibold leading-[28px] tracking-[-0.5px] text-ink-900">
          Cascrete
        </span>
      </a>

      {/* Nav */}
      <nav className="flex items-center gap-[40px] max-md:order-3 max-md:w-full max-md:justify-between max-md:gap-2 max-md:overflow-x-auto">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={`${homePath}${link.href}`}
            className={
              link.primary
                ? "whitespace-nowrap font-jakarta text-[15px] font-semibold leading-[24px] text-ink-900"
                : "whitespace-nowrap font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-ink-700 transition-colors hover:text-ink-900"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Contact button */}
      <ModalTrigger
        className="flex w-[157.95px] shrink-0 items-center justify-center gap-[4px] rounded-[8px] bg-primary px-[24px] py-[10px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90 max-md:w-auto max-md:px-3"
      >
        <span className="whitespace-nowrap font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-white">
          Start a Project
        </span>
        <Image src={imgArrowSmall} alt="" width={12} height={12} className="size-[12px]" />
      </ModalTrigger>
    </header>
  );
}
