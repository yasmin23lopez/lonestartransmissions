"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Facebook } from "lucide-react";
import { CarDiagnosticIcon, OilChangeIcon, BrakesIcon, HeatACIcon, TransmissionIcon } from "@/components/icons";

const SERVICES = [
  { name: "Free Diagnostic", href: "/website/services/diagnostic", icon: CarDiagnosticIcon },
  { name: "Oil Change", href: "/website/services/oil-change", icon: OilChangeIcon },
  { name: "Brakes", href: "/website/services/brakes", icon: BrakesIcon },
  { name: "Heat or A/C", href: "/website/services/hvac", icon: HeatACIcon },
  { name: "Transmission", href: "/website/services/transmission", icon: TransmissionIcon },
];

const NAV_LINKS = [
  { name: "Home", href: "/website" },
  { name: "About", href: "/website/about" },
  { name: "Financing", href: "/website/financing" },
  { name: "Contact", href: "/website/contact" },
];

// Yelp SVG Icon Component
function YelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.397 5.906a1.073 1.073 0 0 1-.94 1.418 9.194 9.194 0 0 1-3.97-.39 1.073 1.073 0 0 1-.636-1.403l1.837-4.82c.357-.937 1.728-.865 1.98.104l1.729 5.091zM8.678 15.78l5.09-1.728c.97-.33 1.04-1.623.104-1.98l-4.82-1.838a1.073 1.073 0 0 0-1.403.636 9.194 9.194 0 0 0-.39 3.97 1.073 1.073 0 0 0 1.419.94zm-1.593-6.653l4.308-2.905c.83-.564 1.906.216 1.63 1.176l-1.433 4.995a1.073 1.073 0 0 1-1.459.694 9.194 9.194 0 0 1-3.252-2.364 1.072 1.072 0 0 1 .206-1.596zm4.167-5.084a1.073 1.073 0 0 1 1.403.636l1.838 4.82c.357.937-.33 1.728-1.176 1.63l-4.995-1.433a1.073 1.073 0 0 1-.694-1.459 9.194 9.194 0 0 1 2.364-3.252 1.072 1.072 0 0 1 1.26.058z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#070889] border-t-4 border-[#DC2626]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row py-16">
          {/* Left Side - Navigation & Contact */}
          <div className="flex-1 pb-8 md:pb-0 pr-0 md:pr-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
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

              {/* Contact Column */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">CONTACT</h4>
                <div className="space-y-4">
                  <a href="tel:281-462-4970" className="block text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    281-462-4970
                  </a>
                  <a href="mailto:lonestartransimissions@gmail.com" className="block text-white hover:text-[#DC2626] transition-colors text-[15px] break-all">
                    lonestartransimissions@gmail.com
                  </a>
                </div>
              </div>

              {/* Follow Us Column */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">FOLLOW US</h4>
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/p/Lonestar-Transmissions-61569914734217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#DC2626] transition-colors text-[15px]"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.yelp.com/biz/lonestar-transmissions-crosby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#DC2626] transition-colors text-[15px]"
                  >
                    <YelpIcon className="w-5 h-5" />
                    <span>Yelp</span>
                  </a>
                </div>
              </div>

              {/* Visit Us Column */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">VISIT US</h4>
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
                  <div className="flex items-center gap-4">
                    <service.icon className="w-6 h-6 text-[#DC2626]" />
                    <span className="text-white text-2xl font-[family-name:var(--font-saira)] font-bold uppercase tracking-wide">{service.name}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright | Logo | Location */}
        <div className="py-12 flex items-center justify-center border-t border-white/20">
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
