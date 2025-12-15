import HeroSection from "@/app/weddings/components/hero-section";
import ProcessSection from "@/app/weddings/components/process-section";
import PortfolioGallery from "@/app/weddings/components/portfolio-gallery";
import PackagesSection from "@/app/weddings/components/packages-section";
import ElopementsSection from "@/app/weddings/components/elopements-section";
import EngagementsSection from "@/app/weddings/components/engagements-section";
import TestimonialSection from "@/app/weddings/components/testimonial-section";
import { generatePageMetadata } from "@/sanity/lib/page";
import { Metadata } from "next";
import { WEDDINGS_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Page } from "@/sanity/lib/types";
import CallToAction from "@/components/call-to-action";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = (await sanityFetch({query: WEDDINGS_PAGE_QUERY, params: {}}))?.data as Page;
  return generatePageMetadata(pageData);
}

export default async function Weddings() {
  const weddingsContent = (await sanityFetch({query: WEDDINGS_PAGE_QUERY, params: {}}))?.data.weddingsContent;

  return (
    <>
      <HeroSection
        title={weddingsContent?.heroSection?.title}
        text={weddingsContent?.heroSection?.text}
        images={weddingsContent?.heroSection?.images}
      />

      <ProcessSection processSteps={weddingsContent?.processSection || []} />

      <TestimonialSection
        quote={weddingsContent?.testimonials?.[0]?.quote || ""}
        coupleName={weddingsContent?.testimonials?.[0]?.name || ""}
      />

      <PortfolioGallery />

      <TestimonialSection
        quote={weddingsContent?.testimonials?.[1]?.quote || ""}
        coupleName={weddingsContent?.testimonials?.[1]?.name || ""}
      />

      <ElopementsSection
        title={weddingsContent?.elopementsSection?.title}
        text={weddingsContent?.elopementsSection?.text}
        image={weddingsContent?.elopementsSection?.image}
      />

      <TestimonialSection
        quote={weddingsContent?.testimonials?.[2]?.quote || ""}
        coupleName={weddingsContent?.testimonials?.[2]?.name || ""}
      />

      <EngagementsSection
        title={weddingsContent?.engagementsSection?.title}
        text={weddingsContent?.engagementsSection?.text}
        image={weddingsContent?.engagementsSection?.image}
      />

      <TestimonialSection
        quote={weddingsContent?.testimonials?.[3]?.quote || ""}
        coupleName={weddingsContent?.testimonials?.[3]?.name || ""}
      />

      <PackagesSection
        packages={weddingsContent?.packagesSection?.packages}
      />

      <CallToAction />
    </>
  );
}
