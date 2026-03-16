"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui";
import type { Service, SiteSettings } from "@/sanity/lib/fetch";

interface ServiceDetailProps {
  service: Service;
  settings: SiteSettings | null;
  icon: React.ReactNode;
  fallbackImage: string;
  fallbackFeatures: string[];
  fallbackWarningSigns?: string[];
  fallbackExtraSections?: { title: string; items: { name: string; desc: string }[] }[];
  fallbackBenefits: { title: string; desc: string }[];
  fallbackFaqs: { question: string; answer: string }[];
  fallbackCtaTitle: string;
  fallbackCtaSubtitle: string;
  benefitsTitle?: string;
  featuresTitle?: string;
  warningSignsTitle?: string;
  ctaCardTitle?: string;
  ctaCardText?: string;
}

export function ServiceDetail({
  service,
  settings,
  icon,
  fallbackImage,
  fallbackFeatures,
  fallbackWarningSigns,
  fallbackExtraSections,
  fallbackBenefits,
  fallbackFaqs,
  fallbackCtaTitle,
  fallbackCtaSubtitle,
  benefitsTitle = "Why Choose Us",
  featuresTitle = "Our Services",
  warningSignsTitle = "Warning Signs",
  ctaCardTitle,
  ctaCardText,
}: ServiceDetailProps) {
  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

  const heroImage = service?.image || fallbackImage;
  const features = service?.features?.length ? service.features : fallbackFeatures;
  const warningSigns = service?.warningSigns?.length ? service.warningSigns : fallbackWarningSigns;
  const extraSections = service?.extraSections?.length ? service.extraSections : fallbackExtraSections;
  const benefits = service?.benefits?.length ? service.benefits : fallbackBenefits;
  const faqs = service?.faqs?.length ? service.faqs : fallbackFaqs;
  const ctaTitle = service?.ctaTitle || fallbackCtaTitle;
  const ctaSubtitle = service?.ctaSubtitle || fallbackCtaSubtitle;
  const title = service?.title || "";
  const subtitle = service?.subtitle || "";
  const description = service?.description || "";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={heroImage} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <Link href="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h1 className="text-5xl lg:text-8xl font-saira font-black text-white leading-[0.85] uppercase mb-4">{title}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <FadeIn><p className="text-xl text-gray-600 mb-12 leading-relaxed">{description}</p></FadeIn>
              <FadeIn delay={0.1}>
                <h3 className="text-2xl font-saira font-bold text-[#070889] uppercase mb-6">{featuresTitle}</h3>
                <div className={features.length > 6 ? "grid grid-cols-2 gap-3" : "space-y-4"}>
                  {features.map((feature, i) => (
                    <div key={i} className={`flex items-start gap-${features.length > 6 ? '2 p-3' : '3 p-4'} bg-gray-50 rounded-xl`}>
                      <CheckCircle className={`w-${features.length > 6 ? '4' : '5'} h-${features.length > 6 ? '4' : '5'} text-[#1314CC] mt-0.5 flex-shrink-0`} />
                      <span className={`text-gray-700 ${features.length > 6 ? 'text-sm' : ''}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
              {extraSections?.map((section, si) => (
                <FadeIn key={si} delay={0.15}>
                  <h3 className="text-2xl font-saira font-bold text-[#070889] uppercase mb-6 mt-12">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-bold text-[#070889]">{item.name}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
            <div>
              {warningSigns && warningSigns.length > 0 && (
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-saira font-bold text-[#070889] uppercase mb-6">{warningSignsTitle}</h3>
                  <div className="space-y-3 mb-12">
                    {warningSigns.map((sign, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="w-2 h-2 bg-[#DC2626] rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{sign}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
              {!warningSigns?.length && extraSections && !extraSections.length && null}
              <FadeIn delay={0.3}>
                <div className="bg-[#070889] rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">{ctaCardTitle || `${title} problems?`}</h4>
                  <p className="text-white/60 mb-6">{ctaCardText || "Get a free diagnostic and honest assessment from the experts."}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-saira font-semibold rounded-[9px] hover:bg-[#b91c1c] transition-all duration-500 ease-out">
                      <Phone className="w-4 h-4" />Call Now
                    </a>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold rounded-[9px] hover:bg-[#0e0ea0] transition-all duration-500 ease-out">
                      Book Online<ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn><div className="text-center mb-12"><h3 className="text-3xl lg:text-4xl font-saira font-bold text-[#070889] uppercase">{benefitsTitle}</h3></div></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                  <div className="w-14 h-14 bg-[#1314CC]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-[#1314CC]" />
                  </div>
                  <p className="font-bold text-[#070889] text-lg mb-2">{benefit.title}</p>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn><h3 className="text-3xl font-saira font-bold text-[#070889] uppercase mb-8 text-center">Common Questions</h3></FadeIn>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="font-bold text-[#070889] mb-2">{faq.question}</p>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-saira font-black text-white leading-[0.9] uppercase mb-6">{ctaTitle}</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">{ctaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-saira font-semibold tracking-wider rounded-[9px] hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" /><span>CALL {phone}</span>
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider rounded-[9px] hover:bg-white hover:text-[#DC2626] transition-all duration-500 ease-out">
              BOOK ONLINE<ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
