"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT, FAQS } from "@/lib/constants";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
            alt="FAQ"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            QUESTIONS?<br />WE'VE GOT ANSWERS.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Find answers to common questions about our transmission services, pricing, and process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* FAQ List */}
            <FadeIn>
              <div className="bg-[#FAFAFA] rounded-2xl p-2">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors rounded-xl"
                    >
                      <span className="text-[#16215B] font-medium pr-4 text-lg">{faq.q}</span>
                      <div className={`w-6 h-6 rounded border border-gray-200 flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? "bg-[#1314CC] border-[#1314CC]" : ""}`}>
                        <span className={`text-sm ${openFaq === i ? "text-white" : "text-gray-400"}`}>{openFaq === i ? "−" : "+"}</span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-5 pb-5 text-gray-500">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Need More Help Card */}
            <FadeIn delay={0.2}>
              <div className="lg:sticky lg:top-32 lg:self-start bg-[#070889] rounded-2xl p-10">
                <h3 className="text-4xl lg:text-5xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
                  NEED MORE HELP?
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed text-lg">
                  Need help deciding which service is right for your vehicle? Have a unique transmission issue? 
                  <span className="text-[#DC2626]"> Schedule a free diagnostic</span> with us to find out exactly what your car needs.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#DC2626] text-white font-bold tracking-wider rounded-full hover:bg-[#b91c1c] transition-colors w-full"
                  >
                    <Phone className="w-5 h-5" />
                    CALL {CONTACT.phone}
                  </a>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1314CC] text-white font-bold tracking-wider rounded-full hover:bg-[#0e0ea0] transition-colors w-full"
                  >
                    BOOK ONLINE
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Our team is here to help. Give us a call or stop by our shop in Crosby for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-bold tracking-wider rounded-full hover:bg-gray-100 transition-colors">
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
