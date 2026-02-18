"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BOOKING_URL = "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";

const NAV_ITEMS = [
  { label: "Home", href: "/website" },
  { label: "Services", href: "/website/services" },
  { label: "Financing", href: "/website/financing" },
  { label: "FAQ", href: "/website/faq" },
  { label: "Contact", href: "/website/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center h-full">
              <Link href="/website" className="relative z-10 flex items-center h-full pr-10">
                <Image src="/logo_white.jpg" alt="Lonestar Transmissions" width={280} height={90} className="h-16 w-auto" />
              </Link>
              <div className="hidden lg:block w-[1px] h-full bg-gray-200" />
              <div className="hidden lg:flex items-center gap-8 h-full pl-10">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[15px] text-[#16215B] hover:text-[#1314CC] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center h-full">
              <a
                href="tel:281-462-4970"
                className="hidden md:flex items-center gap-2 text-[15px] text-[#16215B] hover:text-[#1314CC] transition-colors h-full px-8 border-l border-gray-200 font-medium"
              >
                <Phone className="w-4 h-4" />281-462-4970
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center h-full px-8 text-[15px] font-bold bg-[#1314CC] uppercase text-white hover:bg-[#0e0ea0] transition-colors border-l border-gray-200"
              >
                Book Appointment
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden ml-4 w-10 h-10 flex items-center justify-center"
              >
                {menuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
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
                    className="text-3xl font-[family-name:var(--font-saira)] font-black text-white uppercase"
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
