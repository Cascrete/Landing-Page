const STEPS = [
  {
    number: "01",
    title: "Discover & Plan",
    description:
      "We start by understanding what you actually need — the problem, the users, and what success looks like — then map out scope and timeline before any work begins.",
    phase: "Phase 1 · Planning",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We design and develop in parallel, sharing progress as we go instead of disappearing for weeks — so you're never surprised by the direction.",
    phase: "Phase 2 · Execution",
  },
  {
    number: "03",
    title: "Review & Refine",
    description:
      "You test what we've built, we walk through it together, and we make revisions based on real feedback — not guesses about what you wanted.",
    phase: "Phase 3 · Review",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment and stick around after launch to fix issues, make small adjustments, and help you plan what's next.",
    phase: "Phase 4 • Launch",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="flex w-full max-w-[1360px] flex-col items-center justify-center gap-[64px] p-[32px] max-md:gap-10 max-md:p-5 max-md:py-12"
    >
      <div className="flex w-full flex-col items-start">
        <div className="mb-[8px] flex flex-col items-start rounded-[2px] bg-surface-tag px-[12px] py-[4px]">
          <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase leading-[14px] tracking-[0.5px] text-primary-dark">
            Our Process
          </span>
        </div>
        <h2 className="mb-[8px] font-jakarta text-[48px] font-bold leading-[56px] tracking-[-1.2px] text-ink-900 max-md:text-[40px] max-md:leading-[44px]">
          How We Work
        </h2>
        <p className="font-jakarta text-[18px] leading-[28px] tracking-[-0.09px] text-ink-700">
          No black boxes. Just a clear path from idea to launch.
        </p>
      </div>

      <div className="flex w-full items-start justify-center gap-[32px] max-md:flex-col">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex min-w-0 flex-1 flex-col items-start justify-between rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-col items-start gap-[8px]">
              <span className="font-jakarta text-[64px] font-bold leading-[72px] tracking-[-1.92px] text-[#e3e1eb]">
                {step.number}
              </span>
              <h3 className="pt-[4px] font-jakarta text-[20px] font-semibold leading-[28px] tracking-[-0.2px] text-ink-900">
                {step.title}
              </h3>
              <p className="font-jakarta text-[15px] leading-[24px] text-ink-700">
                {step.description}
              </p>
            </div>
            <div className="flex w-full flex-col items-start pt-[16px]">
              <span className="w-full pb-[2.5px] pt-[19.5px] font-mono text-[10px] font-medium uppercase leading-[14px] tracking-[1px] text-primary-dark">
                {step.phase}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
