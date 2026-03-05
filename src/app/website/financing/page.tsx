"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle, Phone, Settings, ExternalLink } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT } from "@/lib/constants";

const FINANCING_PARTNERS = [
  {
    name: "EasyPay Finance",
    logo: "/easypay.webp",
    logoHeight: "h-14",
    link: "https://customerappx.easypayfinance.com/application/A52AADEF",
    tagline: "Easy Approval Process",
    description: "Get approved quickly with EasyPay Finance. Simple application, fast decisions, and flexible payment plans that work with your budget.",
    features: ["Quick online application", "Fast approval decisions", "Flexible payment terms", "No prepayment penalties"],
  },
  {
    name: "Snap Finance",
    logo: "/snap.jpeg",
    logoHeight: "h-20",
    link: "https://snapf.in/PTgnwlr",
    tagline: "Approvals up to $5,000",
    description: "Need financing? Snap Finance offers approvals ranging from $300 - $5,000. Bank partner issues installment loans for qualified applicants.",
    features: ["Up to $5,000 approval", "Easy application process", "Installment loan options", "12-month warranty included"],
    note: "Approvals range from $300 - $5,000. Bank partner issues installment loans. Merchant partner issues retail installment contracts.",
  },
  {
    name: "Affirm",
    logo: "/affirm.png",
    logoHeight: "h-20",
    link: "#",
    tagline: "Pay Over Time",
    description: "Split your repair costs into easy monthly payments with Affirm. Know exactly what you'll pay each month with no hidden fees.",
    features: ["Fixed monthly payments", "No hidden fees", "Quick checkout process", "Flexible payment schedules"],
  },
  {
    name: "Klarna",
    logo: "/klarna.png",
    logoHeight: "h-14",
    link: "#",
    tagline: "Flexible Payments",
    description: "Pay for your repairs in 4 interest-free installments with Klarna. Spread the cost without breaking the bank.",
    features: ["Pay in 4 installments", "Interest-free options", "Easy approval", "Manage payments in app"],
  },
];

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070"
            alt="Financing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">FLEXIBLE PAYMENT OPTIONS</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            FINANCING<br />AVAILABLE
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Don't let car trouble break the bank. We partner with multiple financing companies so you can get back on the road without the stress.
          </p>
        </div>
      </section>

      {/* Financing Partners Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
                <Settings className="w-3.5 h-3.5 text-[#16215B]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">OUR PARTNERS</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#16215B] leading-[0.85] uppercase">
                FINANCING OPTIONS
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {FINANCING_PARTNERS.map((partner, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl hover:border-[#1314CC]/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={160} 
                      height={60} 
                      className={`${partner.logoHeight} w-auto object-contain`} 
                    />
                    <span className="text-sm font-bold text-[#1314CC] bg-[#1314CC]/10 px-3 py-1 rounded-full">
                      {partner.tagline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {partner.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1314CC] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Note if exists */}
                  {partner.note && (
                    <p className="text-xs text-gray-400 mb-6 italic">{partner.note}</p>
                  )}

                  {/* CTA */}
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold rounded-[9px] hover:bg-[#0e0ea0] transition-all duration-500 ease-out w-full justify-center"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
              <Settings className="w-3.5 h-3.5 text-[#16215B]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">HOW IT WORKS</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#16215B] leading-[0.85] uppercase mb-16">
              SIMPLE PROCESS
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Get Your Estimate", desc: "Bring your vehicle in for a free diagnostic. We'll provide a detailed estimate for the repair." },
              { step: "02", title: "Apply for Financing", desc: "Choose your preferred financing partner and fill out a quick application. Most decisions are instant." },
              { step: "03", title: "Get Back on the Road", desc: "Once approved, we start the repair immediately. Drive away with affordable monthly payments." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-8xl font-[family-name:var(--font-saira)] font-black text-[#1314CC]/10">{item.step}</span>
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
      <section className="py-24 lg:py-32 bg-[#1314CC]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Call us today to learn more about our financing options or schedule your free diagnostic.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1314CC] font-saira font-semibold tracking-wider rounded-[9px] hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" />
              <span>CALL {CONTACT.phone}</span>
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider rounded-[9px] hover:bg-white hover:text-[#1314CC] transition-all duration-500 ease-out">
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
