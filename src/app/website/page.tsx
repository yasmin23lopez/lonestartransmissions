"use client";

import Image from "next/image";
import { Phone, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle, Star, DollarSign, Clock, Shield, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedText, FadeIn, SectionHeader } from "@/components/ui";
import { BOOKING_URL, CONTACT, SERVICES, SERVICES_DETAILED, TESTIMONIALS, FAQS } from "@/lib/constants";

export default function Website() {
  const [currentService, setCurrentService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextService = () => setCurrentService((prev) => (prev + 1) % SERVICES.length);
  const prevService = () => setCurrentService((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-end overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 bg-[#16215B]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={false}
              animate={{ opacity: currentService === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover" 
                priority={index === 0}
              />
            </motion.div>
          ))}
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/90 via-[#16215B]/70 to-[#16215B]/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16215B]/80 via-transparent to-[#16215B]/30 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#DC2626] rounded-full">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white tracking-wide">FREE DIAGNOSTIC + 25-POINT INSPECTION</span>
              </motion.div>

              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase">
                <AnimatedText delay={0.3}>TRANSMISSION</AnimatedText>
                <AnimatedText delay={0.4}>EXPERTS WITH</AnimatedText>
                <AnimatedText delay={0.5} className="text-[#DC2626]">20+ YEARS EXP.</AnimatedText>
              </h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-white/70 text-lg max-w-lg">
                Professional, transparent, and family-friendly service. We diagnose it right, fix it right, and treat you right.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-bold tracking-wider rounded-full hover:bg-[#b91c1c] transition-all">
                  <Phone className="w-5 h-5" />
                  <span>CALL NOW: {CONTACT.phone}</span>
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold tracking-wider rounded-full hover:bg-white hover:text-[#070889] transition-all">
                  <span>BOOK ONLINE</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Service Slider Card */}
            <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <div className="bg-white rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-[family-name:var(--font-saira)] font-black text-[#070889]">{SERVICES[currentService].id}</span>
                    <span className="text-sm text-gray-400">/{String(SERVICES.length).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">OUR SERVICES</span>
                </div>
                <div className="w-full h-[2px] bg-gray-100 mb-6">
                  <motion.div className="h-full bg-[#1314CC]" initial={{ width: 0 }} animate={{ width: `${((currentService + 1) / SERVICES.length) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={currentService} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-saira)] font-bold text-[#070889] uppercase mb-2">{SERVICES[currentService].title}</h3>
                    <p className="text-gray-500">{SERVICES[currentService].subtitle}</p>
                  </motion.div>
                </AnimatePresence>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={prevService} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1314CC] hover:text-[#070889] transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={nextService} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1314CC] hover:text-[#070889] transition-colors"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1314CC] flex items-center justify-center text-white hover:bg-[#0e0ea0] transition-colors"><ArrowRight className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
              <SectionHeader label="WHAT WE DO" title={["OUR", "SERVICES"]} description="Specializing in automatic and standard transmissions. From diagnostics to complete rebuilds." />
              <FadeIn delay={0.3}>
                <div className="bg-[#DC2626] rounded-xl p-6 text-white">
                  <p className="font-bold text-lg mb-2">🎁 FREE 25-Point Inspection</p>
                  <p className="text-white/80 text-sm">Every vehicle gets a comprehensive inspection at no charge. Know exactly what your car needs.</p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {SERVICES_DETAILED.map((service, index) => (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <motion.div className={`group relative p-8 lg:p-10 rounded-2xl cursor-pointer overflow-hidden ${index === 0 ? "bg-[#1314CC] text-white" : "bg-white border border-gray-200"}`} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    {index !== 0 && <motion.div className="absolute inset-0 bg-[#1314CC]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.4 }} />}
                    <div className="relative z-10 flex items-start justify-between gap-6">
                      <div className="flex items-start gap-6">
                        <span className={`text-5xl lg:text-6xl font-[family-name:var(--font-saira)] font-black leading-none ${index === 0 ? "text-white/20" : "text-[#070889]/10 group-hover:text-white/20"} transition-colors`}>{service.id}</span>
                        <div className="space-y-2 pt-1">
                          <h3 className={`text-2xl font-[family-name:var(--font-saira)] font-bold tracking-wide ${index === 0 ? "text-white" : "text-[#070889] group-hover:text-white"} transition-colors`}>{service.title}</h3>
                          <p className={`text-sm font-medium ${index === 0 ? "text-white/60" : "text-gray-400 group-hover:text-white/60"} transition-colors`}>{service.subtitle}</p>
                          <p className={`text-sm max-w-md ${index === 0 ? "text-white/80" : "text-gray-500 group-hover:text-white/80"} transition-colors`}>{service.desc}</p>
                        </div>
                      </div>
                      <motion.div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${index === 0 ? "bg-white/10" : "bg-[#1314CC]/5 group-hover:bg-white/10"} transition-colors`} whileHover={{ rotate: 45 }}>
                        <ArrowUpRight className={`w-5 h-5 ${index === 0 ? "text-white" : "text-[#070889] group-hover:text-white"} transition-colors`} />
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
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
                <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-bold tracking-wider rounded-full hover:bg-[#0e0ea0]">
                  <span>ASK ABOUT FINANCING</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-[#E8EEF5]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#1314CC]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#070889]">WHAT CUSTOMERS SAY</span>
                <div className="w-12 h-[2px] bg-[#1314CC]" />
              </div>
              <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.85] uppercase">
                REVIEWS
              </h2>
            </div>

            {/* Testimonial Slider */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-2xl lg:text-3xl text-[#070889] leading-relaxed mb-8 font-medium">
                    "{TESTIMONIALS[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-[#070889] font-bold">{TESTIMONIALS[currentTestimonial].name}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots & Counter */}
            <div className="flex items-center justify-center gap-4 mt-8 mb-16">
              <span className="text-[#070889]/50 text-sm font-medium">
                {String(currentTestimonial + 1).padStart(2, '0')}/{String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentTestimonial === i ? "bg-[#070889] w-8" : "bg-[#070889]/30"}`}
                  />
                ))}
              </div>
            </div>

            {/* View All Button */}
            <a
              href="https://share.google/mycXVKVirWOE7UQSx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#070889] font-bold hover:text-[#1314CC] transition-colors"
            >
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-32 bg-[#070889]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
              <Settings className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-bold tracking-[0.2em] text-white/80">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase">
              <span className="block">QUESTIONS?</span>
              <span className="block">WE'VE GOT ANSWERS.</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* FAQ List */}
            <div className="bg-white rounded-2xl p-2">
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
              <h3 className="text-4xl lg:text-5xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
                NEED MORE HELP?
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Need help deciding which service is right for your vehicle? Have a unique transmission issue? 
                <span className="text-[#DC2626]"> Schedule a free diagnostic</span> with us to find out exactly what your car needs.
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-bold tracking-wider rounded-full hover:bg-[#0e0ea0] transition-colors"
              >
                SCHEDULE A CALL
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
        <motion.div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-[#1314CC]/5 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.85] uppercase mb-8">
              <AnimatedText>READY TO</AnimatedText>
              <AnimatedText delay={0.1}>GET STARTED?</AnimatedText>
            </h2>
            <FadeIn delay={0.2}><p className="text-gray-500 text-xl mb-10 max-w-lg">Call us for a free diagnostic or book your appointment online. We'll take care of the rest.</p></FadeIn>
            <FadeIn delay={0.3} className="flex flex-wrap gap-4">
              <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-3 px-10 py-5 bg-[#DC2626] text-white font-bold tracking-wider rounded-full hover:bg-[#b91c1c]">
                <Phone className="w-5 h-5" />
                <span>CALL {CONTACT.phone}</span>
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#1314CC] text-[#070889] font-bold tracking-wider rounded-full hover:bg-[#1314CC] hover:text-white">BOOK ONLINE</a>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
