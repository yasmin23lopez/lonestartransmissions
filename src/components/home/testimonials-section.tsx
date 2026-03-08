"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Testimonial } from "@/sanity/lib/fetch";

// Fallback testimonials
const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { _id: "1", name: "Miss AmericanPie", title: "1979 Ford F250 - C6 Transmission Rebuild", text: "We took a C6 to Juvenal to be rebuilt for our '79 Ford F250. The transmission was installed on time and they even sourced a hard-to-find part. It came out flawless.", rating: 5, image: "/review1.jpg", order: 1 },
  { _id: "2", name: "Jody", title: "Chevy Silverado Transmission Rebuild", text: "My Chevy Silverado's transmission broke down at work. Lonestar immediately sent a truck to pick it up and rebuilt my transmission in 4 business days for a fair price.", rating: 5, image: "/review_2.jpg", order: 2 },
  { _id: "3", name: "Don G.", title: "Thorough Google Search Led Me Here", text: "After a thorough Google search, I found this shop. They had 'REAL' Google reviews, not AI-generated like many others. They rebuilt my transmission in two days with upgraded parts.", rating: 5, image: null, order: 3 },
];

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const displayTestimonials = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const current = displayTestimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/bg.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#16215B]/95" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-white/30" />
            <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">What Customers Say</span>
            <div className="w-8 h-[2px] bg-white/30" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-saira font-black text-white uppercase">
            OUR BUILDS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 min-h-[400px] rounded-2xl overflow-hidden">
          <div className={`bg-[#E8EDF5] p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1 ${!current?.image ? 'lg:col-span-2' : ''}`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#16215B]/50 uppercase">Google Review</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            <div className="flex-1 flex flex-col justify-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#16215B]/20 text-5xl font-serif leading-none">"</span>
                  <p className={`text-[#16215B] font-medium leading-relaxed -mt-2 ${current?.image ? 'text-sm' : 'text-base'}`}>
                    {current?.text}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <p className="text-[#16215B] font-saira font-bold text-sm">
                      — {current?.name}
                    </p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(current?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#16215B]/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length)}
                  className="text-[#16215B]/40 hover:text-[#16215B] text-xs font-bold tracking-wider transition-colors"
                >
                  PREV
                </button>
                <span className="text-[#16215B]/20">/</span>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % displayTestimonials.length)}
                  className="text-[#16215B] text-xs font-bold tracking-wider hover:text-[#DC2626] transition-colors"
                >
                  NEXT
                </button>
              </div>
              <span className="text-[#16215B]/40 text-xs font-medium">
                {String(currentTestimonial + 1).padStart(2, '0')}/{String(displayTestimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {current?.image && (
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://share.google/mycXVKVirWOE7UQSx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#16215B] font-saira font-semibold tracking-wider hover:bg-[#DC2626] hover:text-white transition-all duration-500 ease-out rounded-[9px]"
          >
            VIEW ALL REVIEWS
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
