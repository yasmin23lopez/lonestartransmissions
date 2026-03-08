import Image from "next/image";
import { Phone, ArrowUpRight, Settings } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQList } from "@/components/faq";
import { getFAQPageData } from "@/sanity/lib/fetch";

const FALLBACK_FAQS = [
  { _id: '1', question: "Is the diagnostic really free?", answer: "Yes! We offer a completely free diagnostic with a 25-point inspection to identify any transmission issues.", order: 1 },
  { _id: '2', question: "Do you offer free towing?", answer: "Yes, we offer free towing for transmission repairs within our service area. Call us for details.", order: 2 },
  { _id: '3', question: "Do you offer financing?", answer: "Yes, we offer flexible financing options to help you get your car fixed without breaking the bank.", order: 3 },
  { _id: '4', question: "How long does a repair take?", answer: "Most repairs are completed within 1-3 days. We'll give you an accurate timeline after the diagnostic.", order: 4 },
  { _id: '5', question: "Do you work on all vehicle types?", answer: "Yes, we service all makes and models—domestic and foreign, cars, trucks, and SUVs.", order: 5 },
];

export default async function FAQPage() {
  const { settings, faqs, pageContent } = await getFAQPageData();

  const finalFaqs = faqs?.length > 0 ? faqs : FALLBACK_FAQS;
  const phone = settings?.phone || "281-462-4970";

  // Page content with fallbacks
  const hero = pageContent?.hero || {
    label: 'FREQUENTLY ASKED QUESTIONS',
    title: "QUESTIONS? WE'VE GOT ANSWERS.",
    subtitle: 'Find answers to common questions about our transmission services, pricing, and process.',
    image: null,
  };

  const cta = pageContent?.cta || {
    title: 'STILL HAVE QUESTIONS?',
    subtitle: 'Our team is here to help. Give us a call or stop by our shop in Crosby for a free consultation.',
    backgroundColor: '#DC2626',
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={hero.image || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"} alt="FAQ" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">{hero.label}</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-saira font-black text-white leading-[0.85] uppercase mb-6">{hero.title?.split('?')[0]}?<br />{hero.title?.split('?')[1]?.trim() || ''}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{hero.subtitle}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FAQList faqs={finalFaqs} settings={settings} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: cta.backgroundColor || '#DC2626' }}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-saira font-black text-white leading-[0.9] uppercase mb-6">{cta.title}</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">{cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-bold tracking-wider rounded-full hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            <a href="/website/contact" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold tracking-wider rounded-full hover:bg-white hover:text-[#DC2626] transition-colors">
              CONTACT US
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
