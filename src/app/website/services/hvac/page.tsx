import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Phone, Thermometer, Wind, Snowflake, Sun } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { HeatACIcon } from "@/components/icons";
import { getSiteSettings, getServiceBySlug } from "@/sanity/lib/fetch";

const SERVICE = {
  title: "HEAT OR A/C",
  subtitle: "Climate Control",
  description: "Stay comfortable year-round. Whether your A/C isn't cooling or your heater isn't warming, we diagnose and repair all climate control issues.",
  features: [
    "A/C system diagnosis and repair",
    "Refrigerant recharge (R-134a & R-1234yf)",
    "Compressor repair and replacement",
    "Condenser and evaporator service",
    "Heater core repair and replacement",
    "Blower motor service",
    "Climate control electrical diagnosis",
    "Leak detection and repair",
  ],
  commonIssues: [
    { name: "A/C Not Cooling", desc: "Low refrigerant, compressor issues, or electrical problems" },
    { name: "Weak Airflow", desc: "Clogged cabin filter, blower motor, or ductwork issues" },
    { name: "Strange Smells", desc: "Mold in evaporator, cabin filter needs replacement" },
    { name: "Heater Not Working", desc: "Thermostat, heater core, or coolant issues" },
  ],
  benefits: [
    { icon: Snowflake, title: "A/C Repair", desc: "Beat the Texas heat" },
    { icon: Sun, title: "Heater Service", desc: "Stay warm in winter" },
    { icon: Wind, title: "Full Diagnosis", desc: "Find the real problem" },
    { icon: Thermometer, title: "All Systems", desc: "Manual & automatic" },
  ],
  faqs: [
    { q: "Why is my A/C blowing warm air?", a: "Common causes include low refrigerant, compressor failure, or electrical issues. We'll diagnose the exact cause." },
    { q: "How often should I recharge my A/C?", a: "A properly sealed system shouldn't need regular recharging. If it does, there's likely a leak that needs repair." },
    { q: "Can you fix my heater?", a: "Yes! We service all heating system components including heater cores, thermostats, and blend doors." },
  ],
};

export default async function HVACPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug("hvac"),
  ]);
  
  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";
  const heroImage = service?.image || "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070";

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={heroImage} alt={SERVICE.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <Link href="/website#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <HeatACIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-8xl font-saira font-black text-white leading-[0.85] uppercase mb-4">{SERVICE.title}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{SERVICE.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <FadeIn><p className="text-xl text-gray-600 mb-12 leading-relaxed">{SERVICE.description}</p></FadeIn>
              <FadeIn delay={0.1}>
                <h3 className="text-2xl font-saira font-bold text-[#070889] uppercase mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICE.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-[#1314CC] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-saira font-bold text-[#070889] uppercase mb-6">Common Issues We Fix</h3>
                <div className="space-y-4 mb-12">
                  {SERVICE.commonIssues.map((issue, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl">
                      <p className="font-bold text-[#070889]">{issue.name}</p>
                      <p className="text-gray-500 text-sm">{issue.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-[#070889] rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">A/C or heater problems?</h4>
                  <p className="text-white/60 mb-6">Don't suffer through Texas weather. We'll get your climate control working right.</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-saira font-semibold rounded-[9px] hover:bg-[#b91c1c] transition-all duration-500 ease-out">
                      <Phone className="w-4 h-4" />Call Now
                    </a>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold rounded-[9px] hover:bg-[#0e0ea0] transition-all duration-500 ease-out">
                      Book Online<ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <FadeIn><div className="text-center mb-12"><h3 className="text-3xl lg:text-4xl font-saira font-bold text-[#070889] uppercase">Climate Control Experts</h3></div></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                  <div className="w-14 h-14 bg-[#1314CC]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#1314CC]" />
                  </div>
                  <p className="font-bold text-[#070889] text-lg mb-2">{benefit.title}</p>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn><h3 className="text-3xl font-saira font-bold text-[#070889] uppercase mb-8 text-center">Common Questions</h3></FadeIn>
            <div className="space-y-6">
              {SERVICE.faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="font-bold text-[#070889] mb-2">{faq.q}</p>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#DC2626]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-saira font-black text-white leading-[0.9] uppercase mb-6">CLIMATE CONTROL SERVICE</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Stay comfortable in any weather. Expert A/C and heating repair for all makes and models.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-saira font-semibold tracking-wider rounded-[9px] hover:bg-gray-100 transition-all duration-500 ease-out">
              <Phone className="w-5 h-5" /><span>CALL {phone}</span>
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider rounded-[9px] hover:bg-white hover:text-[#DC2626] transition-all duration-500 ease-out">
              BOOK ONLINE<ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
