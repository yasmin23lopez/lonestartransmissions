"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle, DollarSign, Clock, Shield, Phone, Settings } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT } from "@/lib/constants";

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072"
            alt="Financing"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
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
            Don't let car trouble break the bank. We offer flexible financing options so you can get back on the road without the stress.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Easy Approval", desc: "Quick application process with fast decisions" },
              { icon: Clock, title: "Flexible Terms", desc: "Payment plans that fit your budget and timeline" },
              { icon: Shield, title: "No Hidden Fees", desc: "Transparent pricing with no surprises" },
              { icon: CheckCircle, title: "Same-Day Service", desc: "Get approved and repaired the same day" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#FAFAFA] rounded-2xl p-8 text-center h-full">
                  <div className="w-16 h-16 bg-[#1314CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[#1314CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#16215B] mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
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
              { step: "02", title: "Apply for Financing", desc: "Fill out a quick application. We work with multiple lenders to find the best option for you." },
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
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1314CC] font-bold tracking-wider rounded-full hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              <span>CALL {CONTACT.phone}</span>
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold tracking-wider rounded-full hover:bg-white hover:text-[#1314CC] transition-colors">
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
