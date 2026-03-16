import Image from "next/image";
import { Phone, MapPin, Mail, Clock, ArrowUpRight, Settings } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui";
import { ContactForm } from "@/components/contact";
import { getContactPageData } from "@/sanity/lib/fetch";

export default async function ContactPage() {
  const { settings, pageContent } = await getContactPageData();

  const phone = settings?.phone || "281-462-4970";
  const email = settings?.email || "lonestartransimissions@gmail.com";
  const address = `${settings?.address || "4321 US-90"}, ${settings?.city || "Crosby"}, ${settings?.state || "TX"} ${settings?.zip || "77532"}`;
  const googleMapsUrl = settings?.googleMapsUrl || "https://maps.google.com/?q=4321+US-90+Crosby+TX+77532";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";
  const hoursWeekday = settings?.hoursWeekday || "8:00 AM - 6:00 PM";
  const hoursSaturday = settings?.hoursSaturday || "8:00 AM - 12:00 PM";
  const hoursSunday = settings?.hoursSunday || "Closed";

  // Page content with fallbacks
  const hero = pageContent?.hero || {
    label: 'GET IN TOUCH',
    title: 'CONTACT US',
    subtitle: "Have questions? Need a quote? We're here to help. Reach out by phone, email, or stop by our shop in Crosby.",
    image: null,
  };

  const hoursSection = pageContent?.sections?.find(s => s.sectionId === 'hours') || {
    label: 'BUSINESS HOURS',
    title: "WHEN WE'RE OPEN",
  };

  const cta = pageContent?.cta || {
    title: 'FREE DIAGNOSTIC AVAILABLE',
    subtitle: "Not sure what's wrong with your transmission? Bring it in for a free 25-point inspection. No obligation.",
    backgroundColor: '#DC2626',
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={hero.image || "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072"} alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16215B] via-[#16215B]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Settings className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80">{hero.label}</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-saira font-black text-white leading-[0.85] uppercase mb-6">{hero.title}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{hero.subtitle}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <a href={`tel:${phone}`} className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-2xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{phone}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-xl font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors">{address}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a href={`mailto:${email}`} className="flex items-start gap-6 p-6 bg-[#FAFAFA] rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-[#1314CC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-bold text-[#16215B] group-hover:text-[#1314CC] transition-colors break-all">{email}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-[#070889] rounded-2xl p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-4">
                    <Clock className="w-4 h-4 text-white/80" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white/80">BOOK ONLINE</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-saira font-black text-white leading-[0.9] uppercase mb-4">SCHEDULE YOUR APPOINTMENT</h3>
                  <p className="text-white/60 mb-6">Skip the wait. Book online and we'll have everything ready.</p>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out w-full rounded-[9px]">
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
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1314CC]/10 to-[#16215B]/10 mb-6">
                  <Settings className="w-3.5 h-3.5 text-[#16215B]" />
                  <span className="text-xs font-bold tracking-[0.2em] text-[#16215B]">{hoursSection.label}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-saira font-black text-[#16215B] leading-[0.9] uppercase mb-8">{hoursSection.title}</h2>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: hoursWeekday },
                    { day: "Saturday", hours: hoursSaturday },
                    { day: "Sunday", hours: hoursSunday },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-gray-200">
                      <span className="text-[#16215B] font-medium text-lg">{item.day}</span>
                      <span className={`font-bold text-lg ${item.hours === "Closed" ? "text-[#DC2626]" : "text-[#1314CC]"}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8!2d-95.0647!3d29.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzUzLjAiTiA5NcKwMDMnNTMuMCJX!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lonestar Transmissions Location" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: cta.backgroundColor || '#DC2626' }}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-saira font-black text-white leading-[0.9] uppercase mb-6">{cta.title}</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">{cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-bold tracking-wider rounded-[9px] hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold tracking-wider rounded-[9px] hover:bg-white hover:text-[#DC2626] transition-colors">
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
