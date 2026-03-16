import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/services";
import { CarDiagnosticIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug, type Service } from "@/sanity/lib/fetch";

const FALLBACK: Partial<Service> = {
  title: "FREE DIAGNOSTIC",
  subtitle: "25-Point Inspection",
  description: "Not sure what's wrong with your transmission? Our comprehensive diagnostic service identifies issues quickly and accurately—completely free of charge.",
  features: [
    "Complete transmission scan with advanced diagnostic tools",
    "Fluid condition and level analysis",
    "Leak detection and inspection",
    "Road test evaluation",
    "Computer code reading and analysis",
    "Pressure testing when needed",
  ],
  extraSections: [
    {
      title: "Our Process",
      items: [
        { name: "Drop Off", desc: "Bring your vehicle to our shop or schedule free towing" },
        { name: "Inspection", desc: "Our technicians perform a thorough 25-point inspection" },
        { name: "Diagnosis", desc: "We identify the root cause of your transmission issues" },
        { name: "Report", desc: "Receive a detailed report with honest recommendations" },
      ],
    },
  ],
  benefits: [
    { title: "100% Free", desc: "No hidden fees or obligations" },
    { title: "Same-Day Results", desc: "Get answers quickly" },
    { title: "Written Estimate", desc: "Transparent pricing upfront" },
    { title: "Expert Advice", desc: "20+ years of experience" },
  ],
  faqs: [
    { question: "Is the diagnostic really free?", answer: "Yes, absolutely. Our 25-point diagnostic inspection is completely free with no obligation to repair." },
    { question: "How long does it take?", answer: "Most diagnostics are completed within 1-2 hours. We'll call you as soon as we have results." },
    { question: "Do I need an appointment?", answer: "Walk-ins are welcome, but scheduling ahead ensures faster service." },
  ],
  ctaTitle: "FREE DIAGNOSTIC TODAY",
  ctaSubtitle: "Don't guess what's wrong with your transmission. Get a professional diagnosis—completely free.",
};

export default async function DiagnosticPage() {
  const [settings, service] = await Promise.all([getSiteSettings(), getServiceBySlug("diagnostic")]);
  const s = { ...FALLBACK, ...service } as Service;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <ServiceDetail
        service={s} settings={settings}
        icon={<CarDiagnosticIcon className="w-8 h-8 text-white" />}
        fallbackImage="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074"
        fallbackFeatures={FALLBACK.features!} fallbackExtraSections={FALLBACK.extraSections}
        fallbackBenefits={FALLBACK.benefits!} fallbackFaqs={FALLBACK.faqs!}
        fallbackCtaTitle={FALLBACK.ctaTitle!} fallbackCtaSubtitle={FALLBACK.ctaSubtitle!}
        featuresTitle="What's Included" benefitsTitle="Why Choose Our Diagnostic"
        ctaCardTitle="Ready to get started?" ctaCardText="Schedule your free diagnostic today. No obligation, just honest answers."
      />
      <Footer />
    </div>
  );
}
