"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CarDiagnosticIcon, OilChangeIcon, BrakesIcon, HeatACIcon, TransmissionIcon } from "@/components/icons";
import type { Service, SiteSettings } from "@/sanity/lib/fetch";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  CarDiagnosticIcon,
  OilChangeIcon,
  BrakesIcon,
  HeatACIcon,
  TransmissionIcon,
};

// Fallback images for services
const SERVICE_IMAGES: Record<string, string> = {
  "diagnostic": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074",
  "oil-change": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070",
  "brakes": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070",
  "hvac": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070",
  "transmission": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072",
};

// Fallback services data
const FALLBACK_SERVICES: Service[] = [
  { _id: "1", title: "FREE DIAGNOSTIC", subtitle: "25-Point Inspection", description: "Comprehensive diagnostic to identify any issues. No charge, no obligation.", slug: { current: "diagnostic" }, icon: "CarDiagnosticIcon", image: "", order: 1 },
  { _id: "2", title: "OIL CHANGE", subtitle: "Full Service", description: "Keep your engine running smooth with regular oil changes and filter replacements.", slug: { current: "oil-change" }, icon: "OilChangeIcon", image: "", order: 2 },
  { _id: "3", title: "BRAKES", subtitle: "Repair & Replacement", description: "Brake pads, rotors, calipers—we handle all brake repairs to keep you safe.", slug: { current: "brakes" }, icon: "BrakesIcon", image: "", order: 3 },
  { _id: "4", title: "HEAT OR A/C", subtitle: "Climate Control", description: "Stay comfortable year-round with our heating and A/C repair services.", slug: { current: "hvac" }, icon: "HeatACIcon", image: "", order: 4 },
  { _id: "5", title: "TRANSMISSION", subtitle: "Repair & Rebuild", description: "Expert service for automatic and manual transmissions—repairs, rebuilds, and maintenance.", slug: { current: "transmission" }, icon: "TransmissionIcon", image: "", order: 5 },
];

interface ServicesSliderProps {
  services: Service[];
  settings: SiteSettings | null;
}

export function ServicesSlider({ services, settings }: ServicesSliderProps) {
  const displayServices = services.length > 0 ? services : FALLBACK_SERVICES;
  const [currentService, setCurrentService] = useState(0);

  const nextService = () => setCurrentService((prev) => (prev + 1) % displayServices.length);
  const prevService = () => setCurrentService((prev) => (prev - 1 + displayServices.length) % displayServices.length);

  const phone = settings?.phone || "281-462-4970";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

  const getServiceImage = (service: Service) => {
    if (service.image) return service.image;
    const slug = service.slug?.current || "";
    return SERVICE_IMAGES[slug] || SERVICE_IMAGES["diagnostic"];
  };

  const getServiceHref = (service: Service) => {
    const slug = service.slug?.current || "diagnostic";
    return `/services/${slug}`;
  };

  return (
    <section id="services" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-[#16215B]">
        {displayServices.map((service, index) => (
          <motion.div
            key={service._id}
            initial={false}
            animate={{ opacity: currentService === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image 
              src={getServiceImage(service)} 
              alt={service.title} 
              fill 
              className="object-cover" 
              priority={index === 0}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#16215B] via-[#16215B]/50 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pt-44 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">OUR SERVICES</span>
              <h2 className="text-5xl lg:text-7xl font-saira font-black text-white leading-[0.85] uppercase">
                WHAT WE<br/>
                <span className="text-[#DC2626]">SPECIALIZE IN</span>
              </h2>
            </div>

            <p className="text-white/70 text-lg max-w-lg">
              From diagnostics to complete repairs. Professional, transparent service for all your automotive needs.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href={`tel:${phone}`} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out rounded-[9px]">
                <Phone className="w-5 h-5" />
                <span>CALL: {phone}</span>
              </a>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-saira font-semibold tracking-wider hover:bg-white hover:text-[#070889] transition-all duration-500 ease-out rounded-[9px]">
                <span>BOOK ONLINE</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Service Slider Card */}
          <div className="lg:col-span-6">
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
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-saira font-black text-[#070889]">{String(currentService + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-gray-400">/{String(displayServices.length).padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">SERVICES</span>
              </div>

              <div className="w-full h-[3px] bg-gray-100 mb-8 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1314CC]" 
                  initial={{ width: 0 }} 
                  animate={{ width: `${((currentService + 1) / displayServices.length) * 100}%` }} 
                  transition={{ duration: 0.3 }} 
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentService} 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }} 
                  transition={{ duration: 0.3 }} 
                  className="mb-8 min-h-[160px]"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1314CC]/10 flex items-center justify-center mb-4">
                    {SERVICE_ICONS[displayServices[currentService]?.icon] && 
                      (() => {
                        const IconComponent = SERVICE_ICONS[displayServices[currentService].icon];
                        return <IconComponent className="w-7 h-7 text-[#1314CC]" />;
                      })()
                    }
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-saira font-bold text-[#070889] uppercase mb-2">
                    {displayServices[currentService]?.title}
                  </h3>
                  <p className="text-[#1314CC] font-medium mb-4">{displayServices[currentService]?.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed">{displayServices[currentService]?.description}</p>
                </motion.div>
              </AnimatePresence>

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
                  href={getServiceHref(displayServices[currentService])} 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1314CC] text-white font-saira font-semibold hover:bg-[#0e0ea0] transition-all duration-500 ease-out rounded-[9px]"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6">
                {displayServices.map((_, index) => (
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
  );
}
