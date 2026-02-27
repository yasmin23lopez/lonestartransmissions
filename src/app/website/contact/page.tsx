"use client";

import Image from "next/image";
import { Phone, MapPin, Mail, Clock, ArrowUpRight, Settings, Send } from "lucide-react";
import { useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { BOOKING_URL, CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
  };

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
            Have questions? Need a quote? We're here to help. Reach out by phone, email, or stop by our shop in Crosby
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <FadeIn>
              <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-saira)] font-black text-[#16215B] uppercase mb-2">
                  SEND US A MESSAGE
                </h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#16215B] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#16215B] mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#16215B] mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#16215B] mb-2">Vehicle (Year, Make, Model)</label>
                    <input
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors"
                      placeholder="e.g. 2018 Ford F-150"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#16215B] mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors resize-none"
                      placeholder="Tell us about your transmission issue..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out w-full"
                  >
                    SEND MESSAGE
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info & Book Card */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <FadeIn delay={0.1}>
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-2xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{CONTACT.phone}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{CONTACT.address}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors break-all">{CONTACT.email}</p>
                  </div>
                </a>
              </FadeIn>

              {/* Book Appointment Card */}
              <FadeIn delay={0.4}>
                <div className="bg-[#070889] rounded-2xl p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-4">
                    <Clock className="w-4 h-4 text-white/80" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white/80">BOOK ONLINE</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-saira)] font-black text-white leading-[0.9] uppercase mb-4">
                    SCHEDULE YOUR APPOINTMENT
                  </h3>
                  <p className="text-white/60 mb-6">
                    Skip the wait. Book online and we'll have everything ready.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out w-full"
                  >
                    BOOK APPOINTMENT
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </FadeIn>
            </div>
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
