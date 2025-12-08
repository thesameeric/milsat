import WhyWeExistSection from "@/components/WhyWeExistSection";
import CustomersSection from "@/components/CustomersSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReadyToStart from "@/components/ReadyToStart";
import NewsletterSection from "@/components/NewsletterSection";
import LandingPageHero from "@/components/landingPageHero";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <LandingPageHero />
      <WhyWeExistSection />
      <CustomersSection />
      <HowWeDoItSection />
      <ReadyToStart />
      <TestimonialsSection autoplay={true} />
      <CaseStudiesSection autoplay={true} />
      <NewsletterSection />
    </div>
  );
}
