import Image from "next/image";
import { ArrowUpRight, CheckCircle, Phone, Settings, ExternalLink } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { getFinancingPageData } from "@/sanity/lib/fetch";

const FALLBACK_PARTNERS = [
  { _id: '1', name: "EasyPay Finance", logo: "/easypay.webp", applyUrl: "https://customerappx.easypayfinance.com/application/A52AADEF", tagline: "Easy Approval Process", order: 1 },
  { _id: '2', name: "Snap Finance", logo: "/snap.jpeg", applyUrl: "https://snapf.in/PTgnwlr", tagline: "Up to $5,000", order: 2 },
  { _id: '3', name: "Affirm", logo: "/affirm.png", applyUrl: "#", tagline: "Pay Over Time", order: 3 },
  { _id: '4', name: "Klarna", logo: "/klarna.png", applyUrl: "#", tagline: "Flexible Payments", order: 4 },
];

const PARTNER_DETAILS: Record<string, { description: string; features: string[]; note?: string; logoHeight: string }> = {
  "EasyPay Finance": {
    description: "Get approved quickly with EasyPay Finance. Simple application, fast decisions, and flexible payment plans that work with your budget.",
    features: ["Quick online application", "Fast approval decisions", "Flexible payment terms", "No prepayment penalties"],
    logoHeight: "h-14",
  },
  "EasyPay": {
    description: "Get approved quickly with EasyPay Finance. Simple application, fast decisions, and flexible payment plans that work with your budget.",
    features: ["Quick online application", "Fast approval decisions", "Flexible payment terms", "No prepayment penalties"],
    logoHeight: "h-14",
  },
  "Snap Finance": {
    description: "Need financing? Snap Finance offers approvals ranging from $300 - $5,000. Bank partner issues installment loans for qualified applicants.",
    features: ["Up to $5,000 approval", "Easy application process", "Installment loan options", "12-month warranty included"],
    note: "Approvals range from $300 - $5,000. Bank partner issues installment loans. Merchant partner issues retail installment contracts.",
    logoHeight: "h-20",
  },
  "Affirm": {
    description: "Split your repair costs into easy monthly payments with Affirm. Know exactly what you'll pay each month with no hidden fees.",
    features: ["Fixed monthly payments", "No hidden fees", "Quick checkout process", "Flexible payment schedules"],
    logoHeight: "h-20",
  },
  "Klarna": {
    description: "Pay for your repairs in 4 interest-free installments with Klarna. Spread the cost without breaking the bank.",
    features: ["Pay in 4 installments", "Interest-free options", "Easy approval", "Manage payments in app"],
    logoHeight: "h-14",
  },
};

export default async function FinancingPage() {
  const { settings, partners, pageContent } = await getFinancingPageData();

  const finalPartners = partners?.length > 0 ? partners : FALLBACK_PARTNERS;
  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

  // Page content with fallbacks
  const hero = pageContent?.hero || {
    label: 'FLEXIBLE PAYMENT OPTIONS',
    title: 'FINANCING AVAILABLE',
    subtitle: "Don't let car trouble break the bank. We partner with multiple financing companies so you can get back on the road without the stress.",
    image: null,
  };

  const partnersSection = pageContent?.sections?.find(s => s.sectionId === 'partners') || {
    label: 'OUR PARTNERS',
    title: 'FINANCING OPTIONS',
  };

  const howItWorksSection = pageContent?.sections?.find(s => s.sectionId === 'how-it-works') || {
    label: 'HOW IT WORKS',
    title: 'SIMPLE PROCESS',
  };

  const cta = pageContent?.cta || {
    title: 'READY TO GET STARTED?',
    subtitle: 'Call us today to learn more about our financing options or schedule your free diagnostic.',
    backgroundColor: '#1314CC',
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={hero.image || "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070"} alt="Financing" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">{hero.label}</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-saira font-black text-white leading-[0.85] uppercase mb-6">{hero.title?.split(' ').slice(0, 1).join(' ')}<br />{hero.title?.split(' ').slice(1).join(' ')}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{hero.subtitle}</p>
        </div>
      </section>

      {/* Financing Partners Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
                <Settings className="w-3.5 h-3.5 text-[#16215B]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">{partnersSection.label}</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-saira font-black text-[#16215B] leading-[0.85] uppercase">{partnersSection.title}</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {finalPartners.map((partner, i) => {
              const details = PARTNER_DETAILS[partner.name] || { description: "", features: [], logoHeight: "h-16" };
              return (
                <FadeIn key={partner._id} delay={i * 0.1}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl hover:border-[#1314CC]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      {partner.logo ? (
                        <Image src={partner.logo} alt={partner.name} width={160} height={60} className={`${details.logoHeight} w-auto object-contain`} />
                      ) : (
                        <span className="text-2xl font-bold text-gray-400">{partner.name}</span>
                      )}
                      <span className="text-sm font-bold text-[#1314CC] bg-[#1314CC]/10 px-3 py-1 rounded-full">{partner.tagline}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{details.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {details.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#1314CC] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {details.note && <p className="text-xs text-gray-400 mb-6 italic">{details.note}</p>}
                    <a href={partner.applyUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold rounded-[9px] hover:bg-[#0e0ea0] transition-all duration-500 ease-out w-full justify-center">
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
              <Settings className="w-3.5 h-3.5 text-[#16215B]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">{howItWorksSection.label}</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-saira font-black text-[#16215B] leading-[0.85] uppercase mb-16">{howItWorksSection.title}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Get Your Estimate", desc: "Bring your vehicle in for a free diagnostic. We'll provide a detailed estimate for the repair." },
              { step: "02", title: "Apply for Financing", desc: "Choose your preferred financing partner and fill out a quick application. Most decisions are instant." },
              { step: "03", title: "Get Back on the Road", desc: "Once approved, we start the repair immediately. Drive away with affordable monthly payments." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-8xl font-saira font-black text-[#1314CC]/10">{item.step}</span>
                  <div className="mt-[-2rem]">
                    <h3 className="text-2xl font-bold text-[#16215B] mb-3">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: cta.backgroundColor || '#1314CC' }}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-7xl font-saira font-black text-white leading-[0.85] uppercase mb-6">{cta.title}</h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">{cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1314CC] font-saira font-semibold tracking-wider rounded-[9px] hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" />
              <span>CALL {phone}</span>
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider rounded-[9px] hover:bg-white hover:text-[#1314CC] transition-all duration-500 ease-out">
              BOOK ONLINE
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
