import HeroSection from "@/app/home/components/hero-section";
import Testimonials from "@/app/home/components/testimonials";
import OtherServices from "@/app/home/components/other-services";
import CallToAction from "@/components/call-to-action";
import InstagramFeed from "@/app/home/components/instagram-feed";
import WeddingSection1 from "./home/components/wedding-section-1";
import WeddingSection2 from "./home/components/wedding-section-2";
import { generatePageMetadata } from "@/sanity/lib/page";
import { Metadata } from "next";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Page } from "@/sanity/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = (await sanityFetch({query: HOME_PAGE_QUERY, params: {}}))?.data as Page;
  return generatePageMetadata(pageData);
}

export default async function Home() {
  const homeContent = (await sanityFetch({query: HOME_PAGE_QUERY, params: {}}))?.data.homeContent;

  return (
    <>
      <HeroSection 
        tagline={homeContent?.heroSection?.tagline}
        images={homeContent?.heroSection?.images}
      />
      <WeddingSection1
        title={homeContent?.weddingSection1?.title}
        text={homeContent?.weddingSection1?.text}
        images={homeContent?.weddingSection1?.images}
        keywords={homeContent?.weddingSection1?.keywords}
      />
      <WeddingSection2 
        title={homeContent?.weddingSection2?.title}
        text={homeContent?.weddingSection2?.text}
        images={homeContent?.weddingSection2?.images}
      />
      <Testimonials 
        title={homeContent?.testimonialsSection?.title}
        testimonials={homeContent?.testimonialsSection?.testimonials}
      />
      <OtherServices 
        title={homeContent?.otherServices?.title}
        subtitle={homeContent?.otherServices?.subtitle}
        services={homeContent?.otherServices?.services}
      />
      <CallToAction />
      {/* <InstagramFeed /> */}
    </>
  );
}
