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
