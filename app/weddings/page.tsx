import HeroSection from "@/components/weddings/hero-section";
import ExperienceBreakdown from "@/components/weddings/experience-breakdown";
import PortfolioGallery from "@/components/weddings/portfolio-gallery";
import ServicesBreakdown from "@/components/weddings/services-breakdown";
import ElopementsAndEngagements from "@/components/weddings/elopements-and-engagements";
import Testimonials from "@/components/weddings/testimonials";
import CallToAction from "@/components/weddings/call-to-action";

export const metadata = {
  title: "Wedding Photography - Kimberly Nguyen Photography",
  description: "Capturing your wedding day with flow, balance, and heart. From intimate ceremonies to grand celebrations, every love story deserves beautiful documentation.",
};

export default function Weddings() {
  return (
    <>
      <HeroSection />
      <ExperienceBreakdown />
      <PortfolioGallery />
      <ServicesBreakdown />
      <ElopementsAndEngagements />
      <Testimonials />
      <CallToAction />
    </>
  );
}