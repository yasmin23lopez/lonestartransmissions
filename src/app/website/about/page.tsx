import Image from "next/image";
import { CheckCircle, Award, Users, Clock, Shield, ArrowUpRight, Phone, Settings, MapPin } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SectionHeader } from "@/components/ui";
import { TeamSection, AboutFAQSection } from "@/components/about";
import { getAboutPageDataFull } from "@/sanity/lib/fetch";

const FALLBACK_TEAM = [
  { _id: '1', name: "Armando Lopez", role: "Founder & Owner", photo: "/armando_photo.jpg", order: 1 },
  { _id: '2', name: "Juvenal Toledo", role: "Shop Manager", photo: "/juvenal_photo.jpg", order: 2 },
  { _id: '3', name: "Gerardo Campos", role: "R&R Specialist", photo: "/gerardo_photo.jpg", order: 3 },
  { _id: '4', name: "German Guerrero", role: "High Tech Mechanic", photo: "/german_photo.jpg", order: 4 },
  { _id: '5', name: "Jose Torres", role: "High Tech Mechanic", photo: "/jose_photo.jpg", order: 5 },
  { _id: '6', name: "George Martinez", role: "Transmission Builder", photo: "/george_photo.jpg", order: 6 },
];

const FALLBACK_FAQS = [
  { _id: '1', question: "Is the diagnostic really free?", answer: "Yes! We offer a completely free diagnostic with a 25-point inspection to identify any transmission issues.", order: 1 },
  { _id: '2', question: "Do you offer free towing?", answer: "Yes, we offer free towing for transmission repairs within our service area. Call us for details.", order: 2 },
  { _id: '3', question: "Do you offer financing?", answer: "Yes, we offer flexible financing options to help you get your car fixed without breaking the bank.", order: 3 },
  { _id: '4', question: "How long does a repair take?", answer: "Most repairs are completed within 1-3 days. We'll give you an accurate timeline after the diagnostic.", order: 4 },
  { _id: '5', question: "Do you work on all vehicle types?", answer: "Yes, we service all makes and models—domestic and foreign, cars, trucks, and SUVs.", order: 5 },
];

export default async function AboutPage() {
  const { settings, teamMembers, faqs, pageContent } = await getAboutPageDataFull();

  const finalTeam = teamMembers?.length > 0 ? teamMembers : FALLBACK_TEAM;
  const finalFaqs = faqs?.length > 0 ? faqs : FALLBACK_FAQS;

  const phone = settings?.phone || "281-462-4970";
  const address = `${settings?.address || "4321 US-90"}, ${settings?.city || "Crosby"}, ${settings?.state || "TX"} ${settings?.zip || "77532"}`;
  const googleMapsUrl = settings?.googleMapsUrl || "https://maps.google.com/?q=4321+US-90+Crosby+TX+77532";
  const bookingUrl = settings?.bookingUrl || "https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473";
  const hoursWeekday = settings?.hoursWeekday || "8:00 AM - 6:00 PM";
  const hoursSaturday = settings?.hoursSaturday || "8:00 AM - 12:00 PM";

  // Page content with fallbacks
  const hero = pageContent?.hero || {
    label: 'WHO WE ARE',
    title: 'ABOUT US',
    subtitle: '20+ years of transmission expertise serving Crosby, Texas and the greater Houston area.',
    image: null,
  };

  const storySection = pageContent?.sections?.find(s => s.sectionId === 'story') || {
    label: 'OUR STORY',
    title: 'FAMILY OWNED & OPERATED',
    subtitle: 'Lonestar Transmissions was founded with a simple mission: provide honest, reliable transmission repair at fair prices. What started as a small shop has grown into one of the most trusted transmission specialists in the Houston area.',
  };

  const whyUsSection = pageContent?.sections?.find(s => s.sectionId === 'why-us') || {
    label: 'WHY CHOOSE US',
    title: 'THE LONESTAR DIFFERENCE',
  };

  const locationSection = pageContent?.sections?.find(s => s.sectionId === 'location') || {
    label: 'OUR LOCATION',
    title: 'VISIT US IN CROSBY, TEXAS',
    subtitle: "Conveniently located on US-90, we're easy to find and ready to help with all your transmission needs.",
  };

  const cta = pageContent?.cta || {
    title: 'READY TO GET STARTED?',
    subtitle: "Call us for a free diagnostic or book your appointment online. We'll take care of the rest.",
    backgroundColor: '#DC2626',
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#16215B]">
          <Image src={hero.image || "/about_hero.jpg"} alt="About Us" fill className="object-cover" />
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

      {/* Our Story + Video */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionHeader label={storySection.label} title={storySection.title?.split(' ').slice(0, 2) || ["FAMILY", "OWNED"]} description={storySection.subtitle} />
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Over 20 years of combined experience in transmission repair and rebuilds</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Family-friendly environment where every customer is treated with respect</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#DC2626] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Transparent pricing with no hidden fees or surprise charges</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <video src="/video.mp4" className="w-full h-full object-cover" loop muted playsInline autoPlay />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection teamMembers={finalTeam} />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#1314CC]" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#070889]">{whyUsSection.label}</span>
              <div className="w-12 h-[2px] bg-[#1314CC]" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-saira font-black text-[#070889] leading-[0.85] uppercase">{whyUsSection.title?.split(' ').slice(0, 2).join(' ')}<br />{whyUsSection.title?.split(' ').slice(2).join(' ')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "20+ Years Experience", desc: "Decades of expertise in transmission repair" },
              { icon: Shield, title: "Warranty Included", desc: "All repairs backed by our warranty" },
              { icon: Users, title: "1,000+ Happy Clients", desc: "Trusted by the Crosby community" },
              { icon: Clock, title: "Fast Turnaround", desc: "Get back on the road quickly" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#FAFAFA] rounded-2xl p-8 text-center h-full">
                  <div className="w-16 h-16 bg-[#1314CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[#1314CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#16215B] mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section className="py-24 lg:py-32 bg-[#16215B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-xs font-bold tracking-[0.2em] text-white/80">{locationSection.label}</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-saira font-black text-white leading-[0.85] uppercase mb-6">{locationSection.title?.split(' ').slice(0, 3).join(' ')}<br />{locationSection.title?.split(' ').slice(3).join(' ')}</h2>
                <p className="text-white/60 text-lg mb-8">{locationSection.subtitle}</p>
                <div className="space-y-4 mb-8">
                  <p className="text-white text-xl font-bold">{address}</p>
                  <p className="text-white/60">Monday - Friday: {hoursWeekday}</p>
                  <p className="text-white/60">Saturday: {hoursSaturday}</p>
                </div>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-saira font-semibold tracking-wider hover:bg-[#b91c1c] transition-all duration-500 ease-out rounded-[9px]">
                  GET DIRECTIONS
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8!2d-95.0647!3d29.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzUzLjAiTiA5NcKwMDMnNTMuMCJX!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lonestar Transmissions Location" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AboutFAQSection faqs={finalFaqs} settings={settings} />

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: cta.backgroundColor || '#DC2626' }}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-saira font-black text-white leading-[0.9] uppercase mb-6">{cta.title}</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">{cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#DC2626] font-saira font-semibold tracking-wider hover:bg-gray-100 transition-all duration-500 ease-out rounded-[9px]">
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-saira font-semibold tracking-wider hover:bg-white hover:text-[#DC2626] transition-all duration-500 ease-out rounded-[9px]">
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
