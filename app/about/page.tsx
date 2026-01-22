import HeroSection from "@/app/about/components/hero-section";
import BehindTheScenes from "@/app/about/components/behind-the-scenes";
import ValuesSection from "@/app/about/components/values-section";
import { generatePageMetadata } from "@/sanity/lib/page";
import { Metadata } from "next";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Page } from "@/sanity/lib/types";
import CallToAction from "@/components/call-to-action";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data as Page;
  return generatePageMetadata(pageData) || {
    title: "About | Kimberly Nguyen Photography",
    description: "Meet Kimberly Nguyen, a wedding photographer who believes in capturing love stories authentically and beautifully.",
  };
}

export default async function About() {
  const pageData = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data as Page;
  const aboutContent = pageData.aboutContent;
  const photosAltText = pageData.seo?.photosAltText

  return (
    <>
      <HeroSection 
        title={aboutContent?.heroSection?.title}
        text={aboutContent?.heroSection?.text}
        image={aboutContent?.heroSection?.image}
        image2={aboutContent?.heroSection?.image2}
        photosAltText={photosAltText}
      />
      <BehindTheScenes 
        title={aboutContent?.behindTheScenesSection?.title}
        text={aboutContent?.behindTheScenesSection?.text}
        image={aboutContent?.behindTheScenesSection?.image}
        image2={aboutContent?.behindTheScenesSection?.image2}
        photosAltText={photosAltText}
      />
      <ValuesSection 
        title={aboutContent?.valuesSection?.title}
        text={aboutContent?.valuesSection?.text}
        image={aboutContent?.valuesSection?.image}
        image2={aboutContent?.valuesSection?.image2}
        photosAltText={photosAltText}
      />
      <CallToAction />
    </>
  );
}
