import ContactForm from "@/app/contact/components/contact-form";
import FaqSection from "@/app/contact/components/faq-section";
import { generatePageMetadata } from "@/sanity/lib/page";
import { Metadata } from "next";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Page } from "@/sanity/lib/types";
import Testimonials from "./components/testimonials";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = (await sanityFetch({ query: CONTACT_PAGE_QUERY, params: {} }))?.data as Page;
  return generatePageMetadata(pageData) || {
    title: "Contact | Kimberly Nguyen Photography",
    description: "Get in touch with Kimberly Nguyen Photography for wedding and portrait photography services.",
  };
}

export default async function Contact() {
  const pageData = (await sanityFetch({ query: CONTACT_PAGE_QUERY, params: {} }))?.data as Page;
  const contactContent = pageData?.contactContent;

  return (
    <>
      <ContactForm
        title={contactContent?.contactForm?.title}
        subtitle={contactContent?.contactForm?.subtitle}
      />
      <Testimonials
        title={contactContent?.testimonialsSection?.title}
        testimonials={contactContent?.testimonialsSection?.testimonials}
      />
      <FaqSection data={contactContent?.faqSection} />
    </>
  );
}
