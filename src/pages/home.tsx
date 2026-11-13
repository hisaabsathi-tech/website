import PageSeo from "@/components/shared/page-seo";
import HeroSection from "@/components/home/hero";
import AnimatedLogoCloud from "@/components/home/logo-cloud";
import Features from "@/components/home/features";
import TestimonialMarquee from "@/components/home/testimonial";
import FAQAccordion from "@/components/home/faqSection";
import Cta from "@/components/home/cta";

function Home() {
  return (
    <>
      <PageSeo
        title="Hisaab Sathi - Courier Billing & Invoicing Software for India"
        description="Hisaab Sathi is India's cloud-based billing software for courier and logistics businesses. Create GST invoices, manage rate charts, ledgers and bulk orders."
        path="/"
      />
      <HeroSection />
      <AnimatedLogoCloud />
      <Features/>
      <TestimonialMarquee />
      <FAQAccordion />
      <Cta />
    </>
  );
}

export default Home;
