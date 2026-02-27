"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Star, DollarSign, Clock, Shield, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SectionHeader } from "@/components/ui";
import { CarDiagnosticIcon, OilChangeIcon, BrakesIcon, HeatACIcon, TransmissionIcon } from "@/components/icons";
import { BOOKING_URL, CONTACT, SERVICES, SERVICES_DETAILED, TESTIMONIALS, FAQS } from "@/lib/constants";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  CarDiagnosticIcon,
  OilChangeIcon,
  BrakesIcon,
  HeatACIcon,
  TransmissionIcon,
};

export default function Website() {
  const [currentService, setCurrentService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextService = () => setCurrentService((prev) => (prev + 1) % SERVICES_DETAILED.length);
  const prevService = () => setCurrentService((prev) => (prev - 1 + SERVICES_DETAILED.length) % SERVICES_DETAILED.length);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* New Hero Section - Red Background with Transmissions */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#DC2626] pt-24">
        {/* Side Text - Right Bottom */}
        <div className="absolute right-8 lg:right-16 bottom-32 lg:bottom-60 z-20 hidden md:block">
          <span className="text-white/90 text-[16px] font-bold font-saira tracking-[0.1em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            TRUSTED BY 1,000+ CLIENTS
          </span>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 lg:pt-20 text-center flex-1 flex flex-col justify-center">
          {/* Top Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/100 text-[15px] tracking-[0.1em] font-bold font-saira uppercase mb-4"
          >
            CROSBY, TEXAS — #1 CHOICE
          </motion.span>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="italic text-[clamp(2.8rem,7vw,6.5rem)] font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6 lg:mb-10"
          >
            TRANSMISSION EXPERTS<br/>
            <span className="italic font-light"> WITH </span> 
            20+ YEARS EXP.
          </motion.h1>

          {/* Transmission Images */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center -mt-24 lg:-mt-40"
          >
            <Image 
              src="/transmissions_hero.png" 
              alt="Diesel Transmissions" 
              width={900} 
              height={400}
              className="w-full max-w-[800px] h-auto"
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
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#DC2626] text-lg font-saira font-semibold italic uppercase hover:bg-gray-100 transition-all duration-500 ease-out border-2 border-white"
            >
              VIEW SERVICES
            </a>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#DC2626] text-white text-lg font-saira font-semibold italic uppercase hover:bg-[#b91c1c] transition-all duration-500 ease-out border-2 border-white"
            >
              BOOK ONLINE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section id="services" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 bg-[#16215B]">
          {SERVICES_DETAILED.map((service, index) => (
            <motion.div
              key={service.id}
              initial={false}
              animate={{ opacity: currentService === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image 
                src={SERVICES[index]?.image || SERVICES[0].image} 
                alt={service.title} 
                fill 
                className="object-cover" 
                priority={index === 0}
              />
            </motion.div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/80 to-[#16215B]/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16215B]/90 via-transparent to-[#16215B]/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">OUR SERVICES</span>
                <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase">
                  WHAT WE<br/>
                  <span className="text-[#DC2626]">SPECIALIZE IN</span>
                </h2>
              </div>

              <p className="text-white/70 text-lg max-w-lg">
                From diagnostics to complete repairs. Professional, transparent service for all your automotive needs.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out">
                  <Phone className="w-5 h-5" />
                  <span>CALL: {CONTACT.phone}</span>
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-saira font-semibold tracking-wider hover:bg-white hover:text-[#070889] transition-all duration-500 ease-out">
                  <span>BOOK ONLINE</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right - Service Slider Card */}
            <div className="lg:col-span-6">
              {/* Badge above card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="flex justify-end mb-4"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#DC2626] rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white tracking-wide">FREE DIAGNOSTIC + 25-POINT INSPECTION</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-[family-name:var(--font-saira)] font-black text-[#070889]">{SERVICES_DETAILED[currentService].id}</span>
                    <span className="text-sm text-gray-400">/{String(SERVICES_DETAILED.length).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">SERVICES</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[3px] bg-gray-100 mb-8 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#1314CC]" 
                    initial={{ width: 0 }} 
                    animate={{ width: `${((currentService + 1) / SERVICES_DETAILED.length) * 100}%` }} 
                    transition={{ duration: 0.3 }} 
                  />
                </div>

                {/* Service Content */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentService} 
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -20 }} 
                    transition={{ duration: 0.3 }} 
                    className="mb-8 min-h-[160px]"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#1314CC]/10 flex items-center justify-center mb-4">
                      {SERVICE_ICONS[SERVICES_DETAILED[currentService].icon] && 
                        (() => {
                          const IconComponent = SERVICE_ICONS[SERVICES_DETAILED[currentService].icon];
                          return <IconComponent className="w-7 h-7 text-[#1314CC]" />;
                        })()
                      }
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-2">
                      {SERVICES_DETAILED[currentService].title}
                    </h3>
                    <p className="text-[#1314CC] font-medium mb-4">{SERVICES_DETAILED[currentService].subtitle}</p>
                    <p className="text-gray-500 leading-relaxed">{SERVICES_DETAILED[currentService].desc}</p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={prevService} 
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1314CC] hover:bg-[#1314CC] hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextService} 
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1314CC] hover:bg-[#1314CC] hover:text-white transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <Link 
                    href={SERVICES_DETAILED[currentService].href} 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold hover:bg-[#0e0ea0] transition-all duration-500 ease-out"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Service Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {SERVICES_DETAILED.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentService(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentService === index ? 'w-6 bg-[#1314CC]' : 'bg-gray-300 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section id="financing" className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader label="FLEXIBLE PAYMENT" title={["FINANCING", "AVAILABLE"]} description="Don't let car trouble break the bank. We offer flexible financing options so you can get back on the road without the stress." />
              <FadeIn delay={0.3}>
                <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out">
                  <span>ASK ABOUT FINANCING</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                </a>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, title: "Easy Approval", desc: "Quick application process" },
                  { icon: Clock, title: "Flexible Terms", desc: "Payment plans that fit your budget" },
                  { icon: Shield, title: "No Hidden Fees", desc: "Transparent pricing always" },
                  { icon: CheckCircle, title: "Same-Day Service", desc: "Get approved and repaired fast" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#1314CC]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-[#1314CC]" />
                    </div>
                    <p className="font-bold text-[#070889] mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Builds Section */}
      <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Image with Blue Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#16215B]/95" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Header */}
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

          {/* Build Card */}
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* Content Card */}
            <div className={`bg-[#E8EDF5] p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1 ${!TESTIMONIALS[currentTestimonial].image ? 'lg:col-span-2' : ''}`}>
              {/* Top Labels */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#16215B]/50 uppercase">Google Review</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Quote */}
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
                    <p className={`text-[#16215B] font-medium leading-relaxed -mt-2 ${TESTIMONIALS[currentTestimonial].image ? 'text-sm' : 'text-base'}`}>
                      {TESTIMONIALS[currentTestimonial].text}
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <p className="text-[#16215B] font-saira font-bold text-sm">
                        — {TESTIMONIALS[currentTestimonial].name}
                      </p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-[#16215B]/10">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="text-[#16215B]/40 hover:text-[#16215B] text-xs font-bold tracking-wider transition-colors"
                  >
                    PREV
                  </button>
                  <span className="text-[#16215B]/20">/</span>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                    className="text-[#16215B] text-xs font-bold tracking-wider hover:text-[#DC2626] transition-colors"
                  >
                    NEXT
                  </button>
                </div>
                <span className="text-[#16215B]/40 text-xs font-medium">
                  {String(currentTestimonial + 1).padStart(2, '0')}/{String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Image Area */}
            {TESTIMONIALS[currentTestimonial].image && (
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
                        src={TESTIMONIALS[currentTestimonial].image}
                        alt={TESTIMONIALS[currentTestimonial].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <a
              href="https://share.google/mycXVKVirWOE7UQSx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#16215B] font-saira font-semibold tracking-wider hover:bg-[#DC2626] hover:text-white transition-all duration-500 ease-out"
            >
              VIEW ALL REVIEWS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#070889]/10 mb-6">
              <Settings className="w-3.5 h-3.5 text-[#070889]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#070889]">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.85] uppercase">
              <span className="block">QUESTIONS?</span>
              <span className="block">WE'VE GOT ANSWERS.</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* FAQ List */}
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

            {/* Need More Help Card */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h3 className="text-4xl lg:text-5xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.9] uppercase mb-6">
                READY TO GET STARTED?
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Call us for a free diagnostic or book your appointment online. We'll take care of the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out"
                >
                  <Phone className="w-5 h-5" />
                  CALL {CONTACT.phone}
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#070889] text-[#070889] font-saira font-semibold tracking-wider hover:bg-[#070889] hover:text-white transition-all duration-500 ease-out"
                >
                  BOOK ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
