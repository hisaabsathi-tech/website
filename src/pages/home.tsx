import HeroSection from "@/components/home/hero";
import AnimatedLogoCloud from "@/components/home/logo-cloud";
import Features from "@/components/home/features";
import TestimonialMarquee from "@/components/home/testimonial";
import FAQAccordion from "@/components/home/faqSection";
import Cta from "@/components/home/cta";
import SeoText from "@/seo";

function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedLogoCloud />
      <Features/>
      <TestimonialMarquee />
      <FAQAccordion />
      <Cta />
      <SeoText />
    </>
  );
}

export default Home;
