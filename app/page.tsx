import HeroSection from "@/app/home/components/hero-section";
import Testimonials from "@/app/home/components/testimonials";
import OtherServices from "@/app/home/components/other-services";
import CallToAction from "@/app/home/components/call-to-action";
import InstagramFeed from "@/app/home/components/instagram-feed";
import WeddingSection1 from "./home/components/wedding-section-1";
import WeddingSection2 from "./home/components/wedding-section-2";

export default async function Home() {
  
  return (
    <>
      <HeroSection />
      <WeddingSection1 />
      <WeddingSection2 />
      <Testimonials />
      <OtherServices />
      <CallToAction />
      <InstagramFeed />
    </>
  );
}
