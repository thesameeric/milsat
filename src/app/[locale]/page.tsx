import WhyWeExistSection from "@/components/WhyWeExistSection";
import CustomersSection from "@/components/CustomersSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReadyToStart from "@/components/ReadyToStart";
import NewsletterSection from "@/components/NewsletterSection";
import LandingPageHero from "@/components/landingPageHero";
import { NewsItem } from "@/components/News";
import CustomersLogoSection from "@/components/CustomersLogoSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <LandingPageHero />
      <CustomersLogoSection />
      <WhyWeExistSection />
      {/* <CustomersSection /> */}
      <CaseStudiesSection />
      <HowWeDoItSection />
      <ReadyToStart />
      <TestimonialsSection autoplay={true} />
      <NewsItem />
      <NewsletterSection />
    </div>
  );
}
