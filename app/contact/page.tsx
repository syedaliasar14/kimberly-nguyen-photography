import HeroSection from "@/app/contact/components/hero-section";
import ContactForm from "@/app/contact/components/contact-form";
import Testimonials from "@/app/contact/components/testimonials";
import FaqSection from "@/app/contact/components/faq-section";

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <Testimonials />
      <FaqSection />
    </>
  );
}