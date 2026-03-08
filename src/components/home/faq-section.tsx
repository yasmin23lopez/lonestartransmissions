"use client";

import { Phone, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FAQ, SiteSettings } from "@/sanity/lib/fetch";

// Fallback data
const FALLBACK_FAQS = [
  { _id: "1", question: "Is the diagnostic really free?", answer: "Yes! We offer a completely free diagnostic with a 25-point inspection to identify any transmission issues.", order: 1 },
  { _id: "2", question: "Do you offer free towing?", answer: "Yes, we offer free towing for transmission repairs within our service area. Call us for details.", order: 2 },
  { _id: "3", question: "Do you offer financing?", answer: "Yes, we offer flexible financing options to help you get your car fixed without breaking the bank.", order: 3 },
  { _id: "4", question: "How long does a repair take?", answer: "Most repairs are completed within 1-3 days. We'll give you an accurate timeline after the diagnostic.", order: 4 },
  { _id: "5", question: "Do you work on all vehicle types?", answer: "Yes, we service all makes and models—domestic and foreign, cars, trucks, and SUVs.", order: 5 },
];

interface FAQSectionProps {
  faqs: FAQ[];
  settings: SiteSettings | null;
}

export function FAQSection({ faqs, settings }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";
  const displayFaqs = faqs.length > 0 ? faqs : FALLBACK_FAQS;

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#070889]/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-[#070889]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#070889]">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-saira font-black text-[#070889] leading-[0.85] uppercase">
            <span className="block">QUESTIONS?</span>
            <span className="block">WE'VE GOT ANSWERS.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* FAQ List */}
          <div className="bg-[#FAFAFA] rounded-2xl p-2">
            {displayFaqs.map((faq, i) => (
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

          {/* Need More Help Card */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h3 className="text-3xl lg:text-4xl font-saira font-black text-[#070889] leading-[0.9] uppercase mb-6">
              READY TO<br />GET STARTED?
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Call us for a free diagnostic or book your appointment online. <br />We'll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out rounded-[9px]"
              >
                <Phone className="w-5 h-5" />
                CALL {phone}
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#070889] text-[#070889] font-saira font-semibold tracking-wider hover:bg-[#070889] hover:text-white transition-all duration-500 ease-out rounded-[9px]"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
