import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/services";
import { HeatACIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug, type Service } from "@/sanity/lib/fetch";

const FALLBACK: Partial<Service> = {
  title: "HEAT OR A/C",
  subtitle: "Climate Control",
  description: "Stay comfortable year-round. Whether your A/C isn't cooling or your heater isn't warming, we diagnose and repair all climate control issues.",
  features: [
    "A/C system diagnosis and repair",
    "Refrigerant recharge (R-134a & R-1234yf)",
    "Compressor repair and replacement",
    "Condenser and evaporator service",
    "Heater core repair and replacement",
    "Blower motor service",
    "Climate control electrical diagnosis",
    "Leak detection and repair",
  ],
  extraSections: [
    {
      title: "Common Issues We Fix",
      items: [
        { name: "A/C Not Cooling", desc: "Low refrigerant, compressor issues, or electrical problems" },
        { name: "Weak Airflow", desc: "Clogged cabin filter, blower motor, or ductwork issues" },
        { name: "Strange Smells", desc: "Mold in evaporator, cabin filter needs replacement" },
        { name: "Heater Not Working", desc: "Thermostat, heater core, or coolant issues" },
      ],
    },
  ],
  benefits: [
    { title: "A/C Repair", desc: "Beat the Texas heat" },
    { title: "Heater Service", desc: "Stay warm in winter" },
    { title: "Full Diagnosis", desc: "Find the real problem" },
    { title: "All Systems", desc: "Manual & automatic" },
  ],
  faqs: [
    { question: "Why is my A/C blowing warm air?", answer: "Common causes include low refrigerant, compressor failure, or electrical issues. We'll diagnose the exact cause." },
    { question: "How often should I recharge my A/C?", answer: "A properly sealed system shouldn't need regular recharging. If it does, there's likely a leak that needs repair." },
    { question: "Can you fix my heater?", answer: "Yes! We service all heating system components including heater cores, thermostats, and blend doors." },
  ],
  ctaTitle: "CLIMATE CONTROL SERVICE",
  ctaSubtitle: "Stay comfortable in any weather. Expert A/C and heating repair for all makes and models.",
};

export default async function HVACPage() {
  const [settings, service] = await Promise.all([getSiteSettings(), getServiceBySlug("hvac")]);
  const s = { ...FALLBACK, ...service } as Service;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <ServiceDetail
        service={s} settings={settings}
        icon={<HeatACIcon className="w-8 h-8 text-white" />}
        fallbackImage="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070"
        fallbackFeatures={FALLBACK.features!} fallbackExtraSections={FALLBACK.extraSections}
        fallbackBenefits={FALLBACK.benefits!} fallbackFaqs={FALLBACK.faqs!}
        fallbackCtaTitle={FALLBACK.ctaTitle!} fallbackCtaSubtitle={FALLBACK.ctaSubtitle!}
        benefitsTitle="Climate Control Experts"
        ctaCardTitle="A/C or heater problems?" ctaCardText="Don't suffer through Texas weather. We'll get your climate control working right."
      />
      <Footer />
    </div>
  );
}
