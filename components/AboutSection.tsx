export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center border-b border-[rgba(202,196,211,0.3)] bg-dark-800 px-[64px] pb-[65px] pt-[64px] max-md:px-5 max-md:py-12"
    >
      <div className="grid w-full grid-cols-12 gap-x-[32px] gap-y-[32px] max-md:grid-cols-1">
        <div className="col-span-4 flex flex-col items-start gap-[8px] self-start pb-[76.75px] max-md:col-span-1 max-md:pb-0">
          <span className="font-montserrat text-[11px] font-bold uppercase leading-[14px] tracking-[1.1px] text-[#f1f0f9]">
            01 / About Cascret
          </span>
          <h2 className="font-hanken text-[40px] font-bold leading-[50px] tracking-[-1px] text-[#f1f0f9]">
            Good businesses deserve to be remembered.
          </h2>
        </div>

        <div className="col-span-8 flex flex-col items-start gap-[16px] self-start max-md:col-span-1">
          <p className="font-hanken text-[18px] leading-[29.25px] tracking-[-0.09px] text-[#e7deff]">
            Many businesses possess extraordinary products, ambitious
            founders, and genuine market potential — but their physical and
            digital touchpoints fail to convey that intrinsic quality.
            Confusion, fragmented visuals, and generic templates dissolve
            hard-won momentum.
          </p>
          <p className="font-hanken text-[18px] leading-[29.25px] tracking-[-0.09px] text-[#e7deff]">
            Cascret bridges that gap through clear brand strategy, exacting
            design systems, and robust web engineering. We reject ephemeral
            fads in favor of structural clarity, tactile presence, and
            enduring corporate identity.
          </p>
        </div>
      </div>
    </section>
  );
}
