"use client";

import Image from "next/image";
import { CheckCircle, Award, Users, Clock, Shield, ArrowUpRight, Phone, Settings, MapPin, Play } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SectionHeader } from "@/components/ui";
import { BOOKING_URL, CONTACT, FAQS } from "@/lib/constants";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TEAM_MEMBERS = [
  { name: "Owner", role: "Founder & Owner", image: "/0.png" },
  { name: "Juvenal Toledo", role: "Shop Manager", image: "/5.png" },
  { name: "Gerardo Campos", role: "R&R Specialist", image: "/gerardo_.png" },
  { name: "German Guerrero", role: "High Tech Mechanic", image: "/german.png" },
  { name: "Jose Torres", role: "High Tech Mechanic", image: "/4.png" },
  { name: "George Martinez", role: "Transmission Builder", image: "/6.png" },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074"
            alt="About Us"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">WHO WE ARE</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            ABOUT US
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            20+ years of transmission expertise serving Crosby, Texas and the greater Houston area.
          </p>
        </div>
      </section>

      {/* Our Story + Video */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionHeader 
                  label="OUR STORY" 
                  title={["FAMILY", "OWNED &", "OPERATED"]} 
                  description="Lonestar Transmissions was founded with a simple mission: provide honest, reliable transmission repair at fair prices. What started as a small shop has grown into one of the most trusted transmission specialists in the Houston area."
                />
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Over 20 years of combined experience in transmission repair and rebuilds</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Family-friendly environment where every customer is treated with respect</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Transparent pricing with no hidden fees or surprise charges</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Video Reel */}
            <FadeIn delay={0.2}>
              <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src="/video.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay={videoPlaying}
                  onClick={() => setVideoPlaying(!videoPlaying)}
                />
                {!videoPlaying && (
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-[#DC2626] ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-24 lg:pt-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#1314CC]" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#070889]">OUR TEAM</span>
              <div className="w-12 h-[2px] bg-[#1314CC]" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.85] uppercase">
              MEET THE<br />EXPERTS
            </h2>
          </div>
        </div>

        {/* Grid sin padding - divisores de borde a borde */}
        <div className="min-w-100 mx-auto border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {TEAM_MEMBERS.map((member, i) => {
              const isNotLastCol = i % 3 !== 2;
              const isFirstRow = i < 3;
              
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`
                    ${isNotLastCol ? 'border-r border-gray-200' : ''} 
                    ${isFirstRow ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="p-6 lg:p-8">
                      <div className="relative rounded-2xl overflow-hidden mb-4 border-white border">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-[#16215B] text-lg">{member.name}</h3>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#1314CC]" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#070889]">WHY CHOOSE US</span>
              <div className="w-12 h-[2px] bg-[#1314CC]" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black text-[#070889] leading-[0.85] uppercase">
              THE LONESTAR<br />DIFFERENCE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "20+ Years Experience", desc: "Decades of expertise in transmission repair" },
              { icon: Shield, title: "Warranty Included", desc: "All repairs backed by our warranty" },
              { icon: Users, title: "1,000+ Happy Clients", desc: "Trusted by the Crosby community" },
              { icon: Clock, title: "Fast Turnaround", desc: "Get back on the road quickly" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#FAFAFA] rounded-2xl p-8 text-center h-full">
                  <div className="w-16 h-16 bg-[#1314CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[#1314CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#16215B] mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section className="py-24 lg:py-32 bg-[#16215B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-xs font-bold tracking-[0.2em] text-white/80">OUR LOCATION</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
                  VISIT US IN<br />CROSBY, TEXAS
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  Conveniently located on US-90, we're easy to find and ready to help with all your transmission needs.
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-white text-xl font-bold">{CONTACT.address}</p>
                  <p className="text-white/60">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-white/60">Saturday: 9:00 AM - 3:00 PM</p>
                </div>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out"
                >
                  GET DIRECTIONS
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8!2d-95.0647!3d29.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzUzLjAiTiA5NcKwMDMnNTMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lonestar Transmissions Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#070889]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out"
              >
                SCHEDULE A CALL
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Call us for a free diagnostic or book your appointment online. We'll take care of the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-saira font-semibold tracking-wider hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider hover:bg-white hover:text-[#DC2626] transition-all duration-500 ease-out">
              BOOK ONLINE
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
