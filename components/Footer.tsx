"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { imgLogoVector } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";

const LEGAL_LINKS = [
  { label: "Contact Us", type: "modal" },
  { label: "Start a Project", type: "modal" },
  { label: "Privacy Policy", href: "/privacy" },
];
const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#capabilities" },
  { label: "Careers", href: "/careers" },
];
const BOTTOM_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", type: "modal" },
];

export default function Footer() {
  const pathname = usePathname();
  const homePath = pathname === "/" ? "" : "/";
  const [newsletterState, setNewsletterState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterState("submitting");

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@cascrete.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          _subject: "Cascrete newsletter subscription",
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Subscription failed");
      form.reset();
      setNewsletterState("success");
    } catch {
      setNewsletterState("error");
    }
  };

  return (
    <footer className="flex w-full flex-col items-start border-t border-[rgba(202,196,211,0.35)] bg-surface-alt pt-px">
      <div className="flex w-full max-w-[1360px] flex-col items-start gap-[64px] px-[32px] pb-[48px] pt-[64px] max-md:gap-10 max-md:px-5 max-md:py-12">
        <div className="grid w-full grid-cols-5 gap-x-[48px] gap-y-[48px] max-md:grid-cols-1">
          {/* Brand + newsletter */}
          <div className="col-span-2 flex flex-col items-start gap-[16px] self-start max-md:col-span-1">
            <div className="flex items-center gap-[8px]">
              <span className="flex size-[32px] shrink-0 items-center justify-center overflow-hidden rounded-[12px]">
                <Image
                  src={imgLogoVector}
                  alt="Cascrete logo"
                  width={17}
                  height={24}
                  className="h-[24.139px] w-[16.879px]"
                />
              </span>
              <span className="font-jakarta text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-ink-900">
                Cascrete
              </span>
            </div>

            <p className="max-w-[384px] font-jakarta text-[15px] leading-[24px] text-ink-700">
              We design and build websites, apps, and digital products for
              founders and businesses ready to move.
            </p>

            <form
              className="flex w-full max-w-[384px] flex-col gap-[4px] pt-[8px]"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="flex items-center gap-[8px]">
                <input
                  type="email"
                  required
                  placeholder="Enter enterprise email"
                  className="h-[48px] flex-1 rounded-[8px] border border-ink-500 px-[17px] py-[16px] font-jakarta text-[13px] text-ink-700 placeholder:text-[rgba(72,69,81,0.6)] focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <button
                  disabled={newsletterState === "submitting"}
                  type="submit"
                  className="h-[48px] shrink-0 rounded-[8px] bg-primary-light px-[16px] font-jakarta text-[14px] font-semibold leading-[20px] tracking-[-0.14px] text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
                >
                  {newsletterState === "submitting" ? "Sending..." : "Subscribe"}
                </button>
              </div>
              {newsletterState === "success" ? (
                <span className="font-mono text-[9px] uppercase leading-[14px] tracking-[0.5px] text-primary-dark">You&apos;re on the list.</span>
              ) : newsletterState === "error" ? (
                <span role="alert" className="font-mono text-[9px] uppercase leading-[14px] tracking-[0.5px] text-[#8b2929]">Could not subscribe. Try again.</span>
              ) : (
                <span className="font-mono text-[6px] uppercase leading-[14px] tracking-[0.5px] text-[rgba(72,69,81,0.7)]">Bi-weekly technical architecture dispatch. No spam.</span>
              )}
            </form>
          </div>

          <div className="col-span-1 max-md:hidden" />

          {/* Company links */}
          <div className="col-span-1 flex flex-col items-start gap-[12px] self-start pb-[38px] max-md:col-span-1 max-md:pb-0">
            <span className="font-mono text-[12px] uppercase leading-[16px] tracking-[0.6px] text-ink-900">
              Company
            </span>
            <ul className="flex w-full flex-col gap-[8px]">
              {COMPANY_LINKS.map((link) => (
                <li
                  key={link.label}
                  className="w-full border-b border-[rgba(202,196,211,0.2)] pb-[5px]"
                >
                  <a
                    href={link.href.startsWith("#") ? `${homePath}${link.href}` : link.href}
                    className="font-jakarta text-[13px] leading-[20px] text-ink-700 hover:text-ink-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-span-1 flex flex-col items-start gap-[12px] self-start pb-[38px] max-md:col-span-1 max-md:pb-0">
            <span className="font-mono text-[12px] uppercase leading-[16px] tracking-[0.6px] text-ink-900">
              Legal
            </span>
            <ul className="flex w-full flex-col gap-[8px]">
              {LEGAL_LINKS.map((link) => (
                <li
                  key={link.label}
                  className="w-full border-b border-[rgba(202,196,211,0.2)] pb-[5px]"
                >
                  {link.type === "modal" ? (
                    <ModalTrigger mode="contact" className="font-jakarta text-[13px] leading-[20px] text-ink-700 hover:text-ink-900">{link.label}</ModalTrigger>
                  ) : (
                    <a href={link.href} className="font-jakarta text-[13px] leading-[20px] text-ink-700 hover:text-ink-900">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex w-full items-center justify-between border-t border-[rgba(202,196,211,0.35)] pt-[25px] max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="flex items-center gap-[16px]">
            <span className="size-[8px] shrink-0 rounded-full bg-primary-dark" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase leading-[14px] tracking-[0.5px] text-[rgba(72,69,81,0.8)]">
              © 2026 Cascrete. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {BOTTOM_LINKS.map((link) => (
              link.type === "modal" ? (
                <ModalTrigger mode="contact" key={link.label} className="whitespace-nowrap font-mono text-[10px] uppercase leading-[14px] tracking-[0.5px] text-ink-700 hover:text-ink-900">{link.label}</ModalTrigger>
              ) : (
                <a key={link.label} href={link.href} className="whitespace-nowrap font-mono text-[10px] uppercase leading-[14px] tracking-[0.5px] text-ink-700 hover:text-ink-900">{link.label}</a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
