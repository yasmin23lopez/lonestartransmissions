import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection, ServicesSlider, FinancingSection, TestimonialsSection, FAQSection } from "@/components/home";
import { getHomePageData } from "@/sanity/lib/fetch";

export default async function Home() {
  const { settings, services, testimonials, faqs, financingPartners, pageContent } = await getHomePageData();

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-funnel)] overflow-x-hidden">
      <Navbar />
      <HeroSection settings={settings} pageContent={pageContent} />
      <ServicesSlider services={services} settings={settings} />
      <FinancingSection partners={financingPartners} settings={settings} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} settings={settings} />
      <Footer />
    </div>
  );
}
