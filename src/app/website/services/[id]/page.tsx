"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Phone, Settings } from "lucide-react";
import { motion } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT, SERVICES, SERVICES_DETAILED } from "@/lib/constants";

const SERVICE_CONTENT: Record<string, { features: string[]; process: string[]; benefits: string[] }> = {
  "01": {
    features: ["Complete transmission scan", "Fluid condition analysis", "Leak detection", "Road test evaluation", "Computer diagnostic", "Pressure testing"],
    process: ["Drop off your vehicle", "We perform 25-point inspection", "Receive detailed report", "Get honest recommendation"],
    benefits: ["No obligation", "Same-day results", "Written estimate", "Expert advice"],
  },
  "02": {
    features: ["Torque converter repair", "Valve body service", "Solenoid replacement", "Clutch pack repair", "Seal replacement", "Complete rebuilds"],
    process: ["Free diagnostic", "Detailed estimate", "Professional repair", "Quality testing"],
    benefits: ["Warranty included", "OEM parts available", "Fast turnaround", "Financing options"],
  },
  "03": {
    features: ["Clutch replacement", "Flywheel resurfacing", "Synchronizer repair", "Gear replacement", "Bearing service", "Complete rebuilds"],
    process: ["Free diagnostic", "Detailed estimate", "Expert repair", "Road test verification"],
    benefits: ["Warranty included", "Quality parts", "Expert technicians", "Competitive pricing"],
  },
  "04": {
    features: ["Complete disassembly", "Parts inspection", "Precision machining", "New seals & gaskets", "Torque converter rebuild", "Dyno testing"],
    process: ["Full inspection", "Rebuild estimate", "Complete overhaul", "Quality assurance"],
    benefits: ["Like-new performance", "Extended warranty", "Factory specs", "Lasting results"],
  },
};

export default function ServicePage() {
  const params = useParams();
  const id = params.id as string;
  
  const service = SERVICES_DETAILED.find(s => s.id === id);
  const serviceWithImage = SERVICES.find(s => s.id === id);
  const content = SERVICE_CONTENT[id];
  
  if (!service || !content) {
    return (
      <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)]">
        <Navbar />
        <div className="pt-40 pb-24 text-center">
          <h1 className="text-4xl font-bold text-[#070889]">Service not found</h1>
          <Link href="/website/services" className="mt-4 inline-flex items-center gap-2 text-[#1314CC]">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = SERVICES_DETAILED.findIndex(s => s.id === id);
  const nextService = SERVICES_DETAILED[(currentIndex + 1) % SERVICES_DETAILED.length];
  const prevService = SERVICES_DETAILED[(currentIndex - 1 + SERVICES_DETAILED.length) % SERVICES_DETAILED.length];

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src={serviceWithImage?.image || "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074"}
            alt={service.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <Link href="/website/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">SERVICE {service.id}</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-4">
            {service.title}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">{service.subtitle} — {service.desc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Description & Features */}
            <div>
              <FadeIn>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">{service.desc}</p>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h3 className="text-2xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-6">What's Included</h3>
                <div className="grid grid-cols-2 gap-4">
                  {content.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#1314CC]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right - Process & CTA */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-6">Our Process</h3>
                <div className="space-y-4 mb-12">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-[#1314CC] text-white font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-[#0a0a12] rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Ready to get started?</h4>
                  <p className="text-white/60 mb-6">Schedule your free diagnostic today and let our experts take care of your transmission.</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-bold rounded-full hover:bg-[#b91c1c] transition-colors">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-bold rounded-full hover:bg-[#0e0ea0] transition-colors">
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
            <h3 className="text-3xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-8">Why Choose Us</h3>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {content.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                  <CheckCircle className="w-8 h-8 text-[#1314CC] mx-auto mb-4" />
                  <p className="font-bold text-[#070889]">{benefit}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link href={`/website/services/${prevService.id}`} className="group flex items-center gap-4">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#1314CC] transition-colors" />
              <div>
                <p className="text-sm text-gray-400">Previous</p>
                <p className="font-bold text-[#070889] group-hover:text-[#1314CC] transition-colors">{prevService.title}</p>
              </div>
            </Link>
            <Link href={`/website/services/${nextService.id}`} className="group flex items-center gap-4 text-right">
              <div>
                <p className="text-sm text-gray-400">Next</p>
                <p className="font-bold text-[#070889] group-hover:text-[#1314CC] transition-colors">{nextService.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1314CC] transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
