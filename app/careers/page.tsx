import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-dark-900 px-5 py-24 md:px-16 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,102,190,0.28),transparent_38%)]" />
          <div className="relative mx-auto max-w-[1120px]">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-[#e7deff]">Join the team</span>
            <h1 className="mt-5 max-w-[760px] font-jakarta text-[64px] font-bold leading-[1.05] tracking-[-1.8px] text-[#f1f0f9] max-md:text-[42px]">Build the future of digital products.</h1>
            <p className="mt-6 max-w-[600px] font-jakarta text-[18px] leading-[30px] text-[rgba(241,240,249,0.78)]">We are a small, ambitious studio helping founders and businesses move from a good idea to something real. Come build work that matters.</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-[720px]">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-primary-dark">Why Cascrete?</span>
            <h2 className="mt-4 font-jakarta text-[40px] font-bold leading-[46px] tracking-[-1px] text-ink-900 max-md:text-[32px]">Small team. Real ownership.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["High impact", "Your ideas, code, and design decisions have a visible effect on the work we ship."],
              ["Work with trust", "We value clear communication, thoughtful work, and the freedom to do your best."],
              ["Keep learning", "Every project brings a new problem to solve and a chance to sharpen your craft."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-[12px] border border-[rgba(202,196,211,0.5)] bg-surface-card p-6">
                <h3 className="font-jakarta text-[20px] font-semibold leading-[28px] text-ink-900">{title}</h3>
                <p className="mt-3 font-jakarta text-[15px] leading-[24px] text-ink-700">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-[16px] bg-primary-dark px-6 py-10 md:px-12">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-[#e7deff]">Interested in joining?</span>
            <h2 className="mt-3 font-jakarta text-[32px] font-bold leading-[40px] tracking-[-0.7px] text-white">Send us your resume and portfolio.</h2>
            <p className="mt-3 max-w-[560px] font-jakarta text-[15px] leading-[24px] text-[rgba(255,255,255,0.78)]">We are always open to meeting thoughtful developers, designers, and operators.</p>
            <a href="mailto:contact@cascrete.com" className="mt-6 inline-flex rounded-[8px] bg-white px-5 py-3 font-jakarta text-[14px] font-semibold text-primary-dark transition-opacity hover:opacity-90">contact@cascrete.com</a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}