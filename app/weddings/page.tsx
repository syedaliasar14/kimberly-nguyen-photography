import HeroSection from "@/app/weddings/components/hero-section";
import ExperienceBreakdown from "@/app/weddings/components/experience-breakdown";
import PortfolioGallery from "@/app/weddings/components/portfolio-gallery";
import ServicesBreakdown from "@/app/weddings/components/services-breakdown";
import ElopementsAndEngagements from "@/app/weddings/components/elopements-and-engagements";
import Testimonials from "@/app/weddings/components/testimonials";
import CallToAction from "@/app/weddings/components/call-to-action";

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
