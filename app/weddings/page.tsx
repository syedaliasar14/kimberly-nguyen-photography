import HeroSection from "@/app/weddings/components/hero-section";
import ExperienceBreakdown from "@/app/weddings/components/experience-breakdown";
import PortfolioGallery from "@/app/weddings/components/portfolio-gallery";
import ServicesBreakdown from "@/app/weddings/components/services-breakdown";
import ElopementsSection from "@/app/weddings/components/elopements-section";
import EngagementsSection from "@/app/weddings/components/engagements-section";
import CallToAction from "@/app/weddings/components/call-to-action";
import TestimonialSection from "@/app/weddings/components/testimonial-section";

export const metadata = {
  title: "Wedding Photography - Kimberly Nguyen Photography",
  description: "Capturing your wedding day with flow, balance, and heart. From intimate ceremonies to grand celebrations, every love story deserves beautiful documentation.",
};

export default function Weddings() {
  return (
    <>
      <HeroSection />

      <ExperienceBreakdown />

      <TestimonialSection
        quote="Working with Kimberly was an absolute dream! She made us feel so comfortable throughout the entire process, and the photos exceeded all our expectations."
        coupleName="Jessica & David"
      />

      <PortfolioGallery />

      <TestimonialSection
        quote="Every moment was captured with such care and creativity. We couldn't be happier with our photos and the memories they preserve."
        coupleName="Emily & James"
      />

      <ElopementsSection />

      <TestimonialSection
        quote="Kimberly's professionalism and talent made our wedding day stress-free. Her ability to capture candid moments is truly unmatched."
        coupleName="Anna & Robert"
      />

      <EngagementsSection />

      <TestimonialSection
        quote="Kimberly captured our day perfectly. Her eye for natural beauty and genuine moments made our photos feel so authentic and timeless."
        coupleName="Sarah & Michael"
      />

      <ServicesBreakdown />

      <CallToAction />
    </>
  );
}
