"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SiteSettings, PageContent } from "@/sanity/lib/fetch";

interface HeroSectionProps {
  settings: SiteSettings | null;
  pageContent?: PageContent | null;
}

export function HeroSection({ settings, pageContent }: HeroSectionProps) {
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";
  const heroLabel = pageContent?.hero?.label || "CROSBY, TEXAS — #1 CHOICE";
  const heroTitle = pageContent?.hero?.title || "TRANSMISSION EXPERTS WITH 20+ YEARS EXP.";

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#DC2626] pt-24">
      {/* Side Text - Right Bottom */}
      <div className="absolute right-8 lg:right-16 bottom-32 lg:bottom-60 z-20 hidden md:block">
        <span className="text-white/90 text-[16px] font-bold font-saira tracking-[0.1em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          TRUSTED BY 1,000+ CLIENTS
        </span>
      </div>

      {/* Sign - Bottom Left */}
      <div className="absolute left-6 lg:left-12 bottom-6 lg:bottom-12 z-20 hidden md:block">
        <Image src="/sign.png" alt="Lonestar Sign" width={160} height={160} className="w-32 h-auto" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 lg:pt-20 text-center flex-1 flex flex-col justify-center">
        {/* Top Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/100 text-[15px] tracking-[0.1em] font-bold font-saira uppercase mb-4"
        >
          {heroLabel}
        </motion.span>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="italic text-[clamp(2.8rem,7vw,6.5rem)] font-saira font-black text-white leading-[0.85] uppercase mb-6 lg:mb-10"
        >
          {heroTitle.includes("WITH") ? (
            <>
              {heroTitle.split("WITH")[0].trim()}<br/>
              <span className="italic font-light"> WITH </span>
              {heroTitle.split("WITH")[1].trim()}
            </>
          ) : (
            heroTitle
          )}
        </motion.h1>

        {/* Transmission Images */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center -mt-13 lg:-mt-32"
        >
          <Image 
            src="/transmissions_hero.png" 
            alt="Diesel Transmissions" 
            width={1300} 
            height={700}
            className="w-full max-w-[1100px] h-auto"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pb-8 lg:pb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#services" 
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#DC2626] text-lg font-saira font-semibold italic uppercase hover:bg-gray-100 transition-all duration-500 ease-out border-2 border-white rounded-[9px]"
          >
            VIEW SERVICES
          </a>
          <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#DC2626] text-white text-lg font-saira font-semibold italic uppercase hover:bg-[#b91c1c] transition-all duration-500 ease-out border-2 border-white rounded-[9px]"
          >
            BOOK ONLINE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
