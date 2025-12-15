import HeroSection from "@/app/about/components/hero-section";
import BehindTheScenes from "@/app/about/components/behind-the-scenes";
import { generatePageMetadata } from "@/sanity/lib/page";
import { Metadata } from "next";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Page } from "@/sanity/lib/types";
import CallToAction from "@/components/call-to-action";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data as Page;
  return generatePageMetadata(pageData) || {
    title: "About Kimberly - Kimberly Nguyen Photography",
    description: "Meet Kimberly Nguyen, a wedding photographer who believes in capturing love stories with flow, balance, and heart, celebrating diversity and community.",
  };
}

export default async function About() {
  const aboutContent = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data?.aboutContent;

  return (
    <>
      <HeroSection 
        title={aboutContent?.heroSection?.title}
        text={aboutContent?.heroSection?.text}
        image={aboutContent?.heroSection?.image}
      />
      <BehindTheScenes 
        title={aboutContent?.behindTheScenesSection?.title}
        text={aboutContent?.behindTheScenesSection?.text}
        image={aboutContent?.behindTheScenesSection?.image}
      />
      <CallToAction />
    </>
  );
}
