import HeroSection from "@/app/home/components/hero-section";
import Testimonials from "@/app/home/components/testimonials";
import OtherServices from "@/app/home/components/other-services";
import CallToAction from "@/app/home/components/call-to-action";
import InstagramFeed from "@/app/home/components/instagram-feed";
import WeddingSection1 from "./home/components/wedding-section-1";
import WeddingSection2 from "./home/components/wedding-section-2";
import { generatePageMetadata, getPageContent } from "@/sanity/lib/page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageContent('home');
  return generatePageMetadata(pageData);
}

export default async function Home() {
  const homeContent = (await getPageContent('home'))?.homeContent;

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
        services={homeContent?.otherServices?.services}
      />
      <CallToAction />
      {/* <InstagramFeed /> */}
    </>
  );
}
