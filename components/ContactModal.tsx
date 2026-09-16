"use client";

import { FormEvent, useEffect, useState } from "react";

type FormMode = "project" | "contact";
type SubmissionState = "idle" | "submitting" | "success" | "error";

const MODE_COPY: Record<FormMode, { title: string; intro: string }> = {
  project: {
    title: "Start a project",
    intro: "Tell us what you are building and we will get back to you shortly.",
  },
  contact: {
    title: "Contact us",
    intro: "Have a question or an idea? Send a note and the team will follow up.",
  },
};

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<FormMode>("project");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  useEffect(() => {
    const openModal = (event: Event) => {
      const customEvent = event as CustomEvent<{ mode?: FormMode }>;
      setMode(customEvent.detail?.mode ?? "project");
      setSubmissionState("idle");
      setIsOpen(true);
    };

    window.addEventListener("open-contact-modal", openModal);
    return () => window.removeEventListener("open-contact-modal", openModal);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const copy = MODE_COPY[mode];
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("submitting");

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
          ...formData,
          _subject: `Cascrete ${mode === "project" ? "project enquiry" : "contact enquiry"}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(18,19,26,0.55)] px-5 py-8 backdrop-blur-[4px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setIsOpen(false);
      }}
    >
      <div className="relative max-h-full w-full max-w-[560px] overflow-y-auto rounded-[16px] border border-[rgba(202,196,211,0.7)] bg-surface p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.3)] max-md:p-5">
        <button
          type="button"
          aria-label="Close form"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full border border-[rgba(202,196,211,0.7)] font-jakarta text-[20px] leading-none text-ink-700 transition-colors hover:bg-surface-alt hover:text-ink-900"
        >
          <span aria-hidden="true" className="relative -top-px">×</span>
        </button>

        <div className="mb-6 pr-10">
          <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.6px] text-primary-dark">
            Cascrete / hello
          </span>
          <h2 id="contact-modal-title" className="mt-2 font-jakarta text-[30px] font-bold leading-[36px] tracking-[-0.6px] text-ink-900">
            {copy.title}
          </h2>
          <p className="mt-2 font-jakarta text-[14px] leading-[22px] text-ink-700">
            {copy.intro}
          </p>
        </div>

        {submissionState === "success" ? (
          <div className="rounded-[10px] border border-[rgba(99,79,166,0.25)] bg-[rgba(120,102,190,0.1)] p-5">
            <h3 className="font-jakarta text-[18px] font-semibold leading-[26px] text-ink-900">Message received.</h3>
            <p className="mt-1 font-jakarta text-[14px] leading-[22px] text-ink-700">
              Thanks for reaching out. We will be in touch soon.
            </p>
            <button type="button" onClick={() => setIsOpen(false)} className="mt-5 rounded-[8px] bg-primary px-4 py-2 font-jakarta text-[13px] font-semibold text-white hover:opacity-90">
              Done
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-2 rounded-[8px] bg-surface-alt p-1">
              {(["project", "contact"] as FormMode[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMode(option)}
                  className={`flex-1 rounded-[6px] px-3 py-2 font-jakarta text-[12px] font-semibold capitalize transition-colors ${mode === option ? "bg-white text-primary-dark shadow-sm" : "text-ink-700 hover:text-ink-900"}`}
                >
                  {option === "project" ? "Start a project" : "Contact us"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <label className="flex flex-col gap-1 font-jakarta text-[12px] font-semibold text-ink-900">
                Name
                <input required name="name" type="text" placeholder="Your name" className="h-11 rounded-[8px] border border-ink-500 bg-white px-3 font-jakarta text-[13px] font-normal text-ink-900 outline-none focus:border-primary focus:ring-2 focus:ring-[rgba(99,79,166,0.2)]" />
              </label>
              <label className="flex flex-col gap-1 font-jakarta text-[12px] font-semibold text-ink-900">
                Email
                <input required name="email" type="email" placeholder="you@company.com" className="h-11 rounded-[8px] border border-ink-500 bg-white px-3 font-jakarta text-[13px] font-normal text-ink-900 outline-none focus:border-primary focus:ring-2 focus:ring-[rgba(99,79,166,0.2)]" />
              </label>
            </div>

            {mode === "project" && (
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                <label className="flex flex-col gap-1 font-jakarta text-[12px] font-semibold text-ink-900">
                  What do you need?
                  <select name="service" defaultValue="" className="h-11 rounded-[8px] border border-ink-500 bg-white px-3 font-jakarta text-[13px] font-normal text-ink-900 outline-none focus:border-primary">
                    <option value="" disabled>Select a service</option>
                    <option>Website development</option>
                    <option>App development</option>
                    <option>Design and branding</option>
                    <option>Automation and tools</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 font-jakarta text-[12px] font-semibold text-ink-900">
                  Approx. budget
                  <select name="budget" defaultValue="" className="h-11 rounded-[8px] border border-ink-500 bg-white px-3 font-jakarta text-[13px] font-normal text-ink-900 outline-none focus:border-primary">
                    <option value="" disabled>Choose a range</option>
                    <option>Under $5k</option>
                    <option>$5k - $15k</option>
                    <option>$15k - $30k</option>
                    <option>$30k+</option>
                  </select>
                </label>
              </div>
            )}

            <label className="flex flex-col gap-1 font-jakarta text-[12px] font-semibold text-ink-900">
              Message
              <textarea required name="message" rows={4} placeholder={mode === "project" ? "A quick overview of what you are building..." : "How can we help?"} className="resize-y rounded-[8px] border border-ink-500 bg-white px-3 py-3 font-jakarta text-[13px] font-normal text-ink-900 outline-none focus:border-primary focus:ring-2 focus:ring-[rgba(99,79,166,0.2)]" />
            </label>

            {submissionState === "error" && (
              <p role="alert" className="rounded-[8px] bg-[rgba(180,55,55,0.1)] px-3 py-2 font-jakarta text-[12px] leading-[18px] text-[#8b2929]">
                We could not send your message. Please try again or email contact@cascrete.com directly.
              </p>
            )}
            <button disabled={submissionState === "submitting"} type="submit" className="mt-1 rounded-[8px] bg-primary px-5 py-3 font-jakarta text-[14px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
              {submissionState === "submitting" ? "Sending..." : "Send message"}
            </button>
            <p className="text-center font-mono text-[9px] uppercase leading-[14px] tracking-[0.4px] text-ink-500">We only use your details to respond to this enquiry.</p>
          </form>
        )}
      </div>
    </div>
  );
}