"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Facebook } from "lucide-react";
import { CarDiagnosticIcon, OilChangeIcon, BrakesIcon, HeatACIcon, TransmissionIcon } from "@/components/icons";
import type { SiteSettings } from "@/sanity/lib/fetch";

const SERVICES = [
  { name: "Free Diagnostic", href: "/services/diagnostic", icon: CarDiagnosticIcon },
  { name: "Oil Change", href: "/services/oil-change", icon: OilChangeIcon },
  { name: "Brakes", href: "/services/brakes", icon: BrakesIcon },
  { name: "Heat or A/C", href: "/services/hvac", icon: HeatACIcon },
  { name: "Transmission", href: "/services/transmission", icon: TransmissionIcon },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Financing", href: "/financing" },
  { name: "Contact", href: "/contact" },
];

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.397 5.906a1.073 1.073 0 0 1-.94 1.418 9.194 9.194 0 0 1-3.97-.39 1.073 1.073 0 0 1-.636-1.403l1.837-4.82c.357-.937 1.728-.865 1.98.104l1.729 5.091zM8.678 15.78l5.09-1.728c.97-.33 1.04-1.623.104-1.98l-4.82-1.838a1.073 1.073 0 0 0-1.403.636 9.194 9.194 0 0 0-.39 3.97 1.073 1.073 0 0 0 1.419.94zm-1.593-6.653l4.308-2.905c.83-.564 1.906.216 1.63 1.176l-1.433 4.995a1.073 1.073 0 0 1-1.459.694 9.194 9.194 0 0 1-3.252-2.364 1.072 1.072 0 0 1 .206-1.596zm4.167-5.084a1.073 1.073 0 0 1 1.403.636l1.838 4.82c.357.937-.33 1.728-1.176 1.63l-4.995-1.433a1.073 1.073 0 0 1-.694-1.459 9.194 9.194 0 0 1 2.364-3.252 1.072 1.072 0 0 1 1.26.058z"/>
    </svg>
  );
}

interface FooterClientProps {
  settings: SiteSettings | null;
}

export function FooterClient({ settings }: FooterClientProps) {
  const phone = settings?.phone || "281-462-4970";
  const email = settings?.email || "lonestartransimissions@gmail.com";
  const address = settings?.address || "4321 US-90";
  const city = settings?.city || "Crosby";
  const state = settings?.state || "TX";
  const zip = settings?.zip || "77532";
  const facebookUrl = settings?.facebookUrl || "https://www.facebook.com/p/Lonestar-Transmissions-61569914734217/";
  const yelpUrl = settings?.yelpUrl || "https://www.yelp.com/biz/lonestar-transmissions-crosby";
  const googleMapsUrl = settings?.googleMapsUrl || "https://maps.google.com/?q=4321+US-90+Crosby+TX+77532";

  return (
    <footer className="bg-[#070889] border-t-4 border-[#DC2626] relative pt-16">
      <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-10">
        <Image src="/sign.png" alt="Lonestar Sign" width={160} height={160} className="w-32 h-auto" />
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row py-16">
          <div className="flex-1 pb-8 md:pb-0 pr-0 md:pr-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">NAVIGATION</h4>
                <div className="space-y-4">
                  {NAV_LINKS.map((item) => (
                    <Link key={item.name} href={item.href} className="block text-white hover:text-[#DC2626] transition-colors text-[15px]">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">CONTACT</h4>
                <div className="space-y-4">
                  <a href={`tel:${phone}`} className="block text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    {phone}
                  </a>
                  <a href={`mailto:${email}`} className="block text-white hover:text-[#DC2626] transition-colors text-[15px] break-all">
                    {email}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">FOLLOW US</h4>
                <div className="space-y-4">
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#DC2626] transition-colors text-[15px]">
                    <YelpIcon className="w-5 h-5" />
                    <span>Yelp</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">VISIT US</h4>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block text-white hover:text-[#DC2626] transition-colors text-[15px] leading-relaxed">
                  {address}<br />
                  {city}, {state} {zip}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-white/20" />

          <div className="flex-1 pt-8 md:pt-0 pl-0 md:pl-12 border-t md:border-t-0 border-white/20">
            <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] mb-8">SERVICES</h4>
            <div>
              {SERVICES.map((service) => (
                <Link key={service.name} href={service.href} className="flex items-center justify-between py-6 border-b border-white/20 group hover:border-white/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <service.icon className="w-6 h-6 text-[#DC2626]" />
                    <span className="text-white text-2xl font-saira font-bold uppercase tracking-wide">{service.name}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/20">
          <p className="text-white/40 text-sm order-2 md:order-1 md:w-[250px] whitespace-nowrap">© {new Date().getFullYear()} Lonestar Transmissions</p>
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <Image src="/logo_transparent.png" alt="Lonestar Transmissions" width={200} height={80} className="h-24 md:h-32 w-auto" />
          </div>
          <p className="text-white/40 text-sm order-3 md:w-[250px] md:text-right">{city}, {state}</p>
        </div>
      </div>
    </footer>
  );
}
