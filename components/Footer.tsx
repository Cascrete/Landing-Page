"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { imgLogoVector } from "@/lib/assets";
import ModalTrigger from "@/components/ModalTrigger";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
];
const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#capabilities" },
  { label: "Careers", href: "/careers" },
];
const BOTTOM_LINKS = [
  { label: "Contact Us", type: "modal" },
];

export default function Footer() {
  const pathname = usePathname();
  const homePath = pathname === "/" ? "" : "/";
  const [newsletterState, setNewsletterState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  let newsletterMessage = {
    text: "Bi-weekly technical architecture dispatch. No spam.",
    className: "text-white/40",
  };
  if (newsletterState === "success") {
    newsletterMessage = { text: "You're on the list.", className: "text-[#80eeb4]" };
  } else if (newsletterState === "error") {
    newsletterMessage = { text: "Could not subscribe. Try again.", className: "text-[#ffaaa8]" };
  }

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
    <footer className="relative w-full overflow-hidden border-t border-[rgba(202,196,211,0.35)] bg-dark-900 text-white">
      <FooterBackgroundGradient />
      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col px-8 pb-8 pt-16 max-md:px-5 max-md:pt-12">
        <div className="grid grid-cols-12 gap-x-12 gap-y-14 max-md:grid-cols-1">
          <div className="col-span-5 flex flex-col items-start gap-5 max-md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15">
                <Image src={imgLogoVector} alt="Cascrete logo" width={17} height={24} className="h-6 w-[17px]" />
              </span>
              <span className="font-montserrat text-xl font-semibold leading-7 tracking-[-0.5px] text-white">Cascrete</span>
            </div>
            <p className="max-w-[390px] font-jakarta text-[15px] leading-6 text-white/70">
              We design and build websites, apps, and digital products for founders and businesses ready to move.
            </p>
            <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.7px] text-[#d9d0ff]">
              <span className="size-2 rounded-full bg-[#80eeb4] shadow-[0_0_14px_rgba(128,238,180,0.8)]" />
              <span>Taking on select projects</span>
            </div>
            <form className="mt-3 flex w-full max-w-[430px] flex-col gap-2" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="footer-email" className="font-mono text-[10px] uppercase tracking-[0.6px] text-white/55">Stay in the loop</label>
              <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-stretch">
                <div className="relative flex-1">
                  <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/45" />
                  <input id="footer-email" type="email" required placeholder="Enter enterprise email" className="h-12 w-full rounded-lg border border-white/15 bg-white/10 pl-11 pr-4 font-jakarta text-[13px] text-white outline-none placeholder:text-white/45 focus:border-[#b9a9ff] focus:ring-2 focus:ring-primary-light/40" />
                </div>
                <button disabled={newsletterState === "submitting"} type="submit" className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-light px-5 font-jakarta text-[14px] font-semibold text-white transition-colors hover:bg-[#8977d0] disabled:cursor-wait disabled:opacity-60">
                  {newsletterState === "submitting" ? "Sending..." : "Subscribe"}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </button>
              </div>
              <span role={newsletterState === "error" ? "alert" : undefined} className={`font-mono text-[9px] uppercase tracking-[0.5px] ${newsletterMessage.className}`}>
                {newsletterMessage.text}
              </span>
            </form>
          </div>

          <div className="col-span-2 col-start-7 max-md:col-span-1 max-md:col-start-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.7px] text-[#d9d0ff]">Company</span>
            <ul className="mt-6 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href.startsWith("#") ? `${homePath}${link.href}` : link.href} className="group flex items-center justify-between border-b border-white/10 pb-3 font-jakarta text-[14px] text-white/65 transition-colors hover:border-[#b9a9ff] hover:text-white">
                    {link.label}<ArrowUpRight aria-hidden="true" className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 max-md:col-span-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.7px] text-[#d9d0ff]">Legal</span>
            <ul className="mt-6 flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center justify-between border-b border-white/10 pb-3 font-jakarta text-[14px] text-white/65 transition-colors hover:border-[#b9a9ff] hover:text-white">{link.label}<ArrowUpRight aria-hidden="true" className="size-4 opacity-0 transition-opacity group-hover:opacity-100" /></a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="relative mt-10 h-36 overflow-hidden border-y border-white/10 max-md:h-24">
          <TextHoverEffect text="Cascrete" duration={0.35} className="absolute inset-0" />
        </div>

        <div className="flex w-full items-center justify-between gap-4 border-t border-white/10 pt-6 max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-[#80eeb4]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5px] text-white/45">© 2026 Cascrete. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {BOTTOM_LINKS.map((link) => (
              <ModalTrigger mode="contact" key={link.label} className="font-mono text-[10px] uppercase tracking-[0.5px] text-white/55 transition-colors hover:text-white">{link.label}</ModalTrigger>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
