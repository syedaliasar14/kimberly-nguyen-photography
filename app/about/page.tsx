import HeroSection from "@/app/about/components/hero-section";
import BehindTheScenes from "@/app/about/components/behind-the-scenes";
import CallToAction from "@/app/about/components/call-to-action";

export const metadata = {
  title: "About Kimberly - Kimberly Nguyen Photography",
  description: "Meet Kimberly Nguyen, a wedding photographer who believes in capturing love stories with flow, balance, and heart, celebrating diversity and community.",
};

export default function About() {
  return (
    <>
      <HeroSection />
      <BehindTheScenes />
      <CallToAction />
    </>
  );
}
