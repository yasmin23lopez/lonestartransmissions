import Image from "next/image";
import { Phone, MapPin, Mail, Construction } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-12 font-[family-name:var(--font-funnel)]">
      <div className="w-full max-w-5xl">
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Lonestar Transmissions"
              width={380}
              height={380}
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            


            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl text-chrome font-[family-name:var(--font-saira)] font-black uppercase leading-8">
                Our Website<br/> is Under Construction
              </h1>
              <p className="text-[#999] text-base max-w-md">
                We&apos;re building something great. In the meantime, reach out to us directly.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="w-full space-y-3 pt-2">
              <a
                href="tel:281-462-4970"
                className="flex items-center gap-4 p-3 bg-[#080808] border border-[#1a1a1a] rounded-lg hover:border-[#1314CC]/40 hover:bg-[#0a0a0a] transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#1314CC]/10 rounded-lg group-hover:bg-[#1314CC]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#1314CC]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#666] uppercase tracking-widest font-semibold">Phone</p>
                  <p className="text-white font-bold">281-462-4970</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=4321+US-90,+Crosby,+TX+77532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 bg-[#080808] border border-[#1a1a1a] rounded-lg hover:border-[#1314CC]/40 hover:bg-[#0a0a0a] transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#1314CC]/10 rounded-lg group-hover:bg-[#1314CC]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#1314CC]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#666] uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-white font-bold">4321 US-90, Crosby, TX 77532</p>
                </div>
              </a>

              <a
                href="mailto:lonestartransimissions@gmail.com"
                className="flex items-center gap-4 p-3 bg-[#080808] border border-[#1a1a1a] rounded-lg hover:border-[#1314CC]/40 hover:bg-[#0a0a0a] transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#1314CC]/10 rounded-lg group-hover:bg-[#1314CC]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#1314CC]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#666] uppercase tracking-widest font-semibold">Email</p>
                  <p className="text-white font-bold text-sm">lonestartransimissions@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Footer */}
            <p className="text-[11px] text-[#666] pt-4">
              © {new Date().getFullYear()} Lonestar Transmissions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
