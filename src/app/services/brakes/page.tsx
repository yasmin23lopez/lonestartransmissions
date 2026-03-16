import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/services";
import { BrakesIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug, type Service } from "@/sanity/lib/fetch";

const FALLBACK: Partial<Service> = {
  title: "BRAKES",
  subtitle: "Repair & Replacement",
  description: "Your safety is our priority. We provide complete brake services from pad replacement to full system overhauls. Don't compromise on stopping power.",
  features: [
    "Brake pad replacement",
    "Rotor resurfacing or replacement",
    "Caliper repair and replacement",
    "Brake line inspection and repair",
    "Brake fluid flush",
    "ABS system diagnostics",
  ],
  warningSigns: [
    "Squealing or grinding noise when braking",
    "Vibration or pulsing in brake pedal",
    "Vehicle pulls to one side when braking",
    "Soft or spongy brake pedal",
    "Brake warning light on dashboard",
    "Longer stopping distances",
  ],
  benefits: [
    { title: "Safety First", desc: "Quality parts guaranteed" },
    { title: "Same-Day Service", desc: "Most repairs done today" },
    { title: "All Makes", desc: "Domestic & foreign" },
    { title: "Free Inspection", desc: "Know before you pay" },
  ],
  faqs: [
    { question: "How do I know if I need new brakes?", answer: "Common signs include squealing, grinding, vibration, or a soft pedal. We offer free brake inspections." },
    { question: "How long do brake pads last?", answer: "Typically 30,000-70,000 miles depending on driving habits and conditions." },
    { question: "Do you resurface rotors?", answer: "Yes, when possible. If rotors are too worn, we'll recommend replacement for safety." },
  ],
  ctaTitle: "BRAKE SERVICE",
  ctaSubtitle: "Your safety matters. Professional brake service with quality parts and expert technicians.",
};

export default async function BrakesPage() {
  const [settings, service] = await Promise.all([getSiteSettings(), getServiceBySlug("brakes")]);
  const s = { ...FALLBACK, ...service } as Service;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <ServiceDetail
        service={s} settings={settings}
        icon={<BrakesIcon className="w-8 h-8 text-white" />}
        fallbackImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
        fallbackFeatures={FALLBACK.features!} fallbackWarningSigns={FALLBACK.warningSigns}
        fallbackBenefits={FALLBACK.benefits!} fallbackFaqs={FALLBACK.faqs!}
        fallbackCtaTitle={FALLBACK.ctaTitle!} fallbackCtaSubtitle={FALLBACK.ctaSubtitle!}
        featuresTitle="Our Brake Services"
        ctaCardTitle="Brake problems?" ctaCardText="Don't risk your safety. Get a free brake inspection today."
      />
      <Footer />
    </div>
  );
}
