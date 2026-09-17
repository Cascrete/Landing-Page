import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiscoveryModule from "@/components/DiscoveryModule";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <div
      className="flex w-full flex-col items-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(250,248,255) 0%, rgb(250,248,255) 100%), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)",
      }}
    >
      <Header />

      <main className="relative flex w-full flex-col items-center justify-center gap-[64px] bg-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cascrete",
              url: "https://cascrete.com",
              logo: "https://cascrete.com/assets/logo.svg",
              email: "contact@cascrete.com",
              description:
                "Cascrete designs and develops websites, apps, brands, social media creatives, packaging, and editorial experiences.",
              serviceType: [
                "Website Development",
                "App Development",
                "UI/UX Design",
                "Branding and Identity",
                "Automation and Tools",
                "Social Media Creatives",
                "Packaging Design",
                "Editorial Design",
              ],
            }),
          }}
        />
        <BackgroundBlobs />
        <Hero />
        <DiscoveryModule />
        <AboutSection />
        <CapabilitiesSection />
        <ProcessSection />
        <CtaSection />
      </main>

      <Footer />
      <ContactModal />
    </div>
  );
}
