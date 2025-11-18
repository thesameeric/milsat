import HeroSection from "@/components/HeroSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import CustomersSection from "@/components/CustomersSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReadyToStart from "@/components/ReadyToStart";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {

  return (
    <div className="min-h-screen text-white">
      <HeroSection />
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
