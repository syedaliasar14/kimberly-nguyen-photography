import HeroSection from "@/components/about/hero-section";
import StorySection from "@/components/about/story-section";
import ValuesSection from "@/components/about/values-section";
import BehindTheScenes from "@/components/about/behind-the-scenes";
import VideoSection from "@/components/about/video-section";
import CallToAction from "@/components/about/call-to-action";

export const metadata = {
  title: "About Kimberly - Kimberly Nguyen Photography",
  description: "Meet Kimberly Nguyen, a wedding photographer who believes in capturing love stories with flow, balance, and heart, celebrating diversity and community.",
};

export default function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <BehindTheScenes />
      <VideoSection />
      <CallToAction />
    </>
  );
}