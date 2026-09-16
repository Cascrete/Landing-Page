import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  ["1. About this website", "Cascrete is an independent studio that designs and builds websites, apps, and digital products. This website shares information about our work and gives visitors a way to contact us."],
  ["2. Information we collect", "You can browse this website without creating an account. If you contact us through a form, we may collect your name, email address, company details, project information, and anything else you choose to include in your message."],
  ["3. How we use information", "We use information you provide to respond to enquiries, understand project requirements, communicate with you, maintain necessary business records, and protect our legal rights. We do not use your information for unrelated purposes."],
  ["4. Sharing information", "We do not sell or commercially trade your personal information. We may share it with people who help us respond to your enquiry, service providers supporting our operations, professional advisers, or authorities where disclosure is required by law."],
  ["5. Data security and retention", "We take reasonable measures to protect information provided to us. No internet transmission or storage method is completely secure. We retain information only for as long as needed for the purpose it was provided, legitimate business needs, or legal obligations."],
  ["6. Third-party services", "This website may link to third-party websites or use third-party services. Their privacy practices are governed by their own policies, and we encourage you to review them before sharing personal information."],
  ["7. Your choices", "Subject to applicable law, you may ask us to access, correct, update, or delete personal information we hold about you. Contact us through the website to make a request."],
  ["8. Changes to this policy", "We may update this policy as our website, services, or legal obligations change. The current version will always be published on this page with a revised effective date."],
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface">
      <Header />
      <main className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-[720px]">
          <span className="font-mono text-[11px] uppercase leading-[16px] tracking-[0.7px] text-primary-dark">Legal / Cascrete</span>
          <h1 className="mt-4 font-jakarta text-[52px] font-bold leading-[1.05] tracking-[-1.5px] text-ink-900 max-md:text-[40px]">Privacy Policy</h1>
          <p className="mt-5 font-jakarta text-[15px] leading-[24px] text-ink-700">Effective date: September 15, 2026</p>
          <p className="mt-8 max-w-[640px] font-jakarta text-[18px] leading-[30px] text-ink-700">We respect your privacy. This policy explains what information Cascrete may receive through this website and how we use it.</p>
        </div>

        <div className="mt-16 max-w-[760px] border-t border-[rgba(202,196,211,0.5)]">
          {sections.map(([heading, body]) => (
            <section key={heading} className="border-b border-[rgba(202,196,211,0.5)] py-8">
              <h2 className="font-jakarta text-[20px] font-semibold leading-[28px] text-ink-900">{heading}</h2>
              <p className="mt-3 font-jakarta text-[15px] leading-[26px] text-ink-700">{body}</p>
            </section>
          ))}
          <section className="py-8">
            <h2 className="font-jakarta text-[20px] font-semibold leading-[28px] text-ink-900">9. Contact us</h2>
            <p className="mt-3 font-jakarta text-[15px] leading-[26px] text-ink-700">For questions or privacy requests, email contact@cascrete.com with “Privacy” in the subject line.</p>
          </section>
        </div>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}