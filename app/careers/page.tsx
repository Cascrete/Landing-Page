import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "Careers — Cascrete",
  description:
    "Join the Cascrete team. Explore open internship and full-time positions at our digital product studio.",
};

const OPEN_ROLES = [
  {
    id: "social-media-manager-intern",
    badge: "Internship · Remote",
    title: "Social Media Manager Intern",
    tagline: "Shape how the world sees Cascrete — one post at a time.",
    about: [
      "We're looking for a sharp, self-directed Social Media Manager Intern to help us build and grow Cascrete's presence online. You'll work directly with the founding team, own the content calendar, and have real say in how we communicate our work to the world.",
      "This is a performance-based internship — the more impact you drive, the more you earn. If you care about great content, strategic storytelling, and turning ideas into scroll-stopping posts, we'd love to hear from you.",
    ],
    details: [
      { label: "Work Type", value: "Fully Remote" },
      { label: "Duration", value: "3 months (renewable)" },
      { label: "Stipend", value: "₹1,000 – ₹5,000 / month (performance-based)" },
      { label: "Start", value: "As soon as possible" },
    ],
    responsibilities: [
      "Own and execute the content calendar across Instagram and LinkedIn",
      "Create posts, reels, carousels, and short-form video content",
      "Research trends, formats, and competitors to keep our content fresh",
      "Track engagement metrics and iterate based on what works",
      "Collaborate with the team on campaigns, launches, and announcements",
    ],
    taskTitle: 'Instagram Post + Reel — "Why Social Presence Isn\'t Optional"',
    taskBody: [
      "Create one Instagram post and one short reel (15–20 sec) arguing that businesses without a real social presence are losing customers — not just missing \"nice to have\" visibility.",
      "Requirement: Back your argument with at least one real, cited, verifiable statistic or study. If you can't trace where a number actually comes from, don't use it (e.g., skip vague, unsourceable claims like \"90% of people check social media before buying\").",
      'Goal: Make a business owner think "I didn\'t realize this was costing me something" — and naturally arrive at wanting to build or fix their social presence. The content should guide the viewer toward that decision on their own; don\'t pitch our services directly — let the problem make the case, so the service feels like the obvious next step rather than an ad.',
    ],
    deliverables: [
      "1 Instagram post (image + caption)",
      "1 reel — fully produced (animation / AI-based) OR a script / storyboard if you don't have editing tools",
      "2–3 lines noting your source and why you chose this angle",
    ],
    submissionSteps: [
      "Upload all files (post, reel / storyboard, and your source note) to a single Google Drive folder",
      "Set sharing access to \"Anyone with the link can view\" — links that require access requests won't be considered",
      "Email your public Drive link + resume or portfolio to careers@cascrete.com",
    ],
    email: "careers@cascrete.com",
  },
  {
    id: "lead-generation-intern",
    badge: "Internship · Remote",
    title: "Lead Generation Intern",
    tagline: "Find the right people. Start the right conversations.",
    about: [
      "We're looking for a resourceful Lead Generation Intern who can identify high-potential clients for Cascrete and craft outreach that actually gets replies. You'll work directly with the founding team to build our pipeline — researching leads, qualifying prospects, and writing personalized messages that open doors.",
      "This is a commission and performance-based role — your earnings are directly tied to the quality and impact of the leads you bring in. If you're a natural researcher, good with people, and enjoy the hunt, we want to hear from you.",
    ],
    details: [
      { label: "Work Type", value: "Fully Remote" },
      { label: "Duration", value: "3 months (renewable)" },
      { label: "Stipend", value: "Commission / Performance-based" },
      { label: "Start", value: "As soon as possible" },
    ],
    responsibilities: [
      "Research and identify qualified leads (founders, SMB owners, decision-makers) across target industries",
      "Build and maintain a structured lead list with relevant context for each prospect",
      "Write personalized outreach messages (LinkedIn DMs or emails) tailored to each lead",
      "Track outreach status and follow-up systematically",
      "Collaborate with the team to refine the ICP (Ideal Customer Profile) based on what's working",
    ],
    taskTitle: "Find 10 Real Leads + Sample Outreach",
    taskBody: [
      "Build a small lead list for Cascrete and show us your outreach approach.",
      "1. Find 10 real leads — small/medium business owners, founders, or decision-makers in [pick one city/industry] who likely need one of our services (Website Development, Branding & Identity, or Social Media Creatives — pick one).",
      "2. In a Google Sheet, list each lead with columns: Name, Title, Company, Industry, Company Size (approx.), LinkedIn URL, Reason (why they're a good fit — e.g., \"no active website,\" \"inconsistent branding\").",
      "3. Write 3 personalized outreach messages (LinkedIn DM or email) for 3 of the 10 leads — tailored to each, not a copy-paste template. Add these on a separate tab in the same sheet.",
    ],
    deliverables: [
      "A Google Sheet with 10 real, verified leads (Name, Title, Company, Industry, Company Size, LinkedIn URL, Reason)",
      "A second tab in the same sheet with 3 personalized outreach messages for 3 of the leads",
    ],
    submissionSteps: [
      "Only real, verifiable people/companies — no invented details",
      "Use only public professional info (LinkedIn, company sites) — no paid tools required",
      "Set the Google Sheet's sharing to \"Anyone with the link can view\"",
      "Email the sheet link + resume or portfolio to careers@cascrete.com",
    ],
    email: "careers@cascrete.com",
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-dark-900 px-5 py-24 md:px-16 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,102,190,0.28),transparent_38%)]" />
          <div className="relative mx-auto max-w-[1120px]">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-[#e7deff]">
              Join the team
            </span>
            <h1 className="mt-5 max-w-[760px] font-jakarta text-[64px] font-bold leading-[1.05] tracking-[-1.8px] text-[#f1f0f9] max-md:text-[42px]">
              Build the future of digital products.
            </h1>
            <p className="mt-6 max-w-[600px] font-jakarta text-[18px] leading-[30px] text-[rgba(241,240,249,0.78)]">
              We are a small, ambitious studio helping founders and businesses move from a good idea
              to something real. Come build work that matters.
            </p>
          </div>
        </section>

        {/* Why Cascrete */}
        <section className="mx-auto max-w-[1120px] px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-[720px]">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-primary-dark">
              Why Cascrete?
            </span>
            <h2 className="mt-4 font-jakarta text-[40px] font-bold leading-[46px] tracking-[-1px] text-ink-900 max-md:text-[32px]">
              Small team. Real ownership.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["High impact", "Your ideas, code, and design decisions have a visible effect on the work we ship."],
              ["Work with trust", "We value clear communication, thoughtful work, and the freedom to do your best."],
              ["Keep learning", "Every project brings a new problem to solve and a chance to sharpen your craft."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-[12px] border border-[rgba(202,196,211,0.5)] bg-surface-card p-6"
              >
                <h3 className="font-jakarta text-[20px] font-semibold leading-[28px] text-ink-900">{title}</h3>
                <p className="mt-3 font-jakarta text-[15px] leading-[24px] text-ink-700">{description}</p>
              </article>
            ))}
          </div>

          {/* Open Roles */}
          <div className="mt-20">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-primary-dark">
              Open Positions
            </span>
            <h2 className="mt-4 font-jakarta text-[40px] font-bold leading-[46px] tracking-[-1px] text-ink-900 max-md:text-[32px]">
              {OPEN_ROLES.length} role{OPEN_ROLES.length !== 1 ? "s" : ""} open right now
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {OPEN_ROLES.map((role) => (
                <article
                  id={role.id}
                  key={role.id}
                  className="overflow-hidden rounded-[20px] border border-[rgba(202,196,211,0.55)] bg-surface-card shadow-[0_2px_24px_rgba(120,102,190,0.06)]"
                >
                  {/* Role header */}
                  <div className="border-b border-[rgba(202,196,211,0.45)] bg-[rgba(120,102,190,0.04)] px-8 py-7 max-md:px-5 max-md:py-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.7px] text-primary-dark">
                          {role.badge}
                        </span>
                        <h3 className="mt-3 font-jakarta text-[28px] font-bold leading-[34px] tracking-[-0.5px] text-ink-900 max-md:text-[22px]">
                          {role.title}
                        </h3>
                        <p className="mt-1 font-jakarta text-[15px] leading-[24px] text-ink-700">
                          {role.tagline}
                        </p>
                      </div>
                      <a
                        href={`mailto:${role.email}`}
                        className="flex shrink-0 items-center gap-2 rounded-[8px] bg-primary px-5 py-3 font-jakarta text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        Apply Now
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="px-8 py-8 max-md:px-5 max-md:py-6">
                    {/* Quick details grid */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      {role.details.map((d) => (
                        <div key={d.label} className="rounded-[10px] border border-[rgba(202,196,211,0.5)] px-4 py-3">
                          <p className="font-mono text-[9px] uppercase tracking-[0.6px] text-ink-600">{d.label}</p>
                          <p className="mt-1 font-jakarta text-[13px] font-semibold leading-[20px] text-ink-900">{d.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* About */}
                    <div className="mt-8">
                      <h4 className="font-jakarta text-[16px] font-semibold text-ink-900">About the role</h4>
                      {role.about.map((para, i) => (
                        <p key={i} className="mt-3 font-jakarta text-[15px] leading-[26px] text-ink-700">{para}</p>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <div className="mt-8">
                      <h4 className="font-jakarta text-[16px] font-semibold text-ink-900">What you'll do</h4>
                      <ul className="mt-3 flex flex-col gap-2">
                        {role.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span aria-hidden="true" className="mt-[9px] size-[5px] shrink-0 rounded-full bg-primary" />
                            <span className="font-jakarta text-[15px] leading-[26px] text-ink-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application Task */}
                    <div className="mt-8 rounded-[14px] bg-[rgba(120,102,190,0.06)] p-6 ring-1 ring-[rgba(120,102,190,0.18)]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.7px] text-primary-dark">Application Task</p>
                      <h4 className="mt-2 font-jakarta text-[17px] font-bold leading-[26px] text-ink-900">{role.taskTitle}</h4>
                      {role.taskBody.map((para, i) => (
                        <p key={i} className="mt-3 font-jakarta text-[14px] leading-[24px] text-ink-700">{para}</p>
                      ))}

                      {/* Deliverables */}
                      <div className="mt-6 border-t border-[rgba(120,102,190,0.18)] pt-5">
                        <h5 className="font-jakarta text-[14px] font-semibold text-ink-900">Deliverables</h5>
                        <ul className="mt-3 flex flex-col gap-2">
                          {role.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span aria-hidden="true" className="mt-[9px] size-[5px] shrink-0 rounded-full bg-primary" />
                              <span className="font-jakarta text-[14px] leading-[22px] text-ink-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Submission */}
                      <div className="mt-5 border-t border-[rgba(120,102,190,0.18)] pt-5">
                        <h5 className="font-jakarta text-[14px] font-semibold text-ink-900">Submission Guidelines</h5>
                        <ol className="mt-3 flex flex-col gap-3">
                          {role.submissionSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-[2px] flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[10px] font-bold text-primary-dark">
                                {idx + 1}
                              </span>
                              <span className="font-jakarta text-[14px] leading-[22px] text-ink-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={`mailto:${role.email}`}
                        className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 font-jakarta text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        Apply — {role.email}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <p className="font-jakarta text-[13px] text-ink-600">
                        No cover letter needed — your task submission speaks for itself.
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* General CTA */}
          <div className="mt-20 rounded-[16px] bg-primary-dark px-6 py-10 md:px-12">
            <span className="font-mono text-[10px] uppercase leading-[14px] tracking-[0.7px] text-[#e7deff]">
              Don't see your role?
            </span>
            <h2 className="mt-3 font-jakarta text-[32px] font-bold leading-[40px] tracking-[-0.7px] text-white">
              Send us your resume and portfolio.
            </h2>
            <p className="mt-3 max-w-[560px] font-jakarta text-[15px] leading-[24px] text-[rgba(255,255,255,0.78)]">
              We are always open to meeting thoughtful developers, designers, and operators.
            </p>
            <a
              href="mailto:careers@cascrete.com"
              className="mt-6 inline-flex rounded-[8px] bg-white px-5 py-3 font-jakarta text-[14px] font-semibold text-primary-dark transition-opacity hover:opacity-90"
            >
              careers@cascrete.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}