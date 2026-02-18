"use client";

import Image from "next/image";
import { Phone, MapPin, Mail, Clock, ArrowUpRight, Settings } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#16215B]">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
            alt="Contact"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B]/95 via-[#16215B]/85 to-[#16215B]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.85] uppercase mb-6">
            CONTACT US
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Have questions? Need a quote? We're here to help. Reach out by phone, email, or stop by our shop in Crosby.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Cards */}
            <div className="space-y-6">
              <FadeIn>
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-6 p-8 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-16 h-16 bg-[#1314CC] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Phone</p>
                    <p className="text-3xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{CONTACT.phone}</p>
                    <p className="text-gray-500 mt-2">Call us for immediate assistance</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.1}>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 p-8 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-16 h-16 bg-[#1314CC] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Address</p>
                    <p className="text-2xl lg:text-3xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{CONTACT.address}</p>
                    <p className="text-gray-500 mt-2">Get directions on Google Maps</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-6 p-8 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-16 h-16 bg-[#1314CC] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Email</p>
                    <p className="text-xl lg:text-2xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors break-all">{CONTACT.email}</p>
                    <p className="text-gray-500 mt-2">We'll respond within 24 hours</p>
                  </div>
                </a>
              </FadeIn>
            </div>

            {/* Book Appointment Card */}
            <FadeIn delay={0.3}>
              <div className="bg-[#070889] rounded-2xl p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                    <Clock className="w-4 h-4 text-white/80" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white/80">BOOK ONLINE</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
                    SCHEDULE YOUR<br />APPOINTMENT
                  </h3>
                  <p className="text-white/60 text-lg mb-8">
                    Skip the wait. Book your appointment online and we'll have everything ready when you arrive.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1314CC] text-white font-bold tracking-wider rounded-full hover:bg-[#0e0ea0] transition-colors w-full"
                  >
                    BOOK APPOINTMENT
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/20 text-white font-bold tracking-wider rounded-full hover:bg-white/10 transition-colors w-full"
                  >
                    <Phone className="w-5 h-5" />
                    OR CALL {CONTACT.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hours & Map Section */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Hours */}
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
                  <Settings className="w-3.5 h-3.5 text-[#16215B]" />
                  <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">BUSINESS HOURS</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-saira)] font-black text-[#16215B] leading-[0.9] uppercase mb-8">
                  WHEN WE'RE OPEN
                </h2>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-gray-200">
                      <span className="text-[#16215B] font-medium text-lg">{item.day}</span>
                      <span className={`font-bold text-lg ${item.hours === "Closed" ? "text-[#DC2626]" : "text-[#1314CC]"}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2}>
              <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-6">
            FREE DIAGNOSTIC AVAILABLE
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Not sure what's wrong with your transmission? Bring it in for a free 25-point inspection. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-bold tracking-wider rounded-full hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold tracking-wider rounded-full hover:bg-white hover:text-[#DC2626] transition-colors">
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
