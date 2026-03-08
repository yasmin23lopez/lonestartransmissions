"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui";
import type { FinancingPartner, SiteSettings } from "@/sanity/lib/fetch";

// Fallback data
const FALLBACK_PARTNERS = [
  { _id: "1", name: "EasyPay Finance", logo: "/easypay.webp", applyUrl: "https://customerappx.easypayfinance.com/application/A52AADEF", tagline: "Apply Now", order: 1 },
  { _id: "2", name: "Snap Finance", logo: "/snap.jpeg", applyUrl: "https://snapf.in/PTgnwlr", tagline: "Up to $5,000", order: 2 },
  { _id: "3", name: "Affirm", logo: "/affirm.png", applyUrl: "#", tagline: "Pay Over Time", order: 3 },
  { _id: "4", name: "Klarna", logo: "/klarna.png", applyUrl: "#", tagline: "Flexible Payments", order: 4 },
];

interface FinancingSectionProps {
  partners: FinancingPartner[];
  settings: SiteSettings | null;
}

export function FinancingSection({ partners, settings }: FinancingSectionProps) {
  const phone = settings?.phone || "281-462-4970";
  const displayPartners = partners.length > 0 ? partners : FALLBACK_PARTNERS;

  return (
    <section id="financing" className="py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <SectionHeader 
            label="FLEXIBLE PAYMENT" 
            title={["FINANCING", "AVAILABLE"]} 
            description="Don't let car trouble break the bank. We offer flexible financing options so you can get back on the road without the stress." 
            centered 
          />
        </div>
        
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPartners.map((partner) => (
              <a 
                key={partner._id}
                href={partner.applyUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-lg hover:border-[#1314CC] transition-all duration-300 group"
              >
                <Image 
                  src={partner.logo || "/easypay.webp"} 
                  alt={partner.name} 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto object-contain mb-4" 
                />
                <span className="text-sm text-gray-500 group-hover:text-[#1314CC] transition-colors">
                  {partner.tagline || "Apply Now"}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a 
              href={`tel:${phone}`} 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out rounded-[9px]"
            >
              <span>ASK ABOUT FINANCING</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
