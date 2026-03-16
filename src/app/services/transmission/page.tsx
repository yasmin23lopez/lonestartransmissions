import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/services";
import { TransmissionIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug, type Service } from "@/sanity/lib/fetch";

const FALLBACK: Partial<Service> = {
  title: "TRANSMISSION",
  subtitle: "Repair & Rebuild",
  description: "Our specialty. With 20+ years of experience, we're the transmission experts Houston trusts. From minor repairs to complete rebuilds, we do it right the first time.",
  features: [
    "Complete transmission diagnostics",
    "Transmission fluid service and flush",
    "Torque converter repair and replacement",
    "Valve body service and repair",
    "Solenoid replacement",
    "Clutch pack repair",
    "Seal and gasket replacement",
    "Complete transmission rebuilds",
  ],
  warningSigns: [
    "Slipping gears or delayed engagement",
    "Grinding or shaking when shifting",
    "Burning smell from transmission",
    "Transmission fluid leak (red fluid)",
    "Check engine or transmission warning light",
    "Won't go into gear or stuck in one gear",
  ],
  extraSections: [
    {
      title: "Transmission Types We Service",
      items: [
        { name: "Automatic Transmission", desc: "All makes and models, domestic and foreign" },
        { name: "Manual Transmission", desc: "Clutch replacement, synchronizer repair, rebuilds" },
        { name: "CVT Transmission", desc: "Specialized service for continuously variable transmissions" },
        { name: "Performance Builds", desc: "Upgraded components for high-performance applications" },
      ],
    },
  ],
  benefits: [
    { title: "20+ Years Experience", desc: "Transmission specialists" },
    { title: "Warranty Included", desc: "12 month / 12,000 mile" },
    { title: "Quality Parts", desc: "OEM and upgraded options" },
    { title: "Fast Turnaround", desc: "Most rebuilds in 3-5 days" },
  ],
  faqs: [
    { question: "How much does a transmission rebuild cost?", answer: "Costs vary by vehicle and extent of damage. We provide free diagnostics and detailed estimates before any work begins." },
    { question: "Should I repair or replace my transmission?", answer: "A quality rebuild is often more cost-effective than replacement and can last just as long. We'll give you honest advice." },
    { question: "Do you offer free towing?", answer: "Yes! We offer free towing for transmission repairs within our service area." },
    { question: "What's your warranty?", answer: "All transmission work comes with a 12-month/12,000-mile warranty. Extended warranties available." },
  ],
  ctaTitle: "TRANSMISSION EXPERTS",
  ctaSubtitle: "20+ years of experience. Thousands of satisfied customers. Free diagnostic. Free towing with major repairs.",
};

export default async function TransmissionPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug("transmission"),
  ]);

  const s = { ...FALLBACK, ...service } as Service;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <ServiceDetail
        service={s}
        settings={settings}
        icon={<TransmissionIcon className="w-8 h-8 text-white" />}
        fallbackImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072"
        fallbackFeatures={FALLBACK.features!}
        fallbackWarningSigns={FALLBACK.warningSigns}
        fallbackExtraSections={FALLBACK.extraSections}
        fallbackBenefits={FALLBACK.benefits!}
        fallbackFaqs={FALLBACK.faqs!}
        fallbackCtaTitle={FALLBACK.ctaTitle!}
        fallbackCtaSubtitle={FALLBACK.ctaSubtitle!}
        benefitsTitle="The Lonestar Difference"
        warningSignsTitle="Signs Your Transmission Needs Attention"
        ctaCardTitle="Transmission problems?"
        ctaCardText="Don't wait until it's too late. Get a free diagnostic and honest assessment from the experts."
      />
      <Footer />
    </div>
  );
}
