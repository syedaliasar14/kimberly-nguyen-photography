import HeroSection from "@/components/home/hero-section";
import WeddingPhotography from "@/components/home/wedding-photography";
import Testimonials from "@/components/home/testimonials";
import OtherServices from "@/components/home/other-services";
import CallToAction from "@/components/home/call-to-action";
import InstagramFeed from "@/components/home/instagram-feed";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeddingPhotography />
      <Testimonials />
      <OtherServices />
      <CallToAction />
      <InstagramFeed />
    </>
  );
}
