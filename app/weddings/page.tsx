import HeroSection from "@/app/weddings/components/hero-section";
import ProcessSection from "@/app/weddings/components/process-section";
import PortfolioGallery from "@/app/weddings/components/portfolio-gallery";
import PackagesSection from "@/app/weddings/components/packages-section";
import ElopementsSection from "@/app/weddings/components/elopements-section";
import EngagementsSection from "@/app/weddings/components/engagements-section";
import CallToAction from "@/app/weddings/components/call-to-action";
import TestimonialSection from "@/app/weddings/components/testimonial-section";
import { generatePageMetadata, getPageContent } from "@/sanity/lib/page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageContent('weddings');
  return generatePageMetadata(pageData);
}

export default async function Weddings() {
  const weddingsContent = (await getPageContent('weddings'))?.weddingsContent;

  return (
    <>
      <HeroSection
        title={weddingsContent?.heroSection?.title}
        text={weddingsContent?.heroSection?.text}
        images={weddingsContent?.heroSection?.images}
      />

      <ProcessSection processSteps={weddingsContent?.processSection || []} />

      <TestimonialSection
        quote="Working with Kimberly was an absolute dream! She made us feel so comfortable throughout the entire process, and the photos exceeded all our expectations."
        coupleName="Jessica & David"
      />

      <PortfolioGallery />

      <TestimonialSection
        quote="Every moment was captured with such care and creativity. We couldn't be happier with our photos and the memories they preserve."
        coupleName="Emily & James"
      />

      <ElopementsSection
        title={weddingsContent?.elopementsSection?.title}
        text={weddingsContent?.elopementsSection?.text}
        image={weddingsContent?.elopementsSection?.image}
      />

      <TestimonialSection
        quote="Kimberly's professionalism and talent made our wedding day stress-free. Her ability to capture candid moments is truly unmatched."
        coupleName="Anna & Robert"
      />

      <EngagementsSection
        title={weddingsContent?.elopementsSection?.title}
        text={weddingsContent?.elopementsSection?.text}
        image={weddingsContent?.elopementsSection?.image}
      />

      <TestimonialSection
        quote="Kimberly captured our day perfectly. Her eye for natural beauty and genuine moments made our photos feel so authentic and timeless."
        coupleName="Sarah & Michael"
      />

      <PackagesSection
        packages={weddingsContent?.packagesSection?.packages}
      />

      <CallToAction />
    </>
  );
}
