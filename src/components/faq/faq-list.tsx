"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/ui";
import type { FAQ, SiteSettings } from "@/sanity/lib/fetch";

interface FAQListProps {
  faqs: FAQ[];
  settings: SiteSettings | null;
}

export function FAQList({ faqs, settings }: FAQListProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
      <FadeIn>
        <div className="bg-[#FAFAFA] rounded-2xl p-2">
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
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="lg:sticky lg:top-32 lg:self-start bg-[#070889] rounded-2xl p-10">
          <h3 className="text-4xl lg:text-5xl font-saira font-black text-white leading-[0.9] uppercase mb-6">
            NEED MORE HELP?
          </h3>
          <p className="text-white/60 mb-8 leading-relaxed text-lg">
            Need help deciding which service is right for your vehicle? Have a unique transmission issue? 
            <span className="text-[#DC2626]"> Schedule a free diagnostic</span> with us to find out exactly what your car needs.
          </p>
          <div className="space-y-4">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#DC2626] text-white font-bold tracking-wider rounded-full hover:bg-[#b91c1c] transition-colors w-full"
            >
              <Phone className="w-5 h-5" />
              CALL {phone}
            </a>
            <a
              href={bookingUrl}
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
  );
}
