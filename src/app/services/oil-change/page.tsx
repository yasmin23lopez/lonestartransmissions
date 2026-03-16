import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/services";
import { OilChangeIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug, type Service } from "@/sanity/lib/fetch";

const FALLBACK: Partial<Service> = {
  title: "OIL CHANGE",
  subtitle: "Full Service",
  description: "Keep your engine running smooth with regular oil changes. We use quality oils and filters to protect your engine and extend its life.",
  features: [
    "Conventional, synthetic blend, or full synthetic oil",
    "Premium oil filter replacement",
    "Fluid level check and top-off",
    "Tire pressure check",
    "Visual inspection of belts and hoses",
    "Battery condition check",
  ],
  extraSections: [
    {
      title: "Oil Types We Offer",
      items: [
        { name: "Conventional Oil", desc: "Affordable option for older vehicles or low-mileage drivers" },
        { name: "Synthetic Blend", desc: "Best of both worlds—better protection at a moderate price" },
        { name: "Full Synthetic", desc: "Maximum protection for high-performance or newer vehicles" },
        { name: "High Mileage", desc: "Specially formulated for vehicles with 75,000+ miles" },
      ],
    },
  ],
  benefits: [
    { title: "Quality Oil", desc: "Top brands only" },
    { title: "Quick Service", desc: "30 minutes or less" },
    { title: "Engine Protection", desc: "Extend engine life" },
    { title: "Better Performance", desc: "Improved efficiency" },
  ],
  faqs: [
    { question: "How often should I change my oil?", answer: "Most vehicles need an oil change every 3,000-7,500 miles depending on oil type and driving conditions." },
    { question: "What type of oil do I need?", answer: "We'll recommend the best oil for your vehicle based on manufacturer specs and your driving habits." },
    { question: "Do you check other fluids?", answer: "Yes! Every oil change includes a complimentary fluid level check and top-off." },
  ],
  ctaTitle: "OIL CHANGE SERVICE",
  ctaSubtitle: "Keep your engine protected. Quick, professional oil changes with quality products.",
};

export default async function OilChangePage() {
  const [settings, service] = await Promise.all([getSiteSettings(), getServiceBySlug("oil-change")]);
  const s = { ...FALLBACK, ...service } as Service;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <ServiceDetail
        service={s} settings={settings}
        icon={<OilChangeIcon className="w-8 h-8 text-white" />}
        fallbackImage="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070"
        fallbackFeatures={FALLBACK.features!} fallbackExtraSections={FALLBACK.extraSections}
        fallbackBenefits={FALLBACK.benefits!} fallbackFaqs={FALLBACK.faqs!}
        fallbackCtaTitle={FALLBACK.ctaTitle!} fallbackCtaSubtitle={FALLBACK.ctaSubtitle!}
        featuresTitle="What's Included"
        ctaCardTitle="Due for an oil change?" ctaCardText="Quick, professional service. In and out in 30 minutes or less."
      />
      <Footer />
    </div>
  );
}
