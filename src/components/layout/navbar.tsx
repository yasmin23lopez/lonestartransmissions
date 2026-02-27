"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CarDiagnosticIcon, OilChangeIcon, BrakesIcon, HeatACIcon, TransmissionIcon } from "@/components/icons";

const BOOKING_URL = "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

const NAV_ITEMS = [
  { label: "Home", href: "/website" },
  { label: "About", href: "/website/about" },
  { label: "Services", href: "/website/services", hasDropdown: true },
  { label: "Financing", href: "/website/financing" },
  { label: "Contact", href: "/website/contact" },
];

const SERVICE_ITEMS = [
  { label: "Car Problems?", subtitle: "Free Diagnostic", href: "/website/services/diagnostic", icon: CarDiagnosticIcon },
  { label: "Oil Change", href: "/website/services/oil-change", icon: OilChangeIcon },
  { label: "Brakes", href: "/website/services/brakes", icon: BrakesIcon },
  { label: "Heat or A/C", href: "/website/services/hvac", icon: HeatACIcon },
  { label: "Transmission", href: "/website/services/transmission", icon: TransmissionIcon },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/website";
  const isRedMode = !scrolled && isHome;
  const isBlueMode = !scrolled && !isHome;
  const isWhiteMode = scrolled;
  
  // Get dropdown background color based on mode
  const getDropdownBg = () => {
    if (isRedMode) return "#DC2626";
    if (isBlueMode) return "#18225B";
    return "white";
  };
  
  const isActive = (href: string) => pathname === href || (href !== "/website" && pathname.startsWith(href));

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isWhiteMode 
            ? "bg-white border-b border-gray-200" 
            : isRedMode
              ? "bg-transparent border-b border-white/20"
              : "bg-[#18225B] border-b border-white/20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center h-full">
              <Link href="/website" className="relative z-10 flex items-center h-full pr-10 min-w-[200px]">
                <Image 
                  src="/logo_transparent.png" 
                  alt="Lonestar Transmissions" 
                  width={280} 
                  height={90} 
                  className="h-[85px] w-auto" 
                />
              </Link>
              <div className={`hidden lg:block w-[1px] h-full transition-colors duration-300 ${scrolled ? "bg-gray-200" : "bg-white/20"}`} />
              <div className="hidden lg:flex items-center gap-2 h-full pl-10">
                {NAV_ITEMS.map((item) => (
                  item.hasDropdown ? (
                    <div 
                      key={item.label}
                      ref={dropdownRef}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setServicesHovered(true)}
                      onMouseLeave={() => setServicesHovered(false)}
                    >
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] transition-all font-medium uppercase font-saira ${
                          scrolled 
                            ? `text-[#16215B] ${servicesOpen || isActive(item.href) ? "bg-[#1314CC]/10" : "hover:bg-gray-100"}` 
                            : `text-white ${servicesOpen || isActive(item.href) ? "bg-white/20" : "hover:bg-white/10"}`
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : servicesHovered ? "translate-y-0.5" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2"
                          >
                            <div className="relative pt-4">
                              {/* Top bar that extends to connect with navbar */}
                              <div 
                                className="absolute top-0 left-0 right-0 h-4"
                                style={{ backgroundColor: getDropdownBg() }}
                              />
                              
                              {/* Left curve */}
                              <div 
                                className="absolute top-0 w-4 h-4 overflow-hidden"
                                style={{ left: '-15px' }}
                              >
                                <div 
                                  className="w-full h-full"
                                  style={{
                                    background: `radial-gradient(circle at 0% 100%, transparent 16px, ${getDropdownBg()} 16px)`
                                  }}
                                />
                                {!isWhiteMode && (
                                  <div 
                                    className="absolute inset-0"
                                    style={{
                                      background: `radial-gradient(circle at 0% 100%, transparent 15px, rgba(255,255,255,0.2) 15px, rgba(255,255,255,0.2) 16px, transparent 16px)`
                                    }}
                                  />
                                )}
                              </div>
                              
                              {/* Right curve */}
                              <div 
                                className="absolute top-0 w-4 h-4 overflow-hidden"
                                style={{ right: '-15px' }}
                              >
                                <div 
                                  className="w-full h-full"
                                  style={{
                                    background: `radial-gradient(circle at 100% 100%, transparent 16px, ${getDropdownBg()} 16px)`
                                  }}
                                />
                                {!isWhiteMode && (
                                  <div 
                                    className="absolute inset-0"
                                    style={{
                                      background: `radial-gradient(circle at 100% 100%, transparent 15px, rgba(255,255,255,0.2) 15px, rgba(255,255,255,0.2) 16px, transparent 16px)`
                                    }}
                                  />
                                )}
                              </div>
                              
                              {/* Main dropdown */}
                              <div 
                                className={`rounded-b-2xl p-3 min-w-[280px] ${
                                  isWhiteMode ? "shadow-lg border border-gray-100 border-t-0" : ""
                                }`}
                                style={{
                                  backgroundColor: getDropdownBg(),
                                  ...(!isWhiteMode ? {
                                    borderLeft: '1px solid rgba(255,255,255,0.2)',
                                    borderRight: '1px solid rgba(255,255,255,0.2)',
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                  } : {})
                                }}
                              >
                                {SERVICE_ITEMS.map((service) => (
                                  <Link
                                    key={service.label}
                                    href={service.href}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors group ${
                                      isWhiteMode ? "hover:bg-gray-50" : "hover:bg-white/10"
                                    }`}
                                  >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      isWhiteMode ? "bg-[#1314CC]/10" : "bg-white/20"
                                    }`}>
                                      <service.icon className={`w-6 h-6 ${isWhiteMode ? "text-[#1314CC]" : "text-white"}`} />
                                    </div>
                                    <div>
                                      <p className={`font-medium ${isWhiteMode ? "text-[#16215B]" : "text-white"}`}>{service.label}</p>
                                      {service.subtitle && (
                                        <p className={`text-sm ${isWhiteMode ? "text-gray-400" : "text-white/60"}`}>{service.subtitle}</p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-[14px] transition-all font-medium uppercase font-saira ${
                        scrolled 
                          ? `text-[#16215B] ${isActive(item.href) ? "bg-[#1314CC]/10" : "hover:bg-gray-100"}` 
                          : `text-white ${isActive(item.href) ? "bg-white/20" : "hover:bg-white/10"}`
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
            <div className="flex items-center h-full">
              <a
                href="tel:281-462-4970"
                className={`hidden md:flex items-center gap-2 text-[17px] transition-colors h-full px-8 font-medium ${
                  scrolled 
                    ? "text-[#16215B] hover:text-[#1314CC] border-l border-gray-200" 
                    : "text-white hover:text-white/70 border-l border-white/20"
                }`}
              >
                <Phone className="w-4 h-4" />281 - 462 - 4970
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:flex items-center h-full px-8 text-[18px] font-saira italic font-bold uppercase transition-colors ${
                  scrolled 
                    ? "bg-[#1314CC] text-white hover:bg-[#0e0ea0] border-l border-gray-200" 
                    : "bg-white text-[#DC2626] hover:bg-white/90 border-l border-white/20"
                }`}
              >
                Book Appointment
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden ml-4 w-10 h-10 flex items-center justify-center"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className={`w-6 h-6 ${scrolled ? "text-gray-600" : "text-white"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1314CC] lg:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-saira font-black text-white uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:281-462-4970"
                className="mt-8 px-8 py-4 bg-white text-[#16215B] font-bold rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                CALL NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
