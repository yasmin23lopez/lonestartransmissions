"use client";

import { Settings, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FAQ, SiteSettings } from "@/sanity/lib/fetch";

interface AboutFAQSectionProps {
  faqs: FAQ[];
  settings: SiteSettings | null;
}

export function AboutFAQSection({ faqs, settings }: AboutFAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const phone = settings?.phone || "281-462-4970";

  return (
    <section className="py-24 lg:py-32 bg-[#070889]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-saira font-black text-white leading-[0.85] uppercase">
            <span className="block">QUESTIONS?</span>
            <span className="block">WE'VE GOT ANSWERS.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white rounded-2xl p-2">
            {faqs.map((faq, i) => (
              <div key={faq._id} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors rounded-xl"
                >
                  <span className="text-[#16215B] font-medium pr-4 text-lg">{faq.question}</span>
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
                      <p className="px-5 pb-5 text-gray-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <h3 className="text-4xl lg:text-5xl font-saira font-black text-white leading-[0.9] uppercase mb-6">
              NEED MORE HELP?
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Need help deciding which service is right for your vehicle? Have a unique transmission issue? 
              <span className="text-[#DC2626]"> Schedule a free diagnostic</span> with us to find out exactly what your car needs.
            </p>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out rounded-[9px]"
            >
              SCHEDULE A CALL
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
