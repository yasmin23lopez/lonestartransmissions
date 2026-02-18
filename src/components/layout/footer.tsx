"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const SERVICES = [
  { name: "Free Diagnostic", href: "/website/services/01" },
  { name: "Automatic Transmission", href: "/website/services/02" },
  { name: "Standard Transmission", href: "/website/services/03" },
  { name: "Complete Rebuilds", href: "/website/services/04" },
];

const NAV_LINKS = [
  { name: "Home", href: "/website" },
  { name: "Services", href: "/website/services" },
  { name: "Financing", href: "/website/financing" },
  { name: "FAQ", href: "/website/faq" },
  { name: "Contact", href: "/website/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#070889] border-t-4 border-[#DC2626]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row py-16">
          {/* Left Side - Navigation & Contact */}
          <div className="flex-1 pb-8 md:pb-0 pr-0 md:pr-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Navigation Column */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">NAVIGATION</h4>
                <div className="space-y-4">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-white hover:text-[#DC2626] transition-colors text-[15px]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Address Column */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">CONTACT</h4>
                <div className="space-y-4">
                  <a href="tel:281-462-4970" className="block text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    281-462-4970
                  </a>
                  <a href="mailto:lonestartransimissions@gmail.com" className="block text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    lonestartransimissions@gmail.com
                  </a>
                </div>

                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8 mt-12">VISIT US</h4>
                <a
                  href="https://maps.google.com/?q=4321+US-90+Crosby+TX+77532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-[#DC2626] transition-colors text-[15px] leading-relaxed"
                >
                  4321 US-90<br />
                  Crosby, TX 77532
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-white/20" />

          {/* Right Side - Services */}
          <div className="flex-1 pt-8 md:pt-0 pl-0 md:pl-12 border-t md:border-t-0 border-white/20">
            <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">SERVICES</h4>
            <div>
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center justify-between py-6 border-b border-white/20 group hover:border-white/40 transition-colors"
                >
                  <span className="text-white text-2xl font-[family-name:var(--font-saira)] font-bold uppercase tracking-wide">{service.name}</span>
                  <ExternalLink className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-white/20" />

        {/* Bottom: Copyright | Logo | Location */}
        <div className="py-12 flex items-center justify-center">
          <p className="text-white/40 text-sm w-[250px] whitespace-nowrap">© {new Date().getFullYear()} Lonestar Transmissions</p>
          <div className="flex-1 flex justify-center">
            <Image src="/logo.png" alt="Lonestar Transmissions" width={256} height={100} className="h-64 w-auto" />
          </div>
          <p className="text-white/40 text-sm w-[250px] text-right">Crosby, Texas</p>
        </div>
      </div>
    </footer>
  );
}
