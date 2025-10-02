import HeroSection from "@/app/home/components/hero-section";
import WeddingPhotography from "@/app/home/components/wedding-photography";
import Testimonials from "@/app/home/components/testimonials";
import OtherServices from "@/app/home/components/other-services";
import CallToAction from "@/app/home/components/call-to-action";
import InstagramFeed from "@/app/home/components/instagram-feed";

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
