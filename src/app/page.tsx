import Mobile from "@/components/mobile";
import HeroSection from "@/components/HeroSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import CustomersSection from "@/components/CustomersSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import TestimonialsSection, { Testimonial } from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";
import { image } from "motion/react-client";
import ReadyToStart from "@/components/ReadyToStart";

export default function Home() {
  const content = [
    {
      title: "Data Collection",
      description:
        "Seamlessly connect collected data to your databases, tools (PowerBI, CRMs), and customer-facing platforms for operational value.",
      content: (
        <div>
          <Mobile />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: `We aimed to go digital by gathering information on the locations of all veterinary clinics in Nigeria
          and their practitioners. Our goal was to create a single platform that would connect everyone and
          facilitate payments. Milsat managed the entire process, mapped our locations, and developed a robust
          platform for us, which significantly improved our due and license payment collection.`,
      name: 'another one',
      designation: 'Principal Engineer',
      src: ""
    },
    {
      quote: `We aimed to go digital by gathering information on the locations of all veterinary clinics in Nigeria
          and their practitioners. Our goal was to create a single platform that would connect everyone and
          facilitate payments. Milsat managed the entire process, mapped our locations, and developed a robust
          platform for us, which significantly improved our due and license payment collection.`,
      name: 'another one',
      designation: 'Principal Engineer',
      src: ""
    },
    {
      quote: `We aimed to go digital by gathering information on the locations of all veterinary clinics in Nigeria
          and their practitioners. Our goal was to create a single platform that would connect everyone and
          facilitate payments. Milsat managed the entire process, mapped our locations, and developed a robust
          platform for us, which significantly improved our due and license payment collection.`,
      name: 'another one',
      designation: 'Principal Engineer',
      src: ""
    }
  ]

  const usecases = [
    {
      description: `We aimed to go digital by gathering information on the locations of all veterinary clinics in
          Nigeria and their practitioners. Our goal was to create a single platform that would connect everyone
          and facilitate payments. Milsat managed the entire process, mapped our locations, and developed a robust
          platform for us, which significantly improved our due and license payment collection.&quot;`,
      image: '/clients/npc.png'
    },
    {
      description: `another one. We aimed to go digital by gathering information on the locations of all veterinary clinics in
          Nigeria and their practitioners. Our goal was to create a single platform that would connect everyone
          and facilitate payments. Milsat managed the entire process, mapped our locations, and developed a robust
          platform for us, which significantly improved our due and license payment collection.&quot; `,
      image: '/clients/nipost2.jpg'
    },
  ];
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <WhyWeExistSection />
      <CustomersSection />
      <HowWeDoItSection />
      <ReadyToStart />
      <TestimonialsSection autoplay={true} testimonials={testimonials} />
      <CaseStudiesSection usecases={usecases} />
    </div>
  );
}
