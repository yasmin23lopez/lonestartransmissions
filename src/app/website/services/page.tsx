"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Settings } from "lucide-react";
import { motion } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT, SERVICES_DETAILED } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074"
            alt="Transmission Services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">OUR SERVICES</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            TRANSMISSION<br />SERVICES
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            From free diagnostics to complete rebuilds, we handle all your transmission needs with 20+ years of expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_DETAILED.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Link href={`/website/services/${service.id}`}>
                  <motion.div
                    className="group relative p-8 lg:p-10 rounded-2xl cursor-pointer overflow-hidden bg-[#FAFAFA] border border-gray-200 h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div className="absolute inset-0 bg-[#1314CC]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.4 }} />
                    <div className="relative z-10">
                      <span className="text-6xl lg:text-7xl font-[family-name:var(--font-saira)] font-black leading-none text-[#16215B]/10 group-hover:text-white/20 transition-colors">
                        {service.id}
                      </span>
                      <div className="mt-4 space-y-3">
                        <h3 className="text-3xl font-[family-name:var(--font-saira)] font-bold tracking-wide text-[#16215B] group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-white/60 transition-colors">{service.subtitle}</p>
                        <p className="text-gray-500 group-hover:text-white/80 transition-colors">{service.desc}</p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-[#1314CC] group-hover:text-white transition-colors">
                        <span className="font-bold">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Free Diagnostic CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-6">
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-xs font-bold tracking-[0.2em] text-white">FREE SERVICE</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
                FREE 25-POINT<br />INSPECTION
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Every vehicle gets a comprehensive inspection at no charge. Know exactly what your car needs before committing to any repairs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#DC2626] font-bold tracking-wider rounded-full hover:bg-gray-100 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>CALL NOW</span>
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold tracking-wider rounded-full hover:bg-white hover:text-[#DC2626] transition-colors">
                  BOOK ONLINE
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Fluid Check", "Leak Inspection", "Road Test", "Computer Scan", "Filter Check", "Pressure Test"].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
