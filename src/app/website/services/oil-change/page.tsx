"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Phone, Clock, Shield, DollarSign, Droplets } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { OilChangeIcon } from "@/components/icons";
import { BOOKING_URL, CONTACT } from "@/lib/constants";

const SERVICE = {
  title: "OIL CHANGE",
  subtitle: "Full Service",
  description: "Keep your engine running smooth with our comprehensive oil change service. We use quality oils and filters to protect your engine and extend its life.",
  features: [
    "Drain old oil completely",
    "Replace oil filter with quality filter",
    "Refill with manufacturer-recommended oil",
    "Check and top off all fluids",
    "Inspect belts and hoses",
    "Reset oil life monitor",
  ],
  oilTypes: [
    { name: "Conventional Oil", desc: "Budget-friendly option for older vehicles", price: "From $39" },
    { name: "Synthetic Blend", desc: "Better protection at a moderate price", price: "From $59" },
    { name: "Full Synthetic", desc: "Maximum protection and performance", price: "From $79" },
    { name: "High Mileage", desc: "Specially formulated for 75k+ mile vehicles", price: "From $69" },
  ],
  benefits: [
    { icon: Droplets, title: "Quality Oils", desc: "Top brands only" },
    { icon: Clock, title: "Quick Service", desc: "30 minutes or less" },
    { icon: Shield, title: "Engine Protection", desc: "Extend engine life" },
    { icon: DollarSign, title: "Fair Pricing", desc: "No hidden fees" },
  ],
  faqs: [
    { q: "How often should I change my oil?", a: "Most vehicles need an oil change every 3,000-7,500 miles depending on oil type and driving conditions. Check your owner's manual or ask us." },
    { q: "What type of oil does my car need?", a: "We'll check your manufacturer's recommendations and help you choose the right oil for your vehicle and driving habits." },
    { q: "Do you check other fluids?", a: "Yes! Every oil change includes a complimentary check of all fluids including transmission, brake, coolant, and power steering." },
  ],
};

export default function OilChangePage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070"
            alt={SERVICE.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <Link href="/website#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <OilChangeIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-4">
            {SERVICE.title}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">{SERVICE.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <FadeIn>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">{SERVICE.description}</p>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h3 className="text-2xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-6">What's Included</h3>
                <div className="space-y-4">
                  {SERVICE.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#1314CC] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-6">Oil Options</h3>
                <div className="space-y-4 mb-12">
                  {SERVICE.oilTypes.map((oil, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-bold text-[#070889]">{oil.name}</p>
                        <p className="text-gray-500 text-sm">{oil.desc}</p>
                      </div>
                      <span className="text-[#1314CC] font-bold">{oil.price}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-[#070889] rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Need an oil change?</h4>
                  <p className="text-white/60 mb-6">Quick service, quality products, fair prices. Walk-ins welcome!</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-saira font-semibold rounded-[9px] hover:bg-[#b91c1c] transition-all duration-500 ease-out">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold rounded-[9px] hover:bg-[#0e0ea0] transition-all duration-500 ease-out">
                      Book Online
                      <ArrowUpRight className="w-4 h-4" />
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
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase">Why Choose Us</h3>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                  <div className="w-14 h-14 bg-[#1314CC]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#1314CC]" />
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
            <FadeIn>
              <h3 className="text-3xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-8 text-center">Common Questions</h3>
            </FadeIn>
            <div className="space-y-6">
              {SERVICE.faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="font-bold text-[#070889] mb-2">{faq.q}</p>
                    <p className="text-gray-600">{faq.a}</p>
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
          <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
            DUE FOR AN OIL CHANGE?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Don't wait until it's too late. Regular oil changes protect your engine and save you money.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-saira font-semibold tracking-wider rounded-[9px] hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" />
              <span>CALL {CONTACT.phone}</span>
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider rounded-[9px] hover:bg-white hover:text-[#DC2626] transition-all duration-500 ease-out">
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
